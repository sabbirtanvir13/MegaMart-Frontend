import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Fresh Groceries Delivered",
    subtitle: "Up to 30% Off on Vegetables",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    id: 2,
    title: "Meat & Seafood Collection",
    subtitle: "Premium Quality, Best Price",
    image: "https://vid.alarabiya.net/images/2017/11/22/da866e59-2f59-420f-b0f0-965e380481c7/da866e59-2f59-420f-b0f0-965e380481c7.png?crop=4:3&width=1200",
  },
  {
    id: 3,
    title: "Bakery & Daily Needs",
    subtitle: "Fresh Every Morning",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20251010/pngtree-colorful-assortment-of-freshly-baked-gourmet-pastries-breads-and-cakes-displayed-image_19824124.webp",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl overflow-hidden"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[420px] md:h-[500px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
