import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { section } from "framer-motion/client";

export default function CTASection() {
    return (
        <section className="bg-[#FAFFE5] h-[844px] ">
            {/* Top Banner section */}

            <div className="p-20 max-w-7xl bg-[#FAFFE5] mx-auto px-6 space-y-8">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[686px]">

                    {/* Left Green Box */}
                    <div className="bg-[#607315] rounded-[40px] p-10 md:p-14 flex flex-col  justify-center text-white shadow-xl h-full">
                        <div className="">
                            <span className="text-white/80 font-medium text-xl border-white/30 pb-1 inline-block mb-2">Expert skin care</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Redefine timeless <br /> beauty with our care
                            </h2>
                            <button className="flex items-center gap-2 bg-white text-2xl text-[#4E612B] font-medium px-10 py-4 my-12 rounded-full hover:bg-[#F2F5E9] transition">
                                Shop Now <ChevronRight size={24} />
                            </button>
                        </div>

                        <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-6">

                            <div className="flex items-center gap-6">
                                {/* অ্যাভাটার স্ট্যাক কন্টেইনার */}
                                <div className="flex items-center">
                                    <div className="flex -space-x-4">
                                        {/* প্রতিটি ইমেজ সার্কেল */}
                                        {[
                                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
                                        ].map((url, index) => (
                                            <div
                                                key={index}
                                                className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden ring-2 ring-[#4E612B]/20 shadow-sm"
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
                                        <div className="relative w-14 h-14 rounded-full border-2 border-[#4E612B] bg-white flex items-center justify-center text-[#4E612B] shadow-md hover:bg-[#4E612B] hover:text-white transition-colors cursor-pointer z-10">
                                            <ArrowUpRight size={24} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* টেক্সট সেকশন */}
                                <div className="flex flex-col justify-center">
                                    <span className="font-serif font-bold text-4xl text-[#ffffff] leading-none">12k+</span>
                                    <span className="text-[#ffffff]/80 text-lg font-medium tracking-wide">Customers Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="relative rounded-[40px] overflow-hidden h-full min-h-[300px] shadow-xl">
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
