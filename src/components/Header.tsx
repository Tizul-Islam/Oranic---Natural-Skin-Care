"use client";

import { useState } from "react";
import { ChevronDown, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="absolute top-0 w-full z-50 px-4 md:px-6 py-4 bg-white/90 md:bg-white backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl md:text-4xl font-serif text-[#607315] tracking-widest font-bold z-50 relative">
                    ORANIC
                </Link>

                <nav className="hidden lg:flex gap-6 xl:gap-8 text-black text-base xl:text-xl tracking-wide">
                    <Link href="/" className="flex items-center gap-1 transition hover:text-[#607315]">
                        Category
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link href="/" className="flex items-center gap-1 transition hover:text-[#607315]">
                        Shop
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link href="/" className="flex items-center gap-1 transition hover:text-[#607315]">
                        Offer
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link href="/" className="flex items-center gap-1 transition hover:text-[#607315]">
                        Pages
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                </nav>

                <div className="flex items-center gap-2 md:gap-4 text-black z-50 relative">
                    <button className="hover:text-[#607315] transition p-1 md:p-2">
                        <Search className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button className=" sm:block hover:text-[#607315] transition p-1 md:p-2">
                        <User className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button className="hover:text-[#607315] transition p-1 md:p-2 relative">
                        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute top-0 right-0 bg-[#607315] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                    </button>
                    {/* Hamburger for mobile (< 1024) */}
                    <button
                        className="block lg:hidden ml-2 p-1 hover:text-[#607315] transition"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg lg:hidden overflow-hidden border-t border-gray-100 z-40"
                    >
                        <div className="flex flex-col items-center py-8 gap-6 text-lg font-medium text-black">
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                            >
                                <Link href="/" className="flex items-center gap-2 hover:text-[#607315] transition" onClick={toggleMobileMenu}>
                                    Category
                                    <ChevronDown className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                            >
                                <Link href="/" className="flex items-center gap-2 hover:text-[#607315] transition" onClick={toggleMobileMenu}>
                                    Shop
                                    <ChevronDown className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <Link href="/" className="flex items-center gap-2 hover:text-[#607315] transition" onClick={toggleMobileMenu}>
                                    Offer
                                    <ChevronDown className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                            >
                                <Link href="/" className="flex items-center gap-2 hover:text-[#607315] transition" onClick={toggleMobileMenu}>
                                    Pages
                                    <ChevronDown className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
