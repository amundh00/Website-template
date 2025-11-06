/**
 * Simple in-memory rate limiter
 * For production, consider using Redis or a dedicated rate limiting service
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  check(identifier: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const windowStart = now - config.windowMs;

    // Get existing requests for this identifier
    let requestTimes = this.requests.get(identifier) || [];

    // Filter out requests outside the current window
    requestTimes = requestTimes.filter((time) => time > windowStart);

    // Check if limit is exceeded
    if (requestTimes.length >= config.maxRequests) {
      return false;
    }

    // Add current request
    requestTimes.push(now);
    this.requests.set(identifier, requestTimes);

    return true;
  }

  reset(identifier: string): void {
    this.requests.delete(identifier);
  }

  cleanup(): void {
    const now = Date.now();
    const maxWindow = 24 * 60 * 60 * 1000; // 24 hours

    for (const [identifier, times] of this.requests.entries()) {
      const recentTimes = times.filter((time) => time > now - maxWindow);
      if (recentTimes.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, recentTimes);
      }
    }
  }
}

export const rateLimiter = new RateLimiter();

// Cleanup old entries every hour
if (typeof window === 'undefined') {
  setInterval(() => {
    rateLimiter.cleanup();
  }, 60 * 60 * 1000);
}

/**
 * Rate limit middleware helper
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 10, windowMs: 60000 }
): { success: boolean; error?: string } {
  const allowed = rateLimiter.check(identifier, config);

  if (!allowed) {
    return {
      success: false,
      error: 'Too many requests. Please try again later.',
    };
  }

  return { success: true };
}

