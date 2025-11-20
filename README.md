# Matrix AeroCovers V2 - Landing Page

A premium, production-ready landing page for Matrix Tesla wheel covers with WhatsApp lead capture, bilingual EN/AR support, and Material-UI styling.

## 🚀 Features

### Core Features

- **11 Responsive Sections**: Hero, Product Showcase, Lifestyle, Features, Video, Pricing, Testimonials, FAQ, Final CTA, Footer
- **6 Complete Pages**: About, Contact, Shipping, Returns, Terms, Privacy (all bilingual)
- **WhatsApp Integration**: Icon-only buttons that open WhatsApp with prefilled order details (variant, model, UTM params)
- **Bilingual Support**: English/Arabic with RTL layout switching
- **Light & Dark Modes**: Complete theme system with toggle button (saves user preference)
- **Material-UI Themes**: Custom light and dark themes with luxury-tech aesthetic
- **Centralized Theme System**: All colors and styles managed from single theme.ts file
- **GTM Analytics**: Track user interactions with placement/variant/model metadata
- **Floating WhatsApp Button**: Pulsing button appears on scroll for easy access
- **Fully Responsive**: Mobile-first design tested on all screen sizes
- **Type-Safe**: 100% TypeScript with comprehensive type definitions
- **Production Ready**: ✅ Build passes, ✅ Lint passes, ✅ No TS errors

### New Improvements

#### 🎨 Subtle CSS Animations

- **Entrance animations**: Fade-in, slide-in, scale-in effects
- **Hover effects**: Card lifts, glow effects, scale transforms
- **Continuous animations**: Pulse, float, gradient animations
- **Performance optimized**: CSS-only, GPU-accelerated, respects reduced-motion
- **15+ animation classes** available for use across components

#### 🖼️ Professional Placeholder Images

- High-quality placeholder images from placehold.co
- Color-coordinated for each variant (Matte Black, Gloss White, Carbon Fiber)
- Proper dimensions showing actual layout
- Easy to replace with real product photos

#### 🎯 Icon-Only WhatsApp Buttons

- Clean, minimal design with just WhatsApp icon
- Maintains all tracking and functionality
- Better visual hierarchy
- Consistent sizing across all placements

#### 📄 Complete Footer Pages

- About Us - Company story and values
- Contact - Form with contact information
- Shipping Policy - UAE delivery details
- Returns & Refunds - 14-day guarantee
- Terms of Service - Legal terms
- Privacy Policy - Data protection

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Material-UI (MUI) v6
- **Styling**: Emotion (CSS-in-JS) + Custom CSS Animations
- **Language**: TypeScript 5
- **Package Manager**: Yarn

## 🏗️ Project Structure

```
E:\matrix\
├── app/
│   ├── components/
│   │   ├── sections/           # 11 landing page sections
│   │   ├── shared/             # Reusable components (WhatsAppButton, etc.)
│   │   ├── analytics/          # GTM tracking utilities
│   │   ├── LanguageContext.tsx # EN/AR state management
│   │   └── ThemeRegistry.tsx   # MUI Emotion cache provider
│   ├── lib/
│   │   ├── content.ts          # Bilingual content object
│   │   ├── whatsapp.ts         # WhatsApp URL generation
│   │   └── createEmotionCache.ts # LTR/RTL cache setup
│   ├── theme/
│   │   └── theme.ts            # MUI dark theme configuration
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── about/page.tsx          # About Us page
│   ├── contact/page.tsx        # Contact page
│   ├── shipping/page.tsx       # Shipping policy
│   ├── returns/page.tsx        # Returns policy
│   ├── terms/page.tsx          # Terms of service
│   ├── privacy/page.tsx        # Privacy policy
│   ├── layout.tsx              # Root layout with GTM and metadata
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Minimal CSS resets
│   └── animations.css          # CSS animation classes
├── public/
│   └── images/                 # Placeholder images (SVG)
├── env.local.example           # Sample env vars (Firebase, GTM, WhatsApp)
├── .env.local                  # Your local secrets (not committed)
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── README.md                   # This file
└── IMPROVEMENTS.md             # Detailed changelog
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- Yarn **or** npm

### Installation

1. **Install dependencies**:

   ```bash
   yarn install
   # or
   npm install
   ```

2. **Configure environment variables**:

   Copy `env.local.example` to `.env.local` (do not commit the real values) and fill in:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

   # Optional analytics + WhatsApp lead routing
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_WHATSAPP_PHONE=971501234567
   ```

   Make sure the Firebase project has Email/Password auth enabled and Firestore rules that allow the admin user to manage catalog data.

