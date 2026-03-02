"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LuMenu, LuNotebookPen, LuSearch, LuX } from "react-icons/lu";
import { ChevronDown, ShoppingCart, UserRound } from "lucide-react";
// import { LuMenu, LuNotebookPen, LuSearch, LuX } from "react-icons/lu";
// import MobileNav from "./MobileNav";
// import { useModalStore } from "@/store/useModalstore";
export const navbarLinks = [
  { name: "Category", href: "/category" },
  { name: "Shop", href: "/shop" },
  { name: "Offer", href: "/offer" },
  { name: "Page", href: "/page" },
];

export default function Navbar() {
  //   const { openSignIn, openSearch } = useModalStore();
  return (
    <nav className="relative h-18 top-0 left-0 w-full overflow-hidden  items-center ">
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* logo*/}
        <Logo />

        {/*navlink*/}
        <ul className="flex items-center font-medium gap-3 md:gap-6 ">
          {navbarLinks.map((link) => {
            return (
              <li
                key={link.name}
                className="hidden md:block hover:text-primary cursor-pointer"
              >
                <Link href={link.href} className="flex items-center gap-1">
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-6 text-gray-700">
          <li className="cursor-pointer flex items-center gap-1 ">
            <LuSearch size={25} />
          </li>

          <li className="cursor-pointer flex items-center gap-1 ">
            <ShoppingCart size={25} />
          </li>
          <li className="cursor-pointer flex items-center gap-1 ">
            <UserRound size={25} />
          </li>
        </div>
      </div>
      {/* <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
    </nav>
  );
}
