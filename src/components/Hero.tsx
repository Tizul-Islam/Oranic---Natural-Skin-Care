import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-auto min-h-[100vh] lg:h-[130vh] lg:min-h-[600px] flex items-center overflow-hidden pb-12 lg:pb-0">

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

            <div className="relative mt-24 lg:mt-[110px] z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

                {/* Left Content */}
                <div className="max-w-xl text-white space-y-4 md:space-y-6 pt-10 md:pt-20 text-center lg:text-left flex flex-col xl:pl-4 items-center lg:items-start">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight text-[#F7F8EE]">
                        Natural Makeup<br />For Radiant Skin
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-[#F7F8EE]/90 max-w-[280px] sm:max-w-md">
                        Unlock your skin's inner glow with clean, botanical-based skincare that transforms.
                    </p>
                    <button className="bg-[#6B833A] hover:bg-[#4E612B] transition-colors text-white py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center gap-3 font-medium tracking-wide mt-4 w-max">
                        Shop Now <ArrowRight size={20} />
                    </button>
                </div>

                {/* Floating Product Card */}
                <div className="flex items-center mt-6 lg:mt-9 justify-center p-4 md:p-6 font-sans w-full lg:w-auto xl:pr-4">
                    {/* Main Card Container */}
                    <div className="w-full sm:max-w-[330px] h-auto lg:h-[380px] bg-white rounded-[0.8rem] p-5 md:p-6 shadow-sm border border-stone-100 group transition-all duration-300 hover:shadow-md">

                        {/* Header: Title, Price, and Icon */}
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                            <div className="space-y-1">
                                <h2 className="text-xl md:text-2xl font-serif text-[#2d2d2d] leading-tight">
                                    Cucumber Extract
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg md:text-xl font-bold text-[#1a1a1a]">$24.00</span>
                                    <span className="text-stone-400 line-through text-xs md:text-sm font-light">$32.00</span>
                                </div>
                            </div>

                            {/* Circular Action Button */}
                            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#606c1e] transition-colors group-hover:bg-[#606c1e] group-hover:text-white group-hover:border-[#606c1e] shrink-0 ml-2">
                                <ArrowUpRight size={20} className="md:w-[24px] md:h-[24px]" />
                            </button>
                        </div>

                        {/* Product Image Section */}
                        <div className="relative rounded-[0.8rem] overflow-hidden">
                            <img
                                src="/c1.png"
                                alt="Cucumber Extract Product"
                                className="w-full h-[200px] md:h-[245px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Ticker / Banner at bottom */}

        </section>
    );
}