3. **Replace placeholder images**:

   Replace placeholder URLs in `app/lib/content.ts` with actual product photos:
   - Matte Black images (3 photos)
   - Gloss White images (3 photos)
   - Carbon Fiber images (3 photos)
   - Lifestyle images (Dubai, Desert)

4. **Start development server**:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 🔥 Firebase & Firestore

1. **Enable Firebase services**
   - Authentication → Email/Password (used by `/admin`)
   - Cloud Firestore → production rules so only signed-in admins can write
   - Cloud Storage → store product imagery uploaded from the admin dashboard
2. **Collections**
   - `categories`: localized hero + section content (`name`, `description`, `hero`, `productShowcase`, `features`, `lifestyle`, `pricing`, `testimonials`, `faq`, `finalCta`)
   - `products`: variant cards (`name`, `price`, `images`, `description`, `categoryId`, `carTypeIds`, `order`)
   - `carTypes`: localized car/model names tied to each `categoryId`
3. **Environment variables**
   - Duplicate `env.local.example` → `.env.local`
   - Paste all Firebase web config keys + WhatsApp phone + optional GTM ID

## 🛡️ Admin Portal

- Route: `/admin`
- Auth: Firebase Email/Password (same project as public site)
- Features:
  - Live view of `categories`, `carTypes`, and `products`
  - JSON editors with validation + success/error messaging
  - Create/Delete buttons for each collection
- Tips:
  - Keep localized strings (`en`/`ar`) in every object to avoid runtime gaps
  - `id` fields are read-only (managed by Firestore)
  - **Adding a new model**
    1. Create a category with a unique slug (the form shows the resulting public URL).
    2. Fill in all localized sections (hero, features, lifestyle, pricing, testimonials, FAQ, final CTA).
    3. (Optional) Add car types/models tied to that category to enable the Tesla-style model picker.
    4. Add products, assign them to the category, choose supported car types, and upload images directly (files land in Firebase Storage automatically).
    5. Visit `/${slug}` to view the new landing page (legacy `/tesla`, `/jetour`, `/leopard` routes still load for backward compatibility).

## 📥 Firestore Seeding

Use the provided Admin SDK credentials to re-create the legacy content in Firestore:

```bash
# 1. Export your Admin credentials as env vars (PowerShell example)
$env:FIREBASE_PROJECT_ID="halls-v1"
$env:FIREBASE_CLIENT_EMAIL="firebase-adminsdk-fbsvc@halls-v1.iam.gserviceaccount.com"
$env:FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# 2. Run the seed script (uses app/lib/content.ts data)
npm run seed:firestore
```

The script (`scripts/seedFirestore.ts`) upserts the `tesla`, `jetour`, and `leopard` categories plus their products/car types. It is idempotent, so rerunning it simply updates the existing docs.
  - **Adding a new model**
    1. Create a category with a unique slug (the form shows the public link).
    2. Add localized hero/feature/pricing/testimonial/FAQ content.
    3. (Optional) Add car types/models tied to that category so the Tesla-style model picker appears.
    4. Add products, assign them to the category, select supported car types, and upload media.
    5. Visit `/${slug}` to view the new landing page (legacy `/tesla`, `/jetour`, `/leopard` routes still work).

## 🧪 Testing & Validation

### Build Production Bundle

```bash
yarn build
```

### Run Linter

```bash
yarn lint
```

### TypeScript Type Check

```bash
npx tsc --noEmit
```

### Run All Checks

```bash
yarn lint && yarn build
```

## ✅ Functional Testing Checklist

1. **Home page**
   - Category cards render from Firestore (remove/add a category to verify live updates).
2. **Dynamic category pages (`/${slug}`)**
   - Visit `/tesla` (legacy slug) and any newly created slug to ensure hero, showcases, pricing, testimonials, FAQs, and CTAs render from Firestore.
   - For Tesla-style models, confirm car-type radios and WhatsApp CTAs populate the selected model/variant.
3. **Admin portal (`/admin`)**
   - Sign in with a Firebase Email/Password user.
   - Create/update/delete categories, car types, and products via the new form-based editors.
   - Upload multiple product images; verify they appear in Storage and on the public page immediately.
4. **WhatsApp CTAs**
   - Buttons still open WhatsApp with variant/model metadata populated.

## 🌐 Routes

| Route       | Description                             |
| ----------- | --------------------------------------- |
| `/`         | Main landing page with all 11 sections  |
| `/about`    | About Matrix - company story and values |
| `/contact`  | Contact form and information            |
| `/shipping` | Shipping policy and delivery times      |
| `/returns`  | Returns and refunds policy              |
| `/terms`    | Terms of service                        |
| `/privacy`  | Privacy policy and data handling        |
| `/admin`    | Firebase-authenticated catalog manager  |
| `/[category]` | Dynamic category/model landing page   |

