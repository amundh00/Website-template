# Website Template

A comprehensive Next.js 15 template with modern web development tools and best practices. This template provides a solid foundation for building scalable web applications with Firebase, email functionality, interactive maps, and more.

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing
- **Styled Components 6.1.19** - CSS-in-JS

### Backend & Database
- **Firebase 12.4.0** - Client SDK
- **Firebase Admin 13.5.0** - Server-side SDK
- **Firestore** - NoSQL database
- **Firebase Storage** - File storage
- **Firebase Authentication** - User authentication

### Content Management (Optional)
- **Sanity CMS** - Headless CMS option
- **@sanity/client** - Sanity JavaScript client
- **@sanity/image-url** - Image URL builder
- **next-sanity** - Sanity integration for Next.js

### Email Service
- **Resend 6.2.1** - Modern email API
- **@react-email/components 0.5.7** - Email templates
- **@react-email/render 1.4.0** - Email rendering

### Maps & Geolocation
- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 5.0.0** - React wrapper for Leaflet
- **@types/leaflet 1.9.21** - TypeScript definitions

### Development Tools
- **ESLint 9** - Code linting
- **Turbopack** - Fast development bundler
- **TypeScript Compiler** - Type checking

### Deployment
- **Vercel** - Recommended for serverless hosting
- **Node.js runtime** - For API routes

## ✨ Features

- ✅ **Server-Side Rendering (SSR)** - Fast initial page loads
- ✅ **API Routes** - Serverless functions
- ✅ **File Uploads** - Drag & drop with Firebase Storage
- ✅ **Interactive Maps** - Leaflet integration with geocoding
- ✅ **Form Validation** - Built-in validation utilities
- ✅ **Rate Limiting** - API protection
- ✅ **Email Notifications** - Beautiful email templates
- ✅ **Real-time Data** - Firestore hooks
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Modern UI Components** - Pre-built reusable components
- ✅ **Dual CMS Support** - Choose between Firebase or Sanity
- ✅ **Custom Color System** - CSS variables for easy theming
- ✅ **Dark Mode Ready** - Automatic dark mode support
- ✅ **Responsive Layout** - Header and footer on all pages

## 📦 Installation

1. **Clone or use this template:**

```bash
git clone <your-repo-url>
cd Website-template
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Copy the environment template and fill in your values:

```bash
cp env.template .env.local
```

Required environment variables:
- Firebase configuration (get from Firebase Console)
- Resend API key (get from Resend dashboard)
- Email addresses for sending

See `env.template` for the complete list.

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Firebase Storage
4. Enable Authentication (optional)
5. Get your Firebase config from Project Settings
6. Download service account key for admin SDK
7. Add credentials to `.env.local`

### Resend Setup

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Verify your domain (for production)
4. Add API key to `.env.local`

### Sanity Setup (Optional)

If you want to use Sanity CMS instead of or alongside Firebase:

1. Sign up at [Sanity](https://www.sanity.io)
2. Create a new project
3. Get your project ID and dataset name
4. Add credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```
5. See `lib/sanity/README.md` for detailed setup instructions

### Map Setup

The template uses OpenStreetMap (free, no API key needed). To use Google Maps or Mapbox:
1. Get an API key from your provider
2. Update the map components in `components/Map/`
3. Add API key to `.env.local`

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Website-template/
├── app/                        # Next.js App Router
│   ├── api/                    # API routes
│   │   ├── health/             # Health check endpoint
│   │   └── send-email/         # Email sending endpoint
│   ├── examples/               # Example pages
│   │   ├── components/         # UI components demo
│   │   └── map/                # Map integration demo
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                 # React components
│   ├── Map/                    # Map components
│   │   ├── MapComponent.tsx    # Main map component
│   │   └── index.tsx           # Dynamic import wrapper
│   └── ui/                     # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── FileUpload.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── hooks/                      # Custom React hooks
│   ├── useFileUpload.ts        # File upload hook
│   └── useFirestore.ts         # Firestore data hooks
├── lib/                        # Library code
│   ├── email/                  # Email functionality
│   │   ├── config.ts           # Resend configuration
│   │   ├── send.ts             # Email sending logic
│   │   └── templates/          # Email templates
│   ├── firebase/               # Firebase configuration
│   │   ├── admin.ts            # Admin SDK setup
│   │   ├── config.ts           # Client SDK setup
│   │   ├── firestore.ts        # Firestore operations
│   │   └── storage.ts          # Storage operations
│   ├── utils/                  # Utility functions
│   │   ├── formatters.ts       # Data formatters
│   │   ├── geocoding.ts        # Geocoding utilities
│   │   ├── rateLimit.ts        # Rate limiting
│   │   └── validation.ts       # Form validation
│   └── constants.ts            # App constants
├── types/                      # TypeScript definitions
│   ├── firebase.ts             # Firebase types
│   └── index.ts                # Common types
├── public/                     # Static files
├── env.template                # Environment variables template
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 UI Components

### Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" isLoading={false}>
  Click Me
</Button>
```

### Input
```tsx
import { Input } from '@/components/ui/Input';

<Input 
  label="Email"
  placeholder="email@example.com"
  error="Invalid email"
/>
```

### Card
```tsx
import { Card } from '@/components/ui/Card';

<Card title="Card Title" footer={<div>Footer</div>}>
  Content goes here
</Card>
```

### File Upload
```tsx
import { FileUpload } from '@/components/ui/FileUpload';

<FileUpload 
  onFileSelect={(file) => console.log(file)}
  accept="image/*"
  maxSize={5 * 1024 * 1024}
/>
```

### Map
```tsx
import { Map } from '@/components/Map';

<Map 
  center={[51.505, -0.09]}
  zoom={13}
  markers={[
    { position: [51.505, -0.09], popup: 'Hello!' }
  ]}
/>
```

## 🔥 Firebase Usage

### Firestore Operations

```tsx
import { firestoreOperations } from '@/lib/firebase/firestore';

// Create
const id = await firestoreOperations.create('users', { name: 'John' });

// Read
const user = await firestoreOperations.getOne('users', id);

// Update
await firestoreOperations.update('users', id, { name: 'Jane' });

// Delete
await firestoreOperations.delete('users', id);
```

### Real-time Data

```tsx
import { useDocument, useCollection } from '@/hooks/useFirestore';

// Listen to a document
const { data, loading, error } = useDocument('users', userId);

// Listen to a collection
const { data, loading, error } = useCollection('users');
```

### File Upload

```tsx
import { useFileUpload } from '@/hooks/useFileUpload';

const { upload, uploading, progress, downloadURL } = useFileUpload();

await upload(file, 'uploads/filename.jpg');
```

## 📧 Email Usage

### Send Email via API

```tsx
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'user@example.com',
    type: 'welcome',
    data: {
      name: 'John',
      loginUrl: 'https://example.com/login'
    }
  })
});
```

### Create Custom Email Template

```tsx
// lib/email/templates/CustomEmail.tsx
import { Html, Body, Container, Text } from '@react-email/components';

export function CustomEmail({ name }: { name: string }) {
  return (
    <Html>
      <Body>
        <Container>
          <Text>Hello {name}!</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

## 🗺️ Map Usage

### Geocoding

```tsx
import { geocodeAddress, reverseGeocode } from '@/lib/utils/geocoding';

// Address to coordinates
const result = await geocodeAddress('1600 Amphitheatre Parkway, Mountain View, CA');

// Coordinates to address
const location = await reverseGeocode(37.4224764, -122.0842499);
```

## 🛡️ Security Features

### Rate Limiting

Built-in rate limiting for API routes:

```tsx
import { checkRateLimit } from '@/lib/utils/rateLimit';

const rateLimit = checkRateLimit('user-id', {
  maxRequests: 10,
  windowMs: 60000 // 1 minute
});

if (!rateLimit.success) {
  return res.status(429).json({ error: rateLimit.error });
}
```

### Form Validation

```tsx
import { isValidEmail, validatePassword } from '@/lib/utils/validation';

if (!isValidEmail(email)) {
  // Handle error
}

const { isValid, errors } = validatePassword(password);
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

This template works on any Node.js hosting platform that supports Next.js:
- Railway
- Render
- AWS Amplify
- Digital Ocean App Platform

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key | Yes |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Yes |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Yes |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID | Yes |
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Firebase admin service account JSON | Yes |
| `RESEND_API_KEY` | Resend API key | Yes |
| `EMAIL_FROM` | Sender email address | Yes |
| `EMAIL_REPLY_TO` | Reply-to email address | No |

## 🤝 Contributing

This is a template repository. Feel free to fork and customize for your needs!

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🆘 Support

For issues and questions:
- Check the example pages at `/examples/components` and `/examples/map`
- Review the documentation in this README
- Check the inline comments in the code

## 🎯 Next Steps

After setting up the template:

1. **Customize the design** - Update colors in `tailwind.config.ts`
2. **Add authentication** - Implement Firebase Auth flows
3. **Create your data models** - Define Firestore collections
4. **Build your features** - Use the provided components and utilities
5. **Deploy** - Push to Vercel or your preferred platform

Happy coding! 🎉

