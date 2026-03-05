import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MiddleBanner() {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] xl:min-h-[700px] flex items-center overflow-hidden group">
            {/* Main Background Image */}
            <Image
                src="/frature.png" // Replace with image_f96a60.jpg background
                alt="Natural Makeup"
                fill
                className="object-cover"
                priority
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 h-full flex flex-col justify-center">

                <div className="flex flex-col mt-10 md:mt-0 lg:mt-[120px] items-center justify-between w-full gap-8 md:gap-12 lg:flex-row">

                    {/* LEFT SIDE: Product Card (image_0b91b4 design) */}
                    <div
                        className="w-full max-w-[350px] lg:max-w-[420px] mx-auto mb-0 md:mb-0 lg:ml-0 lg:mt-15 bg-white p-4 sm:p-5  rounded-[1.5rem] shadow-2xl"
                    >
                        <div className="flex justify-between items-start mb-5 sm:mb-6">

                            <div className="flex flex-col gap-1 sm:gap-2">
                                <h3 className="font-serif text-xl sm:text-2xl text-[#1C2413] leading-tight">
                                    Cucumber Extract
                                </h3>

                                <div className="flex items-center gap-2">
                                    <span className="text-lg sm:text-xl font-bold text-[#1C2413]">
                                        $24.00
                                    </span>
                                    <span className="text-stone-400 line-through text-xs sm:text-sm font-serif italic">
                                        $32.00
                                    </span>
                                </div>
                            </div>

                            {/* Arrow Button */}
                            <button
                                className="
      w-12 h-12
      sm:w-14 sm:h-14
      lg:w-16 lg:h-16
      rounded-full border border-stone-200
      flex items-center justify-center
      text-[#606c1e]
      hover:bg-[#606c1e] hover:text-white
      transition-all duration-300
    "
                            >
                                <ArrowUpRight size={24} />
                            </button>

                        </div>

                        {/* Image */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F9FAF2]">
                            <Image
                                src="/c1.png"
                                alt="Cucumber Extract Product"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Hero Text */}
                    <div className="text-left mt-12 md:mt-0 lg:mt-[280px] lg:text-right">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1] drop-shadow-md">
                            Natural Makeup<br />For Radiant Skin
                        </h2>
                    </div>
                </div>

                {/* BOTTOM: Pagination Indicators */}
                <div className="absolute bottom-8 bottom-55 md:bottom-10  left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 flex gap-2 md:gap-4">
                    <div className="w-16 md:w-22 h-2 bg-[#606c1e] rounded-full" />
                    <div className="w-16 md:w-22 h-2 bg-white/40 rounded-full" />
                    <div className="w-16 md:w-22 h-2 bg-white/40 rounded-full" />
                    <div className="w-16 md:w-22 h-2 bg-white/40 rounded-full" />
                </div>

            </div>
        </section>
    );
}