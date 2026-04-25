# BillBabu Website - Quick Start Guide

## 🚀 Get Your Website Live in 5 Minutes

### Step 1: Test Locally (1 minute)

```bash
cd billbabu-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify:

- ✅ Landing page loads
- ✅ Navigation works
- ✅ All 4 routes accessible: `/`, `/privacy`, `/tos`, `/delete-account`

### Step 2: Deploy to Vercel (2 minutes)

**Option A: Using Vercel CLI**

```bash
npm install -g vercel
vercel
```

**Option B: Using GitHub**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Click "Deploy"

### Step 3: Update Google Cloud (1 minute)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project → Authentication → Settings
3. Scroll to "Authorized domains"
4. Add `vercel.app`

### Step 4: Update Google Play Console (1 minute)

Add these URLs to your app listing:

- **Privacy Policy**: `https://your-app.vercel.app/privacy`
- **Terms of Service**: `https://your-app.vercel.app/tos`
- **Data Deletion**: `https://your-app.vercel.app/delete-account`

### Step 5: Connect Your Backend (Optional)

Edit `app/api/delete-account/route.ts` and replace the TODO with your API endpoint.

---

## ✅ You're Done!

Your website is now:

- ✅ Live on the internet
- ✅ Mobile-responsive
- ✅ Google Play Store compliant
- ✅ Ready for app submission

## 📱 Test on Mobile

Open your Vercel URL on your phone to verify everything looks good.

## 🆘 Need Help?

- Read the full [README.md](./README.md)
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
- Email: supplysproutcompany@gmail.com

---

**Pro Tip**: Bookmark your Vercel dashboard to easily update the site later!
