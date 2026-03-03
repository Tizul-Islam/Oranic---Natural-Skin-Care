import Image from "next/image";
import { Leaf, Award, Recycle, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Features() {
    return (
        <section className="px-4 pb-12 pt-12 lg:pt-0 sm:px-6 lg:pl-16 xl:pl-[104px] lg:pr-0 lg:pb-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16 bg-[#ffffff]">
            <div className="flex-1 space-y-10 lg:space-y-12 w-full max-w-xl lg:max-w-none mx-auto lg:py-20 lg:pr-8 xl:pr-0">
                <div className="max-w-md xl:max-w-lg">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#1C2413] leading-tight mb-4">
                        Rooted in nature.<br />Inspired by nature.
                    </h2>
                    <p className="text-[#4E612B] font-light text-base md:text-lg">
                        Experience the purest botanical elixirs for your radiant self.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {/* Feature 1 */}
                    <div className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-start">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B] shrink-0">
                            <Leaf size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg lg:text-xl mb-1 mt-1 sm:mt-0">Cruelty-free</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">We love animals. No testing ever.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-start">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B] shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg lg:text-xl mb-1 mt-1 sm:mt-0">Derm Tested</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">Safe for all skin types.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-start">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B] shrink-0">
                            <Award size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg lg:text-xl mb-1 mt-1 sm:mt-0">Vegan</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">100% plant-based ingredients.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-start">
                        <div className="w-12 h-12 rounded-full bg-[#E5EAD7] flex items-center justify-center text-[#4E612B] shrink-0">
                            <Recycle size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-[#1C2413] text-lg lg:text-xl mb-1 mt-1 sm:mt-0">Eco-friendly</h4>
                            <p className="text-sm text-[#4E612B]/80 font-light">Sustainable packaging always.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 pt-2 lg:pt-6 w-full lg:w-auto">

                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 w-full sm:w-auto">

                        {/* Learn More Button */}
                        <button className="bg-[#5F7216] w-full sm:w-auto text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-serif transition hover:bg-[#4E612B]">
                            Learn more
                        </button>

                        {/* Avatars Group */}
                        <div className="flex items-center -space-x-4">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="relative w-[48px] h-[48px] lg:w-[52px] lg:h-[52px] rounded-full overflow-hidden border-[3px] border-[#5F7216]"
                                >
                                    <Image
                                        src={`/p${item}.jpg`}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}

                            {/* Arrow Circle */}
                            <div className="w-[52px] h-[52px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#5F7216] flex items-center justify-center cursor-pointer transition hover:bg-[#4E612B]">
                                <ArrowUpRight size={24} className="text-white lg:w-[25px] lg:h-[25px]" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative w-full aspect-[4/5] max-h-[600px] lg:max-h-[894px] overflow-hidden rounded-[2rem] lg:rounded-none lg:rounded-l-[4rem]">
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
