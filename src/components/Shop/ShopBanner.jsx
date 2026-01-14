import React from "react";
import { ArrowRight } from "lucide-react";

const ShopBanner = () => {
  return (
    <div className="w-full mb-10">
      <div className="relative h-[360px] w-full overflow-hidden rounded-3xl">

        {/* Background Image (Person on Right) */}
        <img
          src="https://www.shutterstock.com/image-photo/food-groceries-shopping-basket-on-260nw-1177346140.jpg"
          alt="MegaMart Delivery"
          className="absolute inset-0 w-full h-[400px] object-cover object-right"
        />

        {/* Left Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-100/90 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-12">
          <div className="max-w-md">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wide mb-3 block">
              Fast & Reliable Delivery
            </span>

            <h2 className="text-4xl font-extrabold text-[#1f2937] leading-tight mb-4">
              MegaMart <br /> Grocery Delivery
            </h2>

            <p className="text-gray-600 mb-6">
              Fresh groceries delivered to your door with care and speed.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-sm font-bold transition shadow-lg">
              Shop Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopBanner;
