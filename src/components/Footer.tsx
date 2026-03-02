import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#4E612B] text-[#F7F8EE] pt-24 pb-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 text-sm">

                <div className="space-y-4">
                    <h4 className="font-bold mb-6 text-white text-lg font-serif tracking-widest uppercase">ORANIC</h4>
                    <p className="opacity-80 leading-relaxed font-light">
                        Bringing the pure essence of nature directly to your skincare routine. Organic, cruelty-free, and beautiful.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Product</h4>
                    <ul className="space-y-3 opacity-80 font-light">
                        <li><a href="#" className="hover:text-white transition">Skin Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Body Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Face Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Lip Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Hair Care</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Explore</h4>
                    <ul className="space-y-3 opacity-80 font-light">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Brand</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Help</h4>
                    <ul className="space-y-3 opacity-80 font-light">
                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                <div className="lg:col-span-1 space-y-4">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Stay in Touch</h4>
                    <p className="opacity-80 font-light mb-4">Subscribe to our newsletter for 10% off your first order.</p>
                    <div className="flex bg-white/10 rounded-full p-1 border border-white/20 focus-within:border-white/50 transition">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-white px-4 outline-none w-full text-sm placeholder:text-white/50"
                        />
                        <button className="bg-white text-[#4E612B] px-6 py-2 rounded-full font-bold hover:bg-[#F2F5E9] transition">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Linkedin size={18} /></a>
                    </div>
                </div>

            </div>

            {/* Huge ORANIC Text */}
            <div className="flex justify-center flex-col items-center border-t border-white/10 pt-10">
                <h1 className="text-[15vw] leading-none font-serif font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#6B833A] to-[#F7F8EE]/30 tracking-widest select-none">
                    ORANIC
                </h1>
                <p className="opacity-50 text-xs mt-2">&copy; {new Date().getFullYear()} Oranic Cosmetics. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
