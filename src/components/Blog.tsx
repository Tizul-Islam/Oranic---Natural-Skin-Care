"use client"; // নেক্সট জেএস এ ইন্টারঅ্যাক্টিভিটির জন্য এটি প্রয়োজন
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const articles = [
    { image: "/gl1.png", title: "Lemongrass Mint & Rosemary", date: "Aromatherapy" },
    { image: "/gl2.png", title: "Skin care with a clean mind", date: "Wellness" },
    { image: "/gl3.png", title: "Eco-Friendly Skincare Guide", date: "Sustainability" },
    { image: "/gl4.png", title: "Natural Glow Secrets", date: "Beauty" },
    { image: "/gl1.png", title: "Organic Health Tips", date: "Wellness" },
];

export default function Blog() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // একবারে ৩টি কার্ড দেখাবে

    const nextSlide = () => {
        if (currentIndex + itemsPerPage < articles.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* হেডার পার্ট */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6 sm:gap-0">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413]">
                        Our Source
                    </h2>
                    <div className="flex items-center gap-4">
                        {/* Prev Button */}
                        <button 
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center transition ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "text-[#4E612B] hover:bg-[#4E612B] hover:text-white"}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        {/* Next Button */}
                        <button 
                            onClick={nextSlide}
                            disabled={currentIndex + itemsPerPage >= articles.length}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                </div>

                {/* কার্ড গ্রিড স্লাইডার */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                        {articles.slice(currentIndex, currentIndex + itemsPerPage).map((article, i) => (
                            <div key={i} className="group cursor-pointer flex flex-col gap-6 animate-in fade-in slide-in-from-right-10 duration-700">
                                <div className="relative flex flex-col justify-end bg-white h-full overflow-hidden">
                                    {/* ইমেজ কার্ড */}
                                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F2F5E9]">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* কন্টেন্ট পার্ট */}
                                    <div className="relative mt-8 space-y-3">
                                        <div className="flex items-center gap-2 text-[#4E612B] text-xl font-semibold">
                                            <div className="w-4 h-4 rounded-full bg-[#1C2413]"></div>
                                            <span>{article.date}</span>
                                        </div>

                                        <h3 className="font-serif font-bold text-4xl md:text-3xl text-[#1C2413] leading-tight group-hover:text-[#4E612B] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>

                                        <div className="pt-2">
                                            <span className="flex items-center text-xl gap-2 text-[#4E612B] font-medium w-max border-b border-transparent group-hover:border-[#4E612B] transition-all">
                                                Read More <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                            </span>
                                        </div>
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