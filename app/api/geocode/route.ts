import { NextRequest, NextResponse } from 'next/server';
import { geocodeAddress, reverseGeocode } from '@/lib/utils/geocoding';
import { checkRateLimit } from '@/lib/utils/rateLimit';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const address = searchParams.get('address');
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimit = checkRateLimit(`geocode-${ip}`, {
      maxRequests: 30,
      windowMs: 60000, // 30 requests per minute
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: rateLimit.error },
        { status: 429 }
      );
    }

    // Forward geocoding (address to coordinates)
    if (address) {
      const result = await geocodeAddress(address);
      
      if (!result) {
        return NextResponse.json(
          { error: 'Location not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: result,
      });
    }

    // Reverse geocoding (coordinates to address)
    if (lat && lon) {
      const result = await reverseGeocode(
        parseFloat(lat),
        parseFloat(lon)
      );

      if (!result) {
        return NextResponse.json(
          { error: 'Location not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: result,
      });
    }

    return NextResponse.json(
      { error: 'Missing required parameters: address or (lat, lon)' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Geocoding error:', error);
    return NextResponse.json(
      { error: 'Geocoding failed' },
      { status: 500 }
    );
  }
}

