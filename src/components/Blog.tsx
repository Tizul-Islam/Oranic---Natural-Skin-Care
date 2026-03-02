import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const articles = [
    {
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2675&auto=format&fit=crop",
        title: "Lemongrass Mint & Rosemary",
        date: "Aromatherapy",
    },
    {
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        title: "Skin care with a clean mind",
        date: "Wellness",
    },
    {
        image: "https://images.unsplash.com/photo-1615396860010-061030e4bbcd?q=80&w=2670&auto=format&fit=crop",
        title: "Eco-Friendly Skincare Guide",
        date: "Sustainability",
    }
];

export default function Blog() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413]">
                    Our Source
                </h2>
                <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-[##4E612B] flex items-center justify-center text-[#4E612B] hover:bg-[#4E612B] hover:text-white transition">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-[#4E612B] flex items-center justify-center bg-[#4E612B] text-white hover:bg-[#324519] transition">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <div key={i} className="group cursor-pointer flex flex-col gap-4">
                        <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#F2F5E9]">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            <p className="text-[#4E612B] text-sm font-semibold mb-2">{article.date}</p>
                            <h3 className="font-serif font-bold text-2xl text-[#1C2413] leading-tight mb-4 group-hover:text-[#4E612B] transition-colors">{article.title}</h3>
                            <span className="flex items-center gap-2 text-[#4E612B] font-medium border-b border-transparent group-hover:border-[#4E612B] w-max transition-all pb-1 group-hover:pb-0">
                                Read More <ArrowUpRight size={18} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
