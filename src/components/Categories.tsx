"use client"; 
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const categories = [
    { title: "Skin Care", image: "/ch1.png" },
    { title: "Body Care", image: "/ch2.png" },
    { title: "Hair Care", image: "/ch3.png" },
    { title: "Face Care", image: "/ch4.png" },
    { title: "Organic", image: "/ch2.png" }, 
    { title: "New Serum", image: "/ch1.png" }
];

export default function Categories() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const itemsToShow = 4;

    const nextSlide = () => {
        
        if (currentIndex + itemsToShow < categories.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(categories.length - itemsToShow);
        }
    };

    return (
        <section className="py-12 md:py-20 px-6 md:px-8 bg-[#F2F5E9] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 md:gap-0">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413]">
                        Choose by Category
                    </h2>
                    <div className="flex gap-4 pt-4">
                       
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition active:scale-90"
                        >
                            <ArrowLeft size={20} />
                        </button>
                     
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition active:scale-90"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

               
                <div className="relative">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out"
                    >
                     
                        {categories.slice(currentIndex, currentIndex + itemsToShow).map((cat, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer animate-in fade-in slide-in-from-right-5 duration-500"
                            >
                                {/* Background Image */}
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                              
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content: The Frosted Title Bar */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-20">
                                    <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-2xl py-4 px-6 flex items-center justify-center shadow-lg">
                                        <h3 className="text-xl md:text-2xl font-serif font-medium tracking-[0.2em] uppercase text-white drop-shadow-sm">
                                            {cat.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* The Center Hover Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                    <div className="w-24 h-24 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                                        <ArrowUpRight size={40} className="text-white stroke-[1.5]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}