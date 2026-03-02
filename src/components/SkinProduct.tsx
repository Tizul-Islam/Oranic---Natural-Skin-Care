"use client";
import Containts from "@/layouts/Containts";
import Image from "next/image";
const features = [
  {
    title: "Clean Ingredients",
    desc: "No parabens, sulfates, or harsh chemicals",
    icon: "🌿",
  },
  {
    title: "Science-Backed",
    desc: "Clinically tested & dermatologist approved",
    icon: "🔬",
  },
  {
    title: "Sustainable",
    desc: "Eco-conscious packaging & sourcing",
    icon: "♻️",
  },
  { title: "Cruelty-Free", desc: "Never tested on animals", icon: "🐰" },
];

export function SkinProduct() {
  return (
    <section>
      <Containts>
        {" "}
        <div className="  mx-auto bg-[#fffff] pl-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-12 leading-tight">
            Rooted in science. <br /> Inspired by nature.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl mb-4">{f.icon}</span>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#607315] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#4d5c11] transition-colors">
            Learn more
          </button>
        </div>
        <div className="relative h-[700px] overflow-hidden shadow-xl">
          <Image
            src="/skinproduct.png"
            alt="Skincare Model"
            fill
            className="object-cover"
          />
        </div>
      </Containts>
    </section>
  );
}
