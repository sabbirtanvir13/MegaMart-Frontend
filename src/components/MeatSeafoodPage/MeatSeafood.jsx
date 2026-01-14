import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../Product/ProductCard";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";


const MeatSeafood= () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["meat-products"],
    queryFn: async () => {
   
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
   
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner> ;

  // শুধু meat & seafood category
  const meatSeafood = products.filter(
    (product) =>
      product.category === "meat" || product.category === "seafood"
  );

  if (meatSeafood.length === 0)
    return <p className="text-center py-10">No Meat & Seafood products found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Meat & Seafood</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meatSeafood.map((product) => (
          <ProductCard key={product._id} Product={product} />
        ))}
      </div>
    </div>
  );
};

export default MeatSeafood;
