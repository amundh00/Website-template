# Quick Setup Guide

Follow these steps to get your project up and running quickly.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account
- Resend account

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. **Enable Firestore:**
   - Go to Firestore Database
   - Click "Create database"
   - Choose production mode or test mode
4. **Enable Storage:**
   - Go to Storage
   - Click "Get started"
5. **Get Web App Config:**
   - Go to Project Settings → General
   - Scroll to "Your apps"
   - Click Web icon (</>) to add web app
   - Copy the config values
6. **Create Service Account:**
   - Go to Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file

## Step 3: Resend Setup

1. Go to [Resend](https://resend.com)
2. Sign up or log in
3. Go to API Keys
4. Create a new API key
5. (Optional) Add and verify your domain for production emails

## Step 4: Environment Variables

1. Copy the environment template:
```bash
cp env.template .env.local
```

2. Fill in the values:

```env
# From Firebase web app config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Service account JSON as a single-line string
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'

# From Resend dashboard
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
EMAIL_REPLY_TO=support@yourdomain.com
```

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 6: Test the Setup

1. **Home Page:** Visit http://localhost:3000
2. **API Health Check:** Click "Test API Route" button
3. **Components:** Visit http://localhost:3000/examples/components
4. **Map:** Visit http://localhost:3000/examples/map

## Step 7: Start Building!

You're all set! Now you can:

- Modify `app/page.tsx` for your home page
- Create new pages in the `app/` directory
- Add new components in `components/`
- Customize styling in `tailwind.config.ts`
- Add your business logic in `lib/`

## Troubleshooting

### Firebase Connection Issues
- Verify all Firebase env variables are correct
- Check Firebase project is active
- Ensure Firestore and Storage are enabled

### Email Not Sending
- Verify Resend API key is correct
- Check email addresses are valid
- For production, verify your domain in Resend

### Map Not Loading
- Maps work client-side only
- Check browser console for errors
- Ensure leaflet CSS is imported

### Build Errors
- Run `npm install` again
- Delete `node_modules/` and `.next/` folders
- Clear npm cache: `npm cache clean --force`

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review the example pages for implementation details
- Check inline code comments for guidance

