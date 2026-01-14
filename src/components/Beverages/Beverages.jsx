import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

const Beverages = () => {

      const { data: products = [], isLoading } = useQuery({
    queryKey: ["beverages-products"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-10"><LoadingSpinner></LoadingSpinner></p>;
  }
   const beveragesItems = products.filter(
    item => item.category?.toLowerCase() === "Beverages"
  );
if (beveragesItems.length === 0) {
    return <p className="text-center py-10">No beverages items found</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {beveragesItems.map(item => (
          <ProductCard key={item._id} Product={item} />
        ))}
      </div>
    </div>
  );
};

export default Beverages;
