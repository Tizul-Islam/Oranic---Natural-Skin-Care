"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const faqsData = [
    { question: "What ingredients do you use?", answer: "We use 100% natural, botanically-based ingredients sourced organically whenever possible. Our products are free from synthetic fragrances, parabens, and sulfates.", id: 1 },
    { question: "Are your products cruelty-free?", answer: "Yes, we never test on animals. All of our products are 100% certified cruelty-free by Leaping Bunny.", id: 2 },
    { question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Expedited options are available at checkout.", id: 3 },
    { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase. The product must be gently used or unopened.", id: 4 },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide. Shipping costs will apply, and will be added at checkout.", id: 5 }
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
            {/* FAQ Accordion */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C2413] mb-4">
                        We've got the answers you need.
                    </h2>
                    <p className="text-[#4E612B] font-light">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqsData.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div key={faq.id} className={`border-b border-[#E5EAD7] pb-4 transition-all duration-300 ${isOpen ? 'bg-[#F2F5E9] p-6 rounded-2xl border-none shadow-sm' : ''}`}>
                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full flex justify-between items-center text-left mb-2 gap-4 outline-none group"
                                >
                                    <h4 className={`font-serif text-lg transition-colors ${isOpen ? 'font-bold text-[#1C2413]' : 'font-medium text-[#4E612B] group-hover:text-[#1C2413]'}`}>
                                        {faq.question}
                                    </h4>
                                    {isOpen ? (
                                        <ChevronUp className="text-[#4E612B] flex-shrink-0" size={20} />
                                    ) : (
                                        <ChevronDown className="text-[#4E612B] flex-shrink-0 group-hover:text-[#1C2413]" size={20} />
                                    )}
                                </button>
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-[#4E612B] font-light text-sm pr-8 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl lg:h-[700px]">
                <Image
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop"
                    alt="Natural Ingredients"
                    fill
                    className="object-cover"
                />
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur p-4 rounded-xl flex items-center justify-between border border-white/40">
                        <span className="font-serif font-bold text-[#1C2413]">100% Organic</span>
                        <span className="text-[#4E612B] font-medium text-sm border-b border-[#4E612B] hover:text-[#1C2413] hover:border-[#1C2413] transition-colors cursor-pointer">Read our sourcing policy</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
