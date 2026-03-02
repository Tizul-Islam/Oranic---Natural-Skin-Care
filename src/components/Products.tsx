"use client"; 
import { useState } from "react";
import Image from "next/image";

const products = [
    { name: "Face Care Serum", price: 65, discount: 10, oldPrice: 40, type: "Face Care", image: "/product.png" },
    { name: "Face Care Serum", price: 65, oldPrice: 45, type: "Face Care", image: "/product.png" },
    { name: "Body Lotion", price: 34, discount: 10, oldPrice: 49, type: "Body Care", image: "/product.png" },
    { name: "Hair Oil", price: 29, oldPrice: 47, type: "Hair Care", image: "/product.png" },
    { name: "Face Wash", price: 25, discount: 10, oldPrice: 46, type: "Face Care", image: "/product.png" },
    { name: "Body Scrub", price: 42, oldPrice: 48, type: "Body Care", image: "/product.png" },
    { name: "Lip Balm", price: 15, discount: 10, oldPrice: 49, type: "Organic", image: "/product.png" },
    { name: "Face Mask", price: 55, discount: 10, oldPrice: 45, type: "Face Care", image: "/product.png" },
];

const categories = ["Face Care", "Body Care", "Hair Care", "Organic"];

export default function Products() {
    // ডিফল্টভাবে 'All' সেট করা থাকবে যাতে শুরুতে সব প্রোডাক্ট দেখা যায়
    const [selectedCategory, setSelectedCategory] = useState("All");

    // ফিল্টারিং লজিক: যদি 'All' হয় তবে সব দেখাবে, নাহলে ক্যাটাগরি অনুযায়ী ফিল্টার করবে
    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter((p) => p.type === selectedCategory);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413] mb-4">
                            Popular Products
                        </h2>
                        <div className="flex flex-wrap gap-3 text-sm">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 rounded-full font-medium transition ${
                                        selectedCategory === category
                                            ? "bg-[#4E612B] text-white" 
                                            : "bg-[#F2F5E9] text-[#4E612B] hover:bg-[#E5EAD7]"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View All বাটন: এখানে ক্লিক করলে setSelectedCategory("All") হবে */}
                    <button 
                        onClick={() => setSelectedCategory("All")}
                        className={`text-[#4E612B] text-2xl border border-[#4E612B] py-5 px-8 rounded-full font-medium hover:text-[#1C2413] flex items-center gap-2 transition group whitespace-nowrap ${
                            selectedCategory === "All" ? "bg-[#F2F5E9]" : "bg-transparent"
                        }`}
                    >
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((p, i) => (
                        <div key={i} className="group bl-5 rounded-lg outline-1 outline-offset-6 outline-black/30 flex flex-col cursor-pointer">
                            <div className="relative aspect-square w-full h-[260px] rounded-lg bg-[#F2F5E9] overflow-hidden mb-4">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4E612B] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {p.type}
                                </div> */}
                                {p.discount && (
                                    <div className="absolute left-0 top-0 bg-[#606c1e] text-white text-lg font-bold p-6 py-2 rounded-br-xl shadow-sm">
                                        {p.discount}%
                                    </div>
                                )}
                            </div>

                            <div className="flex pb-2 justify-between items-center px-1">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-serif text-[20px] text-[#1C2413] leading-tight tracking-tight">
                                        {p.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2 mt-0.5">
                                        <span className="text-[26px] font-bold text-[#1C2413]">
                                            ${p.price}
                                        </span>
                                        <span className="text-[#9CA3AF] line-through text-lg font-serif">
                                            ${p.oldPrice}
                                        </span>
                                    </div>
                                </div>
                                <button className="bg-[#606c1e] mt-2 text-white px-5 py-2.5 rounded-full font-serif text-lg hover:bg-[#4d5718] transition-all duration-200 active:scale-95 shadow-lg shadow-olive-900/5">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}