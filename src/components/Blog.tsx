import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const articles = [
    {
        image: "/blog.png",
        title: "Lemongrass Mint & Rosemary",
        date: "Aromatherapy",
    },
    {
        image: "/blog.png",
        title: "Skin care with a clean mind",
        date: "Wellness",
    },
    {
        image: "/blog.png",
        title: "Eco-Friendly Skincare Guide",
        date: "Sustainability",
    }
];

export default function Blog() {
    return (

        <section className="py-24 bg-white max-w-7xl mx-auto px-6">

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {articles.map((article, i) => (
                    <div key={i} className="group cursor-pointer flex flex-col gap-6">

                        <div className="group relative flex flex-col justify-end bg-white h-full overflow-hidden">
                            <div className="relative aspect-square max-w-[600px] rounded-3xl overflow-hidden bg-[#F2F5E9]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="relative mt-10 z-10 space-y-3">


                                <div className="flex items-center gap-2 text-[#4E612B] text-sm font-semibold mb-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1C2413]"></div>
                                    <span>{article.date}</span>
                                </div>

                                {/* টাইটেল: লাইন ক্ল্যাম্প ব্যবহার করা হয়েছে যাতে ২ লাইনের বেশি না যায় */}
                                <h3 className="font-serif font-bold text-2xl md:text-4xl text-[#1C2413] leading-tight group-hover:text-[#4E612B] transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* রিড মোর বাটন: এটি নিচেই ফিক্সড থাকবে */}
                                <div className="pt-2">
                                    <span className="flex items-center gap-2 text-[#4E612B] font-medium w-max transition-all pb-1 border-b-2 border-transparent group-hover:border-[#4E612B]">
                                        Read More <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </span>
                                </div>

                            </div>

                            {/* হোভার করলে হালকা একটা ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (ঐচ্ছিক) */}
                            <div className="absolute inset-0 bg-stone-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
