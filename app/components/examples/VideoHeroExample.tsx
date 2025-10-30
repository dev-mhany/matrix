'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * HALOBLK-Style Video Hero Component
 * 
 * Features:
 * - Full-width video banner
 * - Play button overlay
 * - Text overlays on sides
 * - Cinematic feel
 * 
 * Based on HALOBLK product page "Gallery Gallery" section
 */

export default function VideoHeroExample() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Gallery <span className="text-gray-400">Gallery</span>
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          {!isPlaying ? (
            <>
              {/* Video Thumbnail/Poster */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/features/color-options.jpg"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

                {/* Text Overlays */}
                <div className="absolute inset-0 flex items-end justify-between p-8 md:p-12">
                  {/* Left Text */}
                  <div className="text-white max-w-xs">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Choose Your Number
                    </h3>
                    <p className="text-lg md:text-xl opacity-90">
                      Define Your Story
                    </p>
                  </div>

                  {/* Right Text */}
                  <div className="text-white text-right max-w-xs">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      More Than a Number
                    </h3>
                    <p className="text-lg md:text-xl opacity-90">
                      A Statement
                    </p>
                  </div>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
                    <svg 
                      className="w-10 h-10 md:w-12 md:h-12 text-black ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="sr-only">Play video</span>
                </button>
              </div>
            </>
          ) : (
            <video
              autoPlay
              controls
              className="w-full h-full"
              poster="/images/features/color-options.jpg"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Feature Pills Below Video */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <p className="font-semibold">Increase Range Up to 10%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <p className="font-semibold">Fits over 20+ Tesla Wheels</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <p className="font-semibold">30-Second Installation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <p className="font-semibold">Available in Black & White</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Alternative: Simpler Version
 * Use this if you want a more minimal design
 */
export function SimpleVideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Enhance Your Tesla's Efficiency
        </h2>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <>
              <Image
                src="/images/features/installation.jpg"
                alt="Installation video"
                fill
                className="object-cover"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <video autoPlay controls className="w-full h-full">
              <source src="/videos/installation.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Usage in your page:
 * 
 * import VideoHeroExample from './components/examples/VideoHeroExample';
 * 
 * <VideoHeroExample />
 * 
 * or
 * 
 * import { SimpleVideoHero } from './components/examples/VideoHeroExample';
 * 
 * <SimpleVideoHero />
 */



