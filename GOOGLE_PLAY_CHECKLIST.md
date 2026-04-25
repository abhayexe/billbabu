# Google Play Store Submission Checklist

Use this checklist to ensure your BillBabu website meets all Google Play Store requirements before submitting your app.

## 🚀 Pre-Deployment

- [ ] Website builds successfully (`npm run build`)
- [ ] All pages load without errors locally
- [ ] Mobile responsive on all screen sizes
- [ ] Forms work correctly
- [ ] No console errors in browser

## 🌐 Deployment

- [ ] Website deployed to Vercel (or other hosting)
- [ ] All routes accessible via public URLs:
  - [ ] `https://your-domain.vercel.app/`
  - [ ] `https://your-domain.vercel.app/privacy`
  - [ ] `https://your-domain.vercel.app/tos`
  - [ ] `https://your-domain.vercel.app/delete-account`
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] No password protection or "under construction" pages

## 🔐 Firebase Configuration

- [ ] Firebase project created
- [ ] Firebase Authentication enabled
- [ ] Authorized domains updated:
  - [ ] `vercel.app` added (or your custom domain)
  - [ ] `localhost` present (for development)

### How to Add Authorized Domain:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Click Authentication → Settings
4. Scroll to "Authorized domains"
5. Click "Add domain"
6. Enter `vercel.app` (or your domain)
7. Save

## 📱 Google Play Console Setup

### App Information

- [ ] App name: BillBabu
- [ ] Developer name: SupplySprout
- [ ] Contact email: supplysproutcompany@gmail.com

### Store Listing

- [ ] Privacy Policy URL added:
  ```
  https://your-domain.vercel.app/privacy
  ```

### App Content → Privacy Policy

- [ ] Privacy Policy URL verified
- [ ] URL opens correctly on mobile
- [ ] Content is readable and complete

### App Content → Data Safety

- [ ] Data collection disclosed
- [ ] Data deletion instructions provided
- [ ] Data deletion URL added:
  ```
  https://your-domain.vercel.app/delete-account
  ```

### App Content → Terms of Service (Optional but Recommended)

- [ ] Terms of Service URL added:
  ```
  https://your-domain.vercel.app/tos
  ```

## 🧪 Testing Requirements

### Mobile Testing

Test on actual mobile devices or emulators:

- [ ] Privacy Policy loads on mobile
- [ ] Terms of Service loads on mobile
- [ ] Delete Account page loads on mobile
- [ ] All forms work on mobile
- [ ] Navigation menu works on mobile
- [ ] All links are clickable
- [ ] Text is readable (not too small)
- [ ] No horizontal scrolling

### Network Testing

- [ ] Pages load on 3G network
- [ ] Pages load within 3 seconds
- [ ] No broken images
- [ ] No broken links

### Browser Testing

Test on multiple browsers:

- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Firefox
- [ ] Samsung Internet

## 📋 Content Verification

### Privacy Policy Page

- [ ] Effective date displayed: April 21, 2026
- [ ] All sections present:
  - [ ] Introduction
  - [ ] Information We Collect
  - [ ] How We Use Your Information
  - [ ] Data Sharing & Third Parties
  - [ ] Data Retention & The "Danger Zone"
  - [ ] Security
  - [ ] Your Rights
  - [ ] Contact Us
- [ ] Contact email correct: supplysproutcompany@gmail.com
- [ ] No typos or formatting issues

### Terms of Service Page

- [ ] Effective date displayed: April 21, 2026
- [ ] All sections present:
  - [ ] Acceptance of Terms
  - [ ] Description of Service
  - [ ] User Responsibilities
  - [ ] No Financial or Tax Advice
  - [ ] Data and Privacy
  - [ ] Account Deletion and Data Loss
  - [ ] Limitation of Liability
  - [ ] Termination
  - [ ] Changes to Terms
  - [ ] Contact Us
- [ ] Contact email correct: supplysproutcompany@gmail.com
- [ ] No typos or formatting issues

### Delete Account Page

- [ ] Form displays correctly
- [ ] Phone number input works
- [ ] Submit button functional
- [ ] 20-day grace period warning visible
- [ ] Success/error messages display
- [ ] Contact information present

## 🔗 Backend Integration (If Applicable)

- [ ] Delete account API endpoint configured
- [ ] API endpoint tested and working
- [ ] Error handling implemented
- [ ] Success responses working
- [ ] Environment variables set in Vercel

## 🎨 Visual Quality

- [ ] Logo displays correctly
- [ ] Brand colors consistent:
  - [ ] Dark Navy (#172b4d) used correctly
  - [ ] Teal (#00897b) used correctly
- [ ] Images load properly
- [ ] No broken layouts
- [ ] Professional appearance

## 📊 Performance

- [ ] Lighthouse score > 80
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No performance warnings

## 🔍 SEO & Metadata

- [ ] Page titles set correctly
- [ ] Meta descriptions present
- [ ] Favicon displays
- [ ] Open Graph tags (optional)

## 📝 Documentation

- [ ] README.md complete
- [ ] Deployment instructions clear
- [ ] Contact information accurate

## ⚠️ Common Rejection Reasons (Avoid These!)

- [ ] ❌ Privacy Policy URL returns 404
- [ ] ❌ Privacy Policy is just a placeholder
- [ ] ❌ Website requires login to view policies
- [ ] ❌ Mobile layout is broken
- [ ] ❌ Links don't work on mobile
- [ ] ❌ Pages load too slowly
- [ ] ❌ Using anchor links (#privacy) instead of separate routes
- [ ] ❌ No account deletion method provided
- [ ] ❌ Contact information missing or incorrect
- [ ] ❌ HTTPS not enabled

## ✅ Final Verification

Before submitting to Google Play:

1. [ ] Open each URL on your phone:

   - Landing page
   - Privacy Policy
   - Terms of Service
   - Delete Account

2. [ ] Verify all content is readable

3. [ ] Test the delete account form

4. [ ] Check all navigation links work

5. [ ] Confirm contact email is correct

6. [ ] Take screenshots for your records

## 📸 Screenshots for Submission

Take screenshots of:

- [ ] Privacy Policy page (mobile view)
- [ ] Terms of Service page (mobile view)
- [ ] Delete Account page (mobile view)
- [ ] Successful form submission

## 🎯 Submission

- [ ] All checklist items completed
- [ ] URLs added to Google Play Console
- [ ] App submitted for review
- [ ] Confirmation email received

## 📞 Support

If you encounter issues:

1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review [Google Play Policy](https://play.google.com/about/developer-content-policy/)
3. Contact: supplysproutcompany@gmail.com

## 🎉 Post-Approval

After your app is approved:

- [ ] Monitor website analytics
- [ ] Check for broken links regularly
- [ ] Keep content up to date
- [ ] Respond to user feedback
- [ ] Update effective dates when policies change

---

**Good luck with your submission!** 🚀

Your website is Google Play Store compliant and ready for review.
