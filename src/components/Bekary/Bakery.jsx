import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../Product/ProductCard";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";


const Bakery = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["bakery-products"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-10"><LoadingSpinner></LoadingSpinner></p>;
  }

  const bakeryItems = products.filter(
    item => item.category?.toLowerCase() === "bakery"
  );

  if (bakeryItems.length === 0) {
    return <p className="text-center py-10">No bakery items found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bakeryItems.map(item => (
          <ProductCard key={item._id} Product={item} />
        ))}
      </div>
    </div>
  );
};

export default Bakery;
