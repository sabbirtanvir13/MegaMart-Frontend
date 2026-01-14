// import React from 'react';
// import ShopBanner from './ShopBanner';
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import ProductCard from '../Product/ProductCard';
// const Shop = () => {
//   const { data: Products = [], isLoading } = useQuery({
//     queryKey: ['latest-meals'],
//     queryFn: async () => {
//       const res = await axios(`${import.meta.env.VITE_API_URL}/products`)
//       return res.data
//     }
//   })

//   if (Products.length === 0) {
//     return <p className="text-center py-10">No products found</p>;
//   }

//     return (

        
//         <div>

            
//           <ShopBanner></ShopBanner>

//             <div className="max-w-7xl mx-auto px-4">
     

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-14">
//         {Products.map(product => (
//           <ProductCard key={product._id.toString()} Product={product} />
//         ))}
//       </div>
//     </div>
 

//         </div>
//     );
// };

// export default Shop;


import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import SidebarFilter from '../SidebarFilter/SidebarFilter';
import ProductCard from '../Product/ProductCard';
import ShopBanner from './ShopBanner';

const Shop = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    }
  });

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const statusMatch =
      selectedStatus.length === 0 || selectedStatus.includes(product.status);
    return categoryMatch && brandMatch && priceMatch && statusMatch;
  });

  if (isLoading) return <p className="text-center py-10">Loading products...</p>;

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10 flex flex-col gap-8">

      {/* Banner on top */}
      <div className="w-full">
        <ShopBanner />
      </div>

      {/* Sidebar + Products */}
      <div className="flex ml-[-310px] mt-4 flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <SidebarFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center col-span-full">No products found</p>
          ) : (
            filteredProducts.map(product => (
              <ProductCard key={product._id} Product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
