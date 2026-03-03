import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { section } from "framer-motion/client";

export default function CTASection() {
    return (
        <section className="bg-[#FAFFE5] border-t border-black/10 h-auto py-16 md:py-24">
            {/* Top Banner section */}

            <div className="max-w-7xl bg-[#FAFFE5] mx-auto px-4 md:px-6 space-y-8">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-auto lg:h-[686px]">

                    {/* Left Green Box */}
                    <div className="bg-[#607315] rounded-[30px] md:rounded-[40px] p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-white shadow-xl h-full pb-10 md:pb-14">
                        <div>
                            <span className="text-white/80 font-medium text-lg md:text-xl border-white/30 pb-1 inline-block mb-2">Expert skin care</span>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight">
                                Redefine timeless <br className="hidden sm:block" /> beauty with our care
                            </h2>
                            <button className="flex items-center justify-center sm:justify-start gap-2 bg-white text-base sm:text-lg lg:text-2xl text-[#4E612B] font-medium px-6 py-3 lg:px-10 lg:py-4 my-8 lg:my-12 rounded-full hover:bg-[#F2F5E9] transition w-full sm:w-auto">
                                Shop Now <ChevronRight size={24} className="sm:w-[24px]" />
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 md:mt-0">

                            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-6 w-full">
                                {/* অ্যাভাটার স্ট্যাক কন্টেইনার */}
                                <div className="flex items-center">
                                    <div className="flex -space-x-3 sm:-space-x-4">
                                        {/* প্রতিটি ইমেজ সার্কেল */}
                                        {[
                                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
                                        ].map((url, index) => (
                                            <div
                                                key={index}
                                                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white overflow-hidden ring-2 ring-[#4E612B]/20 shadow-sm"
                                            >
                                                <Image
                                                    src={url}
                                                    fill
                                                    className="object-cover"
                                                    alt="User"
                                                />
                                            </div>
                                        ))}

                                        {/* ডান পাশের অ্যারো বাটন সার্কেল */}
                                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#4E612B] bg-white flex items-center justify-center text-[#4E612B] shadow-md hover:bg-[#4E612B] hover:text-white transition-colors cursor-pointer z-10">
                                            <ArrowUpRight size={20} className="sm:w-[24px]" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* টেক্সট সেকশন */}
                                <div className="flex flex-col justify-center">
                                    <span className="font-serif font-bold text-3xl sm:text-4xl text-[#ffffff] leading-none mb-1 shadow-sm">12k+</span>
                                    <span className="text-[#ffffff]/90 text-sm sm:text-lg font-medium tracking-wide">Customers Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden h-[300px] md:h-full min-h-[300px] shadow-xl">
                        <Image
                            src="/cat.png"
                            alt="Applying Makeup"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>



            </div>

        </section>
    );
}
