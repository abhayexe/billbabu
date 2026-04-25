# BillBabu Website - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub + Vercel (Easiest)

1. **Push to GitHub**

   ```bash
   cd billbabu-website
   git init
   git add .
   git commit -m "Initial commit: BillBabu website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/billbabu-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your `billbabu-website` repository
   - Vercel auto-detects Next.js - no configuration needed
   - Click "Deploy"
   - Your site will be live at `https://billbabu-website.vercel.app`

### Method 2: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd billbabu-website

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? billbabu-website
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

### 1. Update Google Cloud Console

After deployment, your URL will be something like `billbabu-website.vercel.app`.

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your Firebase project
3. Navigate to **Authentication** → **Settings** → **Authorized domains**
4. Click "Add domain"
5. Add `vercel.app` (or your custom domain if you set one up)
6. Save changes

### 2. Update Google Play Console

In your [Google Play Console](https://play.google.com/console):

1. Go to your BillBabu app
2. Navigate to **Policy** → **App content**
3. Update the following URLs:

   - **Privacy Policy**: `https://billbabu-website.vercel.app/privacy`
   - **Terms of Service**: `https://billbabu-website.vercel.app/tos`

4. Navigate to **Policy** → **Data safety**
5. Add **Data deletion URL**: `https://billbabu-website.vercel.app/delete-account`

### 3. Connect Backend API

Update the account deletion endpoint:

1. Open `app/api/delete-account/route.ts`
2. Replace the TODO section with your backend API:

```typescript
const response = await fetch(
  "https://your-backend-api.com/api/delete-account",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
    body: JSON.stringify({ phoneNumber }),
  }
);

if (!response.ok) {
  throw new Error("Backend API request failed");
}

const data = await response.json();
return NextResponse.json(data, { status: 200 });
```

3. Add environment variables in Vercel:
   - Go to your project in Vercel Dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add `API_SECRET_KEY` with your backend API key
   - Redeploy the project

## Custom Domain Setup (Optional)

### Add Custom Domain to Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Click "Add"
4. Enter your domain (e.g., `billbabu.com`)
5. Follow the DNS configuration instructions

### Update DNS Records

Add these records to your domain provider:

**For root domain (billbabu.com):**

```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Update Google Cloud & Play Console

After custom domain is active:

1. Add your custom domain to Firebase Authorized Domains
2. Update all URLs in Google Play Console to use your custom domain

## Testing Before Submission

### Mobile Responsiveness Test

Google Play reviewers test on mobile devices. Verify:

```bash
# Test on different viewports
# Open in browser and use DevTools:
# - iPhone SE (375px)
# - iPhone 12 Pro (390px)
# - Pixel 5 (393px)
# - iPad (768px)
```

### Page Load Test

All pages must load quickly:

1. Open Chrome DevTools → Network tab
2. Set throttling to "Fast 3G"
3. Test each route:
   - `/`
   - `/privacy`
   - `/tos`
   - `/delete-account`

All pages should load in under 3 seconds.

### Link Verification

Test all navigation links:

- ✅ Logo links to home
- ✅ Privacy Policy link works
- ✅ Terms of Service link works
- ✅ Delete Account link works
- ✅ Footer links work
- ✅ Email links open mail client

### Form Testing

Test the account deletion form:

1. Enter a phone number
2. Submit the form
3. Verify success/error message displays
4. Check browser console for errors

## Environment Variables

If you need environment variables:

### Local Development

Create `.env.local`:

```env
API_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

### Vercel Production

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add each variable:
   - `API_SECRET_KEY` → Production
   - `NEXT_PUBLIC_API_URL` → Production
4. Redeploy

## Troubleshooting

### Build Fails on Vercel

Check the build logs in Vercel Dashboard. Common issues:

- **TypeScript errors**: Fix type errors locally first
- **Missing dependencies**: Run `npm install` locally
- **Environment variables**: Ensure all required vars are set

### Pages Not Loading

- Clear browser cache
- Check Vercel deployment status
- Verify DNS propagation (if using custom domain)

### Form Not Submitting

- Check browser console for errors
- Verify API route exists: `/api/delete-account`
- Check network tab for failed requests
- Ensure CORS is configured if calling external API

## Monitoring

### Vercel Analytics

Enable analytics in Vercel Dashboard:

1. Go to your project
2. Navigate to **Analytics** tab
3. Enable Web Analytics
4. View real-time traffic and performance

### Error Tracking

Consider adding error tracking:

- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)
- [Datadog](https://www.datadoghq.com)

## Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Next.js Documentation](https://nextjs.org/docs)
3. Contact SupplySprout: supplysproutcompany@gmail.com

## Maintenance

### Updating Content

To update Privacy Policy or Terms of Service:

1. Edit the respective page file:
   - `app/privacy/page.tsx`
   - `app/tos/page.tsx`
2. Update the "Effective Date"
3. Commit and push changes
4. Vercel auto-deploys on push

### Updating Styles

Brand colors are used throughout. To change:

1. Search for `#172b4d` (Dark Navy) and replace
2. Search for `#00897b` (Teal) and replace
3. Test all pages for visual consistency

## Performance Optimization

The site is already optimized, but for further improvements:

1. **Add Google Play Badge Image**

   - Download official badge
   - Add to `public/google-play-badge.png`
   - Update button in `app/page.tsx`

2. **Add Favicon**

   - Create favicon.ico
   - Add to `app/favicon.ico`

3. **Add OG Images**

   - Create social share images
   - Add to `app/opengraph-image.png`

4. **Enable Compression**
   - Vercel handles this automatically
   - No additional configuration needed

## Security

- All forms use HTTPS (automatic on Vercel)
- API routes are server-side only
- No sensitive data in client-side code
- Environment variables are secure

## Backup

Your code is backed up on:

- GitHub repository
- Vercel deployment history (last 100 deployments)

To rollback:

1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

**Deployment Complete!** 🎉

Your BillBabu website is now live and Google Play Store compliant.
