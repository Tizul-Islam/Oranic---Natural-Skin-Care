'use client';

import React, { useState } from 'react';

export const BeautyStore = () => {
  const [sliderPos, setSliderPos] = useState(50);

  // স্লাইডার যত ডান দিকে যাবে (sliderPos বাড়বে), ব্লার তত কমবে।
  // স্লাইডার বামে থাকলে (০ এর কাছাকাছি) ব্লার বেশি হবে।
  const blurValue = (100 - sliderPos) / 5; // ৫ দিয়ে ভাগ করে ব্লারের তীব্রতা নিয়ন্ত্রণ করা হয়েছে

  return (
    <div className="relative w-full max-w-8xl mx-auto aspect-video overflow-hidden cursor-ew-resize select-none ">
      {/* ১. মেইন ইমেজ (সব সময় ক্লিয়ার থাকবে) */}
      <img
        src="/ch1.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Clear"
      />

      {/* ২. ব্লার লেয়ার: এটি ডান দিকে থাকবে এবং স্লাইডার পজিশন অনুযায়ী ক্লিপ হবে */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-100"
        style={{
          clipPath: `inset(0 0 0 ${sliderPos}%)`, // এটি ডান পাশের অংশ ঢেকে রাখবে
          backdropFilter: `blur(${blurValue}px)`, // ডাইনামিক ব্লার
          backgroundColor: 'rgba(255, 255, 255, 0.05)' // হালকা গ্লাস ইফেক্ট
        }}
      >
      </div>

      {/* লেবেল সমূহ */}
      <span className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/80 backdrop-blur-sm text-[#606c1e] px-3 md:px-6 py-1 md:py-2 rounded-lg font-serif z-30 text-xs md:text-base">
        Blur
      </span>
      <span className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/80 backdrop-blur-sm text-[#606c1e] px-3 md:px-6 py-1 md:py-2 rounded-lg font-serif z-30 text-xs md:text-base">
        Clear
      </span>

      {/* ৩. স্লাইডার কন্ট্রোল */}
      <input
        type="range"
        min="0" max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-col-resize"
      />

      {/* ৪. স্লাইডার হ্যান্ডেল এবং লাইন */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-30 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex gap-1 text-[#606c1e] font-bold text-xs md:text-base">
            <span>❮</span><span>❯</span>
          </div>
        </div>
      </div>
    </div>
  );
};