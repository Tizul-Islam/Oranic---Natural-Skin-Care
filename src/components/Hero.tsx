import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[130vh] min-h-[600px] flex items-center overflow-hidden">

            {/* Background Image */}
            <Image
                src="/header.png"
                alt="Woman with face mask"
                fill
                priority
                className="object-cover object-center absolute inset-0"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180.68deg, rgba(255, 255, 255, 0) 55.33%, rgba(169, 168, 132, 0.7) 73.39%)",
                }}
            />

            {/* Dark gradient overlay to make text readable */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div> */}

            <div className="relative mt-130 z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="max-w-xl text-white space-y-6 pt-20">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight tracking-tight text-[#F7F8EE]">
                        Natural Makeup<br />For Radiant Skin
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide text-[#F7F8EE]/90 max-w-md">
                        Unlock your skin's inner glow with clean, botanical-based skincare that transforms.
                    </p>
                    <button className="bg-[#6B833A] hover:bg-[#4E612B] transition-colors text-white py-4 px-8 rounded-full flex items-center gap-3 font-medium tracking-wide mt-4">
                        Shop Now <ArrowRight size={20} />
                    </button>
                </div>

                {/* Floating Product Card */}
                <div className="flex items-center mt-9 justify-center = p-6 font-sans">
                    {/* Main Card Container */}
                    <div className="w-[330px] h-[380px] bg-white rounded-[0.8rem] p-6 shadow-sm border border-stone-100 group transition-all duration-300 hover:shadow-md">

                        {/* Header: Title, Price, and Icon */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-serif text-[#2d2d2d] leading-tight">
                                    Cucumber Extract
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-[#1a1a1a]">$24.00</span>
                                    <span className="text-stone-400 line-through text-sm font-light">$32.00</span>
                                </div>
                            </div>

                            {/* Circular Action Button */}
                            <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#606c1e] transition-colors group-hover:bg-[#606c1e] group-hover:text-white group-hover:border-[#606c1e]">
                                <ArrowUpRight size={24} />
                            </button>
                        </div>

                        {/* Product Image Section */}
                        <div className="relative rounded-[0.8rem] overflow-hidden">
                            <img
                                src="/c1.png"
                                alt="Cucumber Extract Product"
                                className="w-[300px] h-[245px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Ticker / Banner at bottom */}

        </section>
    );
}
