import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Navbar from "@/components/navbar/Navbar";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Brand from "@/components/Brand";
import { SkinProduct } from "@/components/SkinProduct";

//import { useState } from "react";
//import Footer from "@/components/Footer";
//import Navbar from "@/components/Navbar";
//import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const [menuOpen, setMenuOpen] = useState(false);



  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased bg-background`}>
        <Navbar/>
        <Headers/>
        <Brand/>
        <SkinProduct/>

        {children}
        <Footer></Footer>
      
      </body>
    </html>
  );
}
