import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute top-0 w-full z-50 px-6 py-4 bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl font-serif text-[#607315] tracking-widest font-bold">
                    ORANIC
                </Link>
                <nav className="hidden md:flex gap-8 text-black text-sm tracking-wide">

                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-white transition"
                    >
                        Home
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-white transition"
                    >
                        Shop
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-white transition"
                    >
                        About
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-white transition"
                    >
                        Pages
                        <ChevronDown className="w-4 h-4" />
                    </Link>

                </nav>
                <div className="flex items-center gap-4 text-black">
                    <button className="hover:text-white transition p-2"><Search size={20} /></button>
                    <button className="hover:text-white transition p-2"><User size={20} /></button>
                    <button className="hover:text-white transition p-2 relative">
                        <ShoppingBag size={20} />
                        <span className="absolute top-0 right-0 bg-white text-[#4E612B] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
