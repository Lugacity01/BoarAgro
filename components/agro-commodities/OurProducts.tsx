"use client";

import Image from "next/image";

const products = [
  {
    name: "Cocoa Beans (Fermented & Dried)",
    image:
      "/images/cocoa_image.jpg",
  },
  {
    name: "Soybeans",
    image:
      "/images/soya_beans_agro.jpg",
  },
  {
    name: "Raw Cashew Nuts (RCN)",
    image:
      "/images/raw_cashew_nuts.jpg",
  },
  {
    name: "Sesame Seeds",
    image:
      "/images/sesame_seed.webp",
  },
  {
    name: "Dried Split Ginger",
    image:
      "/images/dried_split_ginger.jpg",
  },
  {
    name: "Dried Split Hibiscus",
    image:
      "/images/dried_split_hibiscus.jpg",
  },
  {
    name: "Dried Chilli Pepper",
    image:
      "/images/dried_chilli_pepper.jpg",
  },
];

export default function OurProducts() {
  return (
    <section className="px-4 lg:px-10 xl:px-20 mx-auto py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[20px] lg:text-[45px] xl:text-[50px]  font-medium text-[#133F1E] mb-2">
          Our Products
        </h2>

        {/* Subtitle */}
        <p className="text-[#44464B] lg:max-w-4xl xl:max-w-5xl mx-auto text-[14px] lg:text-[18px] xl:text-[20px] md:text-base mb-10">
          We source commodities from our own farms, trusted partner farmers, and
          organized cooperatives. All commodities are processed, graded, and
          prepared to meet international quality and export standards.
        </p>

        {/* Top Grid (6 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product, index) => (
            <div
              key={index}
              className="group relative h-[220px] rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-bold text-[18px] lg:text-[22px] xl:text-[24px] md:text-base px-3 text-center">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width last product */}
        <div className="mt-6">
          <div className="group relative h-[260px] rounded-lg overflow-hidden">
            <Image
              src={products[6].image}
              alt={products[6].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white font-bold text-[18px] lg:text-[22px] xl:text-[24px]">
                {products[6].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
