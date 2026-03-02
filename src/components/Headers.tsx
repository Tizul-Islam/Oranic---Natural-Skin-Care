"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative w-full h-[1050px] overflow-hidden flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/header.png" // Fixed: removed "/public"
          alt="Natural Skincare"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180.68deg, rgba(255, 255, 255, 0) 55.33%, rgba(169, 168, 132, 0.7) 73.39%)",
          }}
        />
      </div>

      <div className="relative z-10 mt-140 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-end pb-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-7xl font-serif leading-[1.1] mb-6 drop-shadow-lg"
          >
            Natural Makeup <br /> For Radiant Skin
          </motion.h1>
          <p className="text-white/95 text-lg mb-8 max-w-[500px] leading-relaxed font-light">
            Ponds face wash for women removes all traces of pollution, dirt, and
            impurities to give you a fresh and clean complexion.
          </p>
          <button className="w-[217px] h-[66px] bg-[#607315] hover:bg-[#4d5c11] text-white flex items-center justify-center gap-2 rounded-[44px] text-lg transition-all active:scale-95 shadow-md">
            Shop Now <HiChevronRight size={22} />
          </button>
        </div>

        <div className="flex justify-end items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-[16px] shadow-2xl w-[340px] h-[388px] flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#1A1A1A] text-xl font-serif">
                  Cucumber Extract
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-bold text-[#607315]">
                    $24.00
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    $32.00
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#607315]">
                <FiArrowUpRight size={20} />
              </div>
            </div>

            <div className="relative w-full h-[240px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/producta.png" // Fixed: removed "/public"
                alt="Skincare Products"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
