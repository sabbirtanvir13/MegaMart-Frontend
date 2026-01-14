import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const TrendingProducts = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    }
  });
    return (
        <div className="w-64 border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
            <h3 className="text-[13px] font-bold uppercase tracking-wider mb-5 text-gray-800">Trending Products</h3>
            <div className="flex flex-col gap-5">
                {products.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start group cursor-pointer">
                        <img src={item.img} alt={item.name} className="w-12 h-12 object-contain rounded-md" />
                        <div className="flex flex-col">
                            <h4 className="text-[13px] font-medium leading-snug text-blue-900 group-hover:text-blue-500 transition-colors line-clamp-2">
                                {item.name}
                            </h4>
                            <div className="flex gap-2 items-center mt-1">
                                <span className="text-[12px] text-gray-400 line-through">{item.oldPrice}</span>
                                <span className="text-[14px] font-bold text-red-500">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;