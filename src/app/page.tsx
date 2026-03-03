import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import MiddleBanner from "@/components/MiddleBanner";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";
import {BeautyStore} from "@/components/BeautyStore";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Hero />
      <Brand/>
      <Features />``
      <Categories />
      <Products />
      <MiddleBanner />
      <Reviews />
      <BeautyStore/>
      <FAQ />
      <Blog />
      <CTASection />
      <GallerySection />
      <Footer />
    </main>
  );
}
