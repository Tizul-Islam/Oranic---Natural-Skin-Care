"use client";
import { motion } from "framer-motion";

const tickerItems = [
  "Skin Care",
  "Skin Care",
  "Skin Care",
  "Skin Care",
  "Skin Care",
];

export default function ScrollingTicker() {
  return (
    <div className="relative w-full bg-[#607315] py-4 overflow-hidden flex border-y border-white/10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          ease: "linear",
          duration: 20, 
          repeat: Infinity,
        }}
      >
        
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-2xl md:text-3xl font-serif px-8 uppercase tracking-wider">
              {item}
            </span>
          
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="mx-4"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
}