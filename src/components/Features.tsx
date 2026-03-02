import Image from "next/image";
import { Leaf, Award, Recycle, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Features() {
    return (
        <section className=" pl-20 flex flex-col  lg:flex-row items-center gap-16 bg-[#ffffff]">
            <div className="flex-1 space-y-12">
                <div className="max-w-md">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413] leading-tight mb-4">
                        Rooted in nature.<br />Inspired by nature.
                    </h2>
                    <p className="text-[#4E612B] font-light text-lg">
                        Experience the purest botanical elixirs for your radiant self.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 lg:gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B]">
                            <Leaf size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg mb-1">Cruelty-free</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">We love animals. No testing ever.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B]">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg mb-1">Derm Tested</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">Safe for all skin types.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B]">
                            <Award size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg mb-1">Vegan</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">100% plant-based ingredients.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B]">
                            <Recycle size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg mb-1">Eco-friendly</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">Sustainable packaging always.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 pt-6">
                
                    <div className="flex items-center gap-6">

                        {/* Learn More Button */}
                        <button className="bg-[#5F7216] text-white px-10 py-4 rounded-full text-lg font-serif">
                            Learn more
                        </button>

                        {/* Avatars Group */}
                        <div className="flex items-center -space-x-4">

                            {[1, 2, 3, 4].map((item) => (
                                <Image
                                    key={item}
                                    src={`/p${item}.jpg`}
                                    width={52}
                                    height={52}
                                    alt="User"
                                    className="rounded-full border-[3px] border-[#5F7216] object-cover"
                                />
                            ))}

                            {/* Arrow Circle */}
                            <div className="w-[56px] h-[56px] rounded-full bg-[#5F7216] flex items-center justify-center">
                                <ArrowUpRight size={25} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative w-full  aspect-[4/5] max-h-[894px] overflow-hidden ">
                <Image
                    src="/frature.png"
                    alt="Woman with nature leaf"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
            </div>
        </section>
    );
}
