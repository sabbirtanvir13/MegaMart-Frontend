import React from 'react';
import { Button, Rating } from '@mui/material';
import { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai';

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200">
      
      {/* --- Single Card Start --- */}
      <div className="relative group p-5 border-r border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 z-10">
        
        {/* Badges Area */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
          <span className="bg-sky-400 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm w-fit">23%</span>
          <span className="bg-slate-500 text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm w-fit">Recommended</span>
        </div>

        {/* Hover Icons (Right Side) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="p-2 bg-white rounded-full shadow-md border border-gray-100 hover:bg-sky-500 hover:text-white transition-colors">
            <AiOutlineExpandAlt size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md border border-gray-100 hover:bg-sky-500 hover:text-white transition-colors">
            <AiOutlineHeart size={18} />
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full h-48 flex items-center justify-center mb-6 pt-4">
          <img 
            src="https://support.moonpoint.com/info/food/9654-af-italianstyle-meatballs_277x266.jpg" 
            alt="Product" 
            className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="text-[15px] font-medium text-slate-700 leading-snug h-10 overflow-hidden">
            All Natural Italian-Style Chicken Meatballs
          </h3>
          
          <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-tight">
            In Stock
          </div>

          <div className="flex items-center gap-1">
            <Rating name="read-only" value={4} readOnly size="small" sx={{ fontSize: '14px' }} />
            <span className="text-gray-400 text-[11px]">1</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-400 line-through text-sm font-light">$9.35</span>
            <span className="text-rose-600 font-bold text-lg">$7.25</span>
          </div>
        </div>

        {/* Add to Cart Button (MUI) */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
          className=''
            variant="contained" 
            fullWidth 
            sx={{ 
              backgroundColor: ' #43A047', 
              textTransform: 'none',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '600',
              padding: '8px 0',
              '&:hover': { backgroundColor: '#43A047' }
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
      {/* --- Single Card End --- */}
     

    </div>
  );
};

export default ProductCard;