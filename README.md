
# Syskita Landing Page

A modern, responsive landing page for Syskita - the all-in-one business platform that starts with sales management and expands into complete business operations.

## 🚀 Features

- **Modern Design**: Clean, professional layout optimized for B2B SaaS
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Structured HTML with proper meta tags and semantic markup
- **Component-Based**: Modular React components for easy maintenance
- **Fast Loading**: Optimized for performance with Vite build system
- **Conversion Focused**: Strategic CTAs and social proof elements

## 📁 Project Structure

```
syskita-landing-page/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Main hero section with CTAs
│   │   ├── Features.tsx       # Sales management feature highlights
│   │   ├── Roadmap.tsx        # Future product roadmap section
│   │   ├── CustomerBanner.tsx # Customer logo showcase
│   │   └── Footer.tsx         # Footer with newsletter signup
│   ├── pages/
│   │   └── Index.tsx          # Main landing page
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets (logos, images)
└── README.md
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_REPO_URL>
   cd syskita-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📝 Customization Guide

### 1. Update Content & Copy

**Hero Section** (`src/components/Hero.tsx`):
- Line 12: Update main headline
- Line 18: Update sub-headline  
- Line 23-29: Update CTA button links
- Line 33-49: Update trust indicators/metrics

**Features** (`src/components/Features.tsx`):
- Line 7-31: Update feature list with your actual capabilities
- Line 37-42: Update section headline and description

**Roadmap** (`src/components/Roadmap.tsx`):
- Line 7-26: Update upcoming features and timelines
- Line 35-40: Update section headline

**Customer Banner** (`src/components/CustomerBanner.tsx`):
- Line 4-9: Replace placeholder logos with actual customer logos
- Line 15-19: Update section headline and description

**Footer** (`src/components/Footer.tsx`):
- Line 32-42: Update contact information
- Line 48-84: Update navigation links
- Line 106-118: Update social media links

### 2. Update SEO Meta Tags

**HTML Meta Tags** (`index.html`):
- Line 7: Update page title
- Line 8: Update meta description
- Line 9: Update keywords
- Line 12-17: Update Open Graph tags
- Line 20-24: Update Twitter Card tags
- Line 27-29: Update favicon paths
- Line 32: Update canonical URL

### 3. Replace Customer Logos

1. Add your customer logo files to the `public/logos/` directory
2. Update the `customerLogos` array in `src/components/CustomerBanner.tsx`
3. Replace placeholder URLs with actual file paths

### 4. Update Brand Colors

The design uses a blue color scheme. To customize:
- Primary: `bg-blue-600`, `text-blue-600`
- Secondary: `bg-gray-900`, `text-gray-600`
- Accents: Update in `src/index.css` if needed

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Follow the prompts** to link your GitHub repository

3. **Automatic deployments** will be set up for future pushes

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify via drag-and-drop or CLI

### Deploy to AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder contents** to your S3 bucket

3. **Configure CloudFront** distribution for the S3 bucket

## 🔗 Custom Domain Setup

### GoDaddy DNS Configuration

To point `syskita.com` to your hosting provider:

**For Vercel:**
```
Type: A Record
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A Record  
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR_SITE_NAME.netlify.app
```

**For CloudFront:**
```
Type: A Record
Name: @  
Value: [CloudFront Distribution Domain]

Type: CNAME
Name: www
Value: [CloudFront Distribution Domain]
```

### SSL Certificate
Most hosting providers (Vercel, Netlify) automatically provide SSL certificates. For custom setups, ensure SSL is configured for HTTPS.

## 📊 Analytics & Tracking

Add your tracking codes to `index.html`:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Performance Optimization

- Images are optimized for web delivery
- Code splitting is handled by Vite
- CSS is automatically purged of unused styles
- All assets are minified in production builds

## 📞 Support

For technical support or questions about customization, please contact:
- Email: dev@syskita.com
- Documentation: [Link to your docs]

## 📄 License

Private - All rights reserved by Syskita

---

**Next Steps:**
1. Update all placeholder content with your actual copy
2. Replace customer logos with real client assets  
3. Configure your domain DNS settings
4. Set up analytics tracking
5. Test the contact forms and newsletter signup
6. Launch! 🎉
