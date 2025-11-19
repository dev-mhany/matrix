# Video Resources from HALOBLK

## 🎬 Video URLs

### 1. Main Hero/Gallery Video
**URL:** `https://www.haloblk.com/cdn/shop/videos/c/vp/cd217064c9f64279a746420cb70ba302/cd217064c9f64279a746420cb70ba302.HD-1080p-2.5Mbps-58469027.mp4`
- **Quality:** HD 1080p
- **Bitrate:** 2.5 Mbps
- **Use:** Main hero section video with play button overlay
- **Content:** Cinematic product showcase with Tesla

### 2. Alternative Gallery Video (SD)
**URL:** `https://www.haloblk.com/cdn/shop/videos/c/vp/447a00311165450ebc1f9f2dad6cafc2/447a00311165450ebc1f9f2dad6cafc2.SD-480p-1.5Mbps-58470714.mp4`
- **Quality:** SD 480p
- **Bitrate:** 1.5 Mbps
- **Use:** Mobile/slower connection fallback

### 3. Feature Demo Video
**URL:** `https://www.haloblk.com/cdn/shop/videos/c/vp/d20761735b28483d9446f776493daee7/d20761735b28483d9446f776493daee7.HD-1080p-2.5Mbps-59288560.mp4`
- **Quality:** HD 1080p
- **Bitrate:** 2.5 Mbps
- **Use:** Product feature demonstrations

### 4. Installation/Unboxing Video
**URL:** `https://www.haloblk.com/cdn/shop/videos/c/vp/107db9dd0c4d40398e27ffb418158dee/107db9dd0c4d40398e27ffb418158dee.HD-1080p-7.2Mbps-59587042.mp4`
- **Quality:** HD 1080p
- **Bitrate:** 7.2 Mbps (high quality)
- **Use:** "Unboxing & Install" section
- **Content:** Step-by-step installation process

### 5. Additional Feature Video
**URL:** `https://www.haloblk.com/cdn/shop/videos/c/vp/e015250c48324dd0b4219e6261a06e81/e015250c48324dd0b4219e6261a06e81.HD-1080p-3.3Mbps-58543962.mp4`
- **Quality:** HD 1080p
- **Bitrate:** 3.3 Mbps
- **Use:** Additional product features/details

---

## 📝 How to Use These Videos

### Option 1: Direct Embedding (Not Recommended)
```html
<video controls poster="thumbnail.jpg">
  <source src="VIDEO_URL_HERE" type="video/mp4">
</video>
```
⚠️ **Note:** Hotlinking may violate terms of service. Download and host your own videos.

### Option 2: Download and Self-Host (Recommended)
```bash
# Download video locally
curl -o public/videos/hero-video.mp4 "VIDEO_URL"
```

### Option 3: Use Video Hosting Service
- **Vimeo** (Professional, customizable)
- **YouTube** (Free, good SEO)
- **Wistia** (Marketing-focused)

---

## 🎥 Video Implementation Example

### Hero Video Component
```jsx
'use client';

import { useState } from 'react';

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black">
      {!isPlaying ? (
        <>
          <img 
            src="/images/video-thumbnail.jpg" 
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        </>
      ) : (
        <video
          autoPlay
          controls
          className="w-full h-full"
          src="/videos/hero-video.mp4"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
```

---

## 🎬 Video Best Practices

### 1. Video Optimization
- **Compress videos** to reduce file size (use HandBrake or FFmpeg)
- **Multiple quality versions** for different connection speeds
- **Poster images** (thumbnail) should be engaging
- **Auto-play muted** for background videos

### 2. Format & Codec
- **Format:** MP4 (best compatibility)
- **Codec:** H.264 (most compatible)
- **Audio:** AAC
- **Resolution:** 1920x1080 (Full HD)

### 3. Performance
- **Lazy load** videos not in viewport
- **Preload metadata** only (not full video)
- **Use `loading="lazy"` attribute**
- Consider using video CDN

### 4. Accessibility
- **Add captions/subtitles**
- **Descriptive poster images**
- **Keyboard controls** (play/pause with spacebar)
- **Screen reader labels**

---

## 📥 Download Commands

To download these videos to your project:

```bash
# Create videos directory
mkdir -p public/videos

# Download hero video
curl -o public/videos/hero.mp4 "https://www.haloblk.com/cdn/shop/videos/c/vp/cd217064c9f64279a746420cb70ba302/cd217064c9f64279a746420cb70ba302.HD-1080p-2.5Mbps-58469027.mp4"

# Download installation video
curl -o public/videos/installation.mp4 "https://www.haloblk.com/cdn/shop/videos/c/vp/107db9dd0c4d40398e27ffb418158dee/107db9dd0c4d40398e27ffb418158dee.HD-1080p-7.2Mbps-59587042.mp4"

# Download mobile version (SD)
curl -o public/videos/hero-mobile.mp4 "https://www.haloblk.com/cdn/shop/videos/c/vp/447a00311165450ebc1f9f2dad6cafc2/447a00311165450ebc1f9f2dad6cafc2.SD-480p-1.5Mbps-58470714.mp4"
```

---

## 🎯 Recommended Video Sections for Your Site

1. **Hero Video Banner** (after product details)
   - Cinematic product showcase
   - Play button overlay
   - Text overlays with key messages

2. **Installation Video** (dedicated section)
   - Step-by-step installation
   - Time-lapse of process
   - Tools required

3. **Feature Demonstrations** (inline with features)
   - Short clips (15-30 seconds)
   - Showing specific benefits
   - Before/after comparisons

4. **Customer Testimonials** (if available)
   - Real customer reviews
   - Cars with products installed
   - Authentic feedback

---

## 💡 Alternative: Create Your Own Videos

If you want original content, consider:

1. **Product Photography Video**
   - 360° rotation of product
   - Close-up details
   - Different angles

2. **Installation Tutorial**
   - Screen record or film installation
   - Add voiceover explanation
   - Keep it under 3 minutes

3. **Customer Showcase**
   - Film customer cars with products
   - Before/after installations
   - Quick testimonials

### Tools for Video Creation:
- **CapCut** - Free, user-friendly editor
- **DaVinci Resolve** - Professional, free
- **iMovie** - Mac users
- **Canva Video** - Quick templates

---

## 📱 Mobile Considerations

- Autoplay often disabled on mobile
- Use compelling thumbnail images
- Ensure touch-friendly play buttons
- Test on various devices
- Consider data usage (offer SD option)

---

**Remember:** Always ensure you have the rights to use any videos. Creating your own content is the safest and most authentic approach!





