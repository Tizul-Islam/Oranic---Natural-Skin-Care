import Containts from "@/layouts/Containts";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#607315] text-white px-20 py-10 font-serif">
      <Containts>
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Links and Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/20">
            {/* Products Column */}
            <div>
              <h3 className="text-xl mb-6">Products</h3>
              <ul className="space-y-4 opacity-90 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Shop all
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Skin care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Face care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Body care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Hair care
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="text-xl mb-6">Information</h3>
              <ul className="space-y-4 opacity-90 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h3 className="text-xl mb-6">More</h3>
              <ul className="space-y-4 opacity-90 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-xl mb-6  ">Subscribe to our newsletter</h3>
              <div className="relative mb-6 border border-white/20 rounded-full bg-white">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full  py-5 px-3 rounded-full text-black focus:outline-none"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#607315] px-6 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                  Subscribe
                </button>
              </div>

              {/* Social Icons Placeholder */}
              <div className="flex gap-4">
                {[
                  { Icon: FaFacebookF, color: "#1877F2", label: "Facebook" },
                  { Icon: FaInstagram, color: "#E4405F", label: "Instagram" },
                  { Icon: FaWhatsapp, color: "#25D366", label: "WhatsApp" },
                  { Icon: FaYoutube, color: "#FF0000", label: "YouTube" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#F9FBE7] rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  >
                    <social.Icon
                      style={{ color: social.color }}
                      className="text-xl"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Big Logo */}
          <div className="pt-12 flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-4">
              Copyright © 2026 Oranic. All Right Reserved
            </p>

            {/* Responsive Typography: 
              - Mobile: text-7xl
              - Desktop: fluid 20vw 
          */}
            <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none select-none">
              ORANIC
            </h1>
          </div>
        </div>
      </Containts>
    </footer>
  );
};

export default Footer;
