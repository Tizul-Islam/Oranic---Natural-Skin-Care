import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Reviews() {
    return (
        <section className=" bg-[#F2F5E9] overflow-hidden px-6 md:px-8">
            <div className="py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

                {/* Left Side: Testimonial */}
                <div className="space-y-10  order-2 lg:order-1 mt-12 sm:mt-0 relative z-10 w-full">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413]">
                        Customer Reviews!
                    </h2>

                    <div className="relative py-4 md:py-8 lg:py-16">
                        <p className="text-xl md:text-2xl pr-0 md:pr-10 lg:pr-28 font-serif leading-snug text-[#4E612B]">
                            “I’ve been using this cream for three weeks now, and the results are simply amazing.
                            My skin has become more moisturized, supple, and radiant.
                            The texture is light, absorbs quickly, and doesn’t leave a greasy shine.”

                        </p>
                        <div className="flex mt-8 items-center gap-4">
                            <Image
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                                alt="Customer"
                                width={56}
                                height={56}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-[#1C2413] text-lg">
                                    Sarah Jenkins
                                </h4>

                                <div className="flex items-center gap-2 mt-1">
                                    <Star size={16} fill="currentColor" stroke="none" className="text-yellow-500" />
                                    <span className="text-sm font-semibold text-[#6B833A]">
                                        4.5
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex gap-4 mt-12 lg:mt-20 pt-4">
                        <button className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Image and Floating Card */}
                <div className="relative order-1 lg:order-2 w-full  h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-[2rem] lg:rounded-[2.5rem] group mt-8 lg:mt-0">
                    <Image
                        src="/review.png"
                        alt="Applying Cream"
                        fill
                        className="object-cover rounded-[2rem] lg:rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-[1.05]"
                    />

                    {/* Floating Product Card */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-left-36 lg:-translate-x-0 bg-white p-2 rounded-lg shadow-2xl flex md:hidden lg:flex flex-col items-center gap-3 border border-gray-100 w-[240px] sm:w-[281px] h-auto z-20 scale-90 sm:scale-100 lg:scale-95 xl:scale-100 origin-bottom lg:origin-center">
                        <div className="relative aspect-square w-full h-[220px] sm:h-[290px] rounded-lg bg-[#F2F5E9] overflow-hidden">
                            <Image
                                src="/product.png"
                                alt="Serum"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute left-0 top-0 bg-[#606c1e] text-white text-base sm:text-lg font-bold p-3 py-1 sm:p-6 sm:py-2 rounded-br-2xl shadow-sm">
                                10%
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-10 pb-2 justify-between items-center px-1 w-full">
                            <div className="flex flex-col gap-1 w-full sm:w-auto text-center sm:text-left">
                                <h3 className="font-serif text-[16px] sm:text-[20px] text-[#1C2413] leading-tight tracking-tight">
                                    Face Care Serum
                                </h3>
                                <div className="flex justify-center sm:justify-start items-baseline gap-4 mt-0.5">
                                    <span className="text-[20px] sm:text-[26px] font-bold text-[#1C2413]">
                                        $45.00
                                    </span>
                                    <span className="text-[#9CA3AF] line-through text-sm sm:text-lg font-serif">
                                        $49.00
                                    </span>
                                    <button className="bg-[#606c1e] w-full sm:w-auto mt-0 md:mt-2  text-white px-4 py-2 md:px-4 md:py-2 rounded-full font-serif text-base md:text-lg hover:bg-[#4d5718] transition-all duration-200 active:scale-95 shadow-lg shadow-olive-900/5 whitespace-nowrap">
                                    Buy Now
                                </button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
