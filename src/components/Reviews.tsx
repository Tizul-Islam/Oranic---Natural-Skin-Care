import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Reviews() {
    return (
        <section className="py-24 bg-[#F2F5E9] overflow-hidden">
            <div className="max-w-7xl z-100 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Testimonial */}
                <div className="space-y-10 order-2 lg:order-1 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413]">
                        Customer Reviews!
                    </h2>

                    <div className="relative">
                        <span className="absolute -top-10 -left-6 text-8xl text-[#4E612B] opacity-10 font-serif">"</span>
                        <p className="text-2xl md:text-3xl font-serif leading-snug text-[#4E612B]">
                            “I’ve been using this cream for three weeks now, and the results are simply amazing. 
                            My skin has become more moisturized, supple, nd radiant. 
                            The texture is light, absorbs quickly, and doesn’t leave a greasy shine.” </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Image
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                            alt="Customer"
                            width={56}
                            height={56}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-bold text-[#1C2413] text-lg">Sarah Jenkins</h4>
                            <div className="flex text-yellow-500 gap-1">
                                <Star size={14} fill="currentColor" stroke="none" />                            
                              <h1>4.5</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-20 pt-4">
                        <button className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Image and Floating Card */}
                <div className="relative order-1 lg:order-2 h-[500px] lg:h-[600px] rounded-4xl  group">
                    <Image
                        src="/review.png"
                        alt="Applying Cream"
                        fill
                        className="object-cover rounded-4xl transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Product Card */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-10 lg:-left-20 bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center gap-3 border border-gray-100 max-w-[200px] z-20">
                        <div className="w-full h-40 relative rounded-lg overflow-hidden">
                            <Image
                                src="/prudect.png"
                                alt="Serum"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="font-serif font-bold text-[#1C2413] text-sm">Face Care Serum</h3>
                            <p className="text-[#4E612B] text-xs font-semibold">$45.00</p>
                            <button className="mt-2 w-full bg-[#4E612B] hover:bg-[#324519] text-white text-xs py-2 rounded-lg transition font-medium">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
