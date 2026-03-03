import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute top-0 w-full z-50 px-4 md:px-6 py-4 bg-white/90 md:bg-white backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl md:text-4xl font-serif text-[#607315] tracking-widest font-bold">
                    ORANIC
                </Link>
                <nav className="hidden lg:flex gap-6 xl:gap-8 text-black text-base xl:text-xl tracking-wide">

                    <Link
                        href="/"
                        className="flex items-center gap-1 transition"
                    >
                        Category
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 transition"
                    >
                        Shop
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 transition"
                    >
                        Offer
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 transition"
                    >
                        Pages
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                </nav>
                <div className="flex items-center gap-2 md:gap-4 text-black">
                    <button className="hover:text-[#607315] transition p-1 md:p-2"><Search className="w-5 h-5 md:w-6 md:h-6" /></button>
                    <button className="hidden sm:block hover:text-[#607315] transition p-1 md:p-2"><User className="w-5 h-5 md:w-6 md:h-6" /></button>
                    <button className="hover:text-[#607315] transition p-1 md:p-2 relative">
                        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute top-0 right-0 bg-[#607315] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                    </button>
                    {/* Hamburger for mobile (< 1024) */}
                    <button className="block lg:hidden ml-2 p-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