## 🎨 Animation Classes

Use these classes in your components for consistent animations:

### Entrance Animations

```tsx
className = 'animate-fade-in' // Basic fade in
className = 'animate-fade-in-up' // Fade in with upward motion
className = 'animate-slide-in-left' // Slide from left
className = 'animate-slide-in-right' // Slide from right
className = 'animate-scale-in' // Zoom in
```

### Hover Effects

```tsx
className = 'card-hover' // Card lift + shadow
className = 'hover-lift' // Subtle lift
className = 'hover-glow' // Blue glow shadow
className = 'hover-scale' // Scale to 105%
```

### Continuous Effects

```tsx
className = 'animate-pulse-subtle' // Gentle pulse
className = 'animate-float' // Floating motion
className = 'animate-gradient' // Gradient animation
```

## 📱 WhatsApp Integration

All WhatsApp buttons generate URLs with prefilled messages including:

- **Variant**: Selected variant (Matte Black, Gloss White, Carbon Fiber)
- **Model**: Selected Tesla model (Model 3, Model Y)
- **UTM Params**: Captured from URL query params (`utm_source`, `utm_campaign`)
- **Placement**: CTA location for tracking

Example WhatsApp message:

```
Hi Matrix! I'd like to order AeroCovers V2.

Variant: Matte Black
Model: Tesla Model 3
City: Not provided
Source: google / tesla_owners_uae
```

## 📊 GTM Analytics Events

The following events are tracked via Google Tag Manager:

- `cta_whatsapp_click`: Tracks WhatsApp CTA clicks
- `variant_selected`: Tracks variant tab changes
- `model_selected`: Tracks model picker changes
- `faq_expand`: Tracks FAQ accordion expansions
- `video_play`: Tracks video plays

## 🎨 Customization

### Update Brand Colors

Edit `app/theme/theme.ts` - all colors for both light and dark modes:

```typescript
dark: {
  colors: {
    primary: '#1EA7FD',
    bgDark: '#0B0D10',
    bgPaper: '#1A1D23',
    // ... more colors
  }
},
light: {
  colors: {
    primary: '#1EA7FD',
    bgDark: '#F5F7FA',
    bgPaper: '#FFFFFF',
    // ... more colors
  }
}
```

### Toggle Light/Dark Mode

Users can toggle between modes using the Sun/Moon icon in the header. Preference is saved to localStorage.

```typescript
import { useThemeMode } from '@/app/components/ThemeModeContext'

const { mode, toggleMode } = useThemeMode()
```

### Update Content

Edit `app/lib/content.ts` to modify text, prices, features, testimonials, etc.

### Add Custom Animations

Edit `app/animations.css` to add new animation classes.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_WHATSAPP_PHONE`
4. Deploy

### Build for Self-Hosting

```bash
yarn build
yarn start
```

## ✅ Success Criteria (All Achieved)

- [x] All 11 sections render correctly on mobile/desktop
- [x] WhatsApp CTAs include dynamic variant/model/UTM parameters
- [x] Language switcher toggles EN/AR with proper RTL layout
- [x] Dark mode theme matches brand palette
- [x] GTM tracks CTA clicks with metadata
- [x] Passes Next.js build (`yarn build`)
- [x] No TypeScript errors (`npx tsc --noEmit`)
- [x] No ESLint warnings (`yarn lint`)
- [x] All footer pages created with actual content
- [x] Icon-only WhatsApp buttons
- [x] Professional placeholder images
- [x] Subtle CSS animations across site

## 📝 Recent Improvements

See documentation for detailed guides:

- ✅ [IMPROVEMENTS.md](IMPROVEMENTS.md) - 6 new pages, icon buttons, animations
- ✅ [THEME_GUIDE.md](THEME_GUIDE.md) - Centralized theme system guide
- ✅ [LIGHT_DARK_MODE.md](LIGHT_DARK_MODE.md) - Light/dark mode implementation

**Latest Features:**

- ✅ 6 new pages with bilingual content
- ✅ Icon-only WhatsApp buttons
- ✅ Professional placeholder images from placehold.co
- ✅ 15+ CSS animation classes
- ✅ Light & dark mode with toggle
- ✅ Centralized theme management
- ✅ Performance-optimized animations
- ✅ Accessibility improvements

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com)
- [WhatsApp API Documentation](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat)
- [Google Tag Manager](https://tagmanager.google.com)
- [Placeholder Images](https://placehold.co)

## 📄 License

Proprietary - Matrix AeroCovers

---

**Built with ❤️ for UAE Tesla Owners**

_Last Updated: January 2025_
