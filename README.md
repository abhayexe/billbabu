# BillBabu Website

Production-ready website for BillBabu mobile application, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Google Play Store compliant with separate routes for legal pages
- ✅ Mobile-responsive design optimized for all devices
- ✅ Account deletion request page with form submission
- ✅ Privacy Policy and Terms of Service pages
- ✅ Brand colors: Dark Navy (#172b4d) and Teal (#00897b)
- ✅ Fast loading times and SEO optimized

## Project Structure

```
billbabu-website/
├── app/
│   ├── api/
│   │   └── delete-account/
│   │       └── route.ts          # API endpoint for account deletion
│   ├── delete-account/
│   │   └── page.tsx               # Account deletion request page
│   ├── privacy/
│   │   └── page.tsx               # Privacy Policy page
│   ├── tos/
│   │   └── page.tsx               # Terms of Service page
│   ├── layout.tsx                 # Root layout with Navigation & Footer
│   ├── page.tsx                   # Landing page
│   └── globals.css                # Global styles
├── components/
│   ├── Navigation.tsx             # Header navigation component
│   └── Footer.tsx                 # Footer component
└── public/                        # Static assets
```

## Routes

- `/` - Landing page
- `/privacy` - Privacy Policy (Google Play compliant)
- `/tos` - Terms of Service (Google Play compliant)
- `/delete-account` - Account deletion request form (Google Play required)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd billbabu-website
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live at `https://billbabu.vercel.app` (or your custom domain).

## Google Play Store Setup

### 1. Add Authorized Domain

After deploying to Vercel:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to your Firebase project
3. Go to "Authentication" → "Settings" → "Authorized domains"
4. Add `vercel.app` (or your custom domain)

### 2. Update Google Play Console

In your Google Play Console app listing:

1. **Privacy Policy URL**: `https://your-domain.vercel.app/privacy`
2. **Terms of Service URL**: `https://your-domain.vercel.app/tos`
3. **Data Deletion URL**: `https://your-domain.vercel.app/delete-account`

## Connecting to Your Backend

The account deletion form currently uses a placeholder API. To connect it to your backend:

1. Open `app/api/delete-account/route.ts`
2. Replace the TODO section with your actual backend API call
3. Update the endpoint URL and authentication headers

Example:

```typescript
const response = await fetch("https://your-backend-api.com/delete-account", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_API_KEY",
  },
  body: JSON.stringify({ phoneNumber }),
});
```

## Customization

### Brand Colors

The website uses your brand colors defined in Tailwind:

- Dark Navy: `#172b4d` - Used for "Bill" text and primary headings
- Teal: `#00897b` - Used for "Babu" text, buttons, and accents

To modify colors, update the hex values in the component files.

### Google Play Badge

Replace the placeholder "Get it on Google Play" button with the actual badge:

1. Download the official badge from [Google Play Badges](https://play.google.com/intl/en_us/badges/)
2. Add the image to the `public` folder
3. Update the link in `app/page.tsx` with your Play Store URL

## Performance

- Optimized for mobile devices (Google Play reviewers test on mobile)
- Fast loading times with Next.js App Router
- Server-side rendering for better SEO
- Responsive images and lazy loading

## Support

For questions or issues:

- Developer: SupplySprout
- Email: supplysproutcompany@gmail.com

## License

© 2026 SupplySprout. All rights reserved.
