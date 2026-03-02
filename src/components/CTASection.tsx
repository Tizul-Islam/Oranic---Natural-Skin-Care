import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 space-y-8">
            {/* Top Banner section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[400px]">

                {/* Left Green Box */}
                <div className="bg-[#4E612B] rounded-[40px] p-10 md:p-14 flex flex-col justify-between text-white shadow-xl h-full">
                    <div>
                        <span className="text-white/80 font-medium text-sm border-b border-white/30 pb-1 inline-block mb-6">Read more</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                            Explore absolute<br />beauty with our care
                        </h2>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <button className="bg-white text-[#4E612B] font-medium px-8 py-3 rounded-full hover:bg-[#F2F5E9] transition">
                            Get Started
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" width={44} height={44} className="rounded-full border-2 border-[#4E612B]" alt="User" />
                                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" width={44} height={44} className="rounded-full border-2 border-[#4E612B]" alt="User" />
                                <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" width={44} height={44} className="rounded-full border-2 border-[#4E612B]" alt="User" />
                                <div className="w-11 h-11 rounded-full border-2 border-[#4E612B] bg-white flex items-center justify-center font-bold text-[#4E612B] text-xs">
                                    +
                                </div>
                            </div>
                            <div className="leading-tight">
                                <span className="font-bold text-lg block">17k</span>
                                <span className="text-white/80 text-xs">Verified users</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Box */}
                <div className="relative rounded-[40px] overflow-hidden h-full min-h-[300px] shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop"
                        alt="Applying Makeup"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Instagram Feed / Image Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
                <div className="relative aspect-square rounded-[30px] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1330&auto=format&fit=crop" alt="Feed 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-[30px] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop" alt="Feed 2" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-[30px] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1615396860010-061030e4bbcd?q=80&w=2670&auto=format&fit=crop" alt="Feed 3" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-[30px] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a1c848ca9fa1?q=80&w=2574&auto=format&fit=crop" alt="Feed 4" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}
