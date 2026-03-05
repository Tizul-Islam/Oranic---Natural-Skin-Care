import Image from 'next/image';

const GallerySection = () => {
  // 1. Defined your data properly
  const categories = [
    { id: 1, src: '/gl1.png', alt: 'Skincare Routine' },
    { id: 2, src: '/gl2.png', alt: 'Face Cream Application' },
    { id: 3, src: '/gl3.png', alt: 'Clay Mask' },
    { id: 4, src: '/gl4.png', alt: 'Moisturizing' },
  ];

  return (
    <section className="bg-[#FAFFE5] border-t border-black/10 py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] cursor-pointer bg-neutral-200"
            >
              {/* Use 'fill' instead of fixed width/height for gallery cards.
                  This allows the image to perfectly cover the 3:4 aspect ratio box.
              */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Hover Overlay: Darkens slightly and adds a subtle inner glow */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Border on Hover */}
              <div className="absolute inset-4 border border-white/30 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;