import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router';
import ProductCard from './ProductCard';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';

const NewProducts = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['NewProducts'],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    }
  });

  if (isLoading) {
    return <p className="text-center py-10"><LoadingSpinner></LoadingSpinner></p>;
  }

  if (products.length === 0) {
    return <p className="text-center py-10">No products found</p>;
  }

  // Top 10–15 products
  const topProducts = products.slice(0, 8);

  return (
    <div className="py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto px-4 mb-10 gap-4">
        <div>
          <h4 className="text-2xl font-bold text-gray-800">
    NEW PRODUCTS

          </h4>
          <p className="text-gray-500">
            Do not miss New products with updated stocks.
          </p>
        </div>

        <Link to="/shop">
          <button className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition">
            View All
          </button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topProducts.map(product => (
            <ProductCard
              key={product._id}
              Product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
