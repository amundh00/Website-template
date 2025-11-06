# Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## 1. Install Dependencies
```bash
npm install
```

## 2. Set Up Environment Variables
```bash
cp env.template .env.local
```

Then edit `.env.local` with your:
- Firebase credentials (from Firebase Console)
- Resend API key (from Resend Dashboard)
- Email addresses

## 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## 4. Explore Examples
- **Home Page**: http://localhost:3000
- **UI Components**: http://localhost:3000/examples/components
- **Map Integration**: http://localhost:3000/examples/map
- **API Health Check**: http://localhost:3000/api/health

## 5. Start Building!

### Create a New Page
Create a file at `app/your-page/page.tsx`:
```tsx
export default function YourPage() {
  return <div>Your content here</div>;
}
```

### Create a New API Route
Create a file at `app/api/your-route/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello!' });
}
```

### Use UI Components
```tsx
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
```

### Use Firebase
```tsx
import { firestoreOperations } from '@/lib/firebase/firestore';
import { useDocument } from '@/hooks/useFirestore';
```

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Need Help?

- 📖 See [README.md](./README.md) for complete documentation
- 🔧 See [SETUP.md](./SETUP.md) for detailed setup instructions
- 💡 Check the example pages for implementation patterns

## Next Steps

1. Customize `tailwind.config.ts` for your brand colors
2. Add your logo and favicon
3. Set up Firebase collections
4. Create your feature pages
5. Deploy to Vercel

Happy coding! 🚀

