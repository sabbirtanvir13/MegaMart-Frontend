import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router';
import ProductCard from './ProductCard';
import { GrFormView } from "react-icons/gr";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BestSale = () => {
  const { data: BestProducts = [], isLoading } = useQuery({
    queryKey: ['BestProducts'],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    }
  });

  if (isLoading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (BestProducts.length === 0) {
    return <p className="text-center py-10">No products found</p>;
  }

  // Top 10 products
  const topProducts = BestProducts.slice(0, 10);

  return (
    <div className="py-10">
      {/* Header */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 mb-6">
        <div>
          <h4 className="text-2xl font-bold">Best Sellers</h4>
          <p className="text-gray-500">Do not miss the current offers until the end of March.</p>
        </div>
        <Link to='/shop'>
   
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-full transition">
          
        
            View All

          </button>
        </Link>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {topProducts.map(product => (
            <SwiperSlide key={product._id.toString()}>
              <ProductCard Product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSale;
