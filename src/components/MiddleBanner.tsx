import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MiddleBanner() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center overflow-hidden my-12 group">
            {/* Main Background Image */}
            <Image
                src="/frature.png" // Replace with image_f96a60.jpg background
                alt="Natural Makeup"
                fill
                className="object-cover"
                priority
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                
                <div className="flex flex-col mt-60 md:flex-row items-center justify-between w-full gap-12">
                    
                    {/* LEFT SIDE: Product Card (image_0b91b4 design) */}
                    <div className="w-full max-w-[440px]  bg-white p-5 rounded-[1.5rem] shadow-2xl self-center md:self-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-serif text-2xl text-[#1C2413] leading-tight">
                                    Cucumber Extract
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-[#1C2413]">$24.00</span>
                                    <span className="text-stone-400 line-through text-sm font-serif italic">$32.00</span>
                                </div>
                            </div>
                            {/* Circle Arrow Button */}
                            <button className="w-18 h-18 rounded-full border border-stone-200 flex items-center justify-center text-[#606c1e] hover:bg-[#606c1e] hover:text-white transition-all duration-300">
                                <ArrowUpRight size={28} />
                            </button>
                        </div>

                        {/* Card Image Section */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F9FAF2]">
                            <Image
                                src="/c1.png" // Replace with image_0b91b4 content
                                alt="Cucumber Extract Product"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Hero Text */}
                    <div className="text-left mt-60 md:text-right">
                        <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1] drop-shadow-md">
                            Natural Makeup<br />For Radiant Skin
                        </h2>
                    </div>
                </div>

                {/* BOTTOM: Pagination Indicators */}
                <div className="absolute  bottom-12 left-10 flex gap-4">
                    <div className="w-22 h-2 bg-[#606c1e] rounded-full" /> {/* Active */}
                    <div className="w-22 h-2 bg-white/40 rounded-full" />
                    <div className="w-22 h-2 bg-white/40 rounded-full" />
                    <div className="w-22 h-2 bg-white/40 rounded-full" />
                </div>
            </div>
        </section>
    );
}