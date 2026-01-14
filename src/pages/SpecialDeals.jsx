import React from 'react';
import { ShoppingBag } from 'lucide-react'; // Lucide icon
import { Button } from '@mui/material'; // Material UI Button

const SpecialDeals = () => {
    return (
       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
 
      <div className="relative bg-[#fee2cc] rounded-2xl overflow-hidden h-[250px] flex items-center p-8 group cursor-pointer">
     
        <div className="z-10 w-2/3">
          <h2 className="text-[#202435] text-2xl md:text-3xl font-bold leading-tight mb-4">
            Everyday fresh & <br /> clean with our <br /> products
          </h2>
          <Button
            variant="contained"
            startIcon={<ShoppingBag size={14} />}
            sx={{
              backgroundColor: '#d5493d',
              color: 'white',
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#b83b31', boxShadow: 'none' },
            }}
          >
            Shop Now
          </Button>
        </div>
        {/* Images (Vegetables) */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end pointer-events-none">
          <img 
            src="https://png.pngtree.com/png-clipart/20240504/original/pngtree-landing-page-offer-fresh-product-from-green-garden-png-image_15006476.png" // Bacola demo image
            alt="Fresh Vegetables"
            className="h-[90%] w-auto object-contain transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="relative bg-[#e1f5e6] rounded-2xl overflow-hidden h-[250px] flex items-center p-8 group cursor-pointer">

        <div className="z-10 w-2/3">
          <h2 className="text-[#202435] text-2xl md:text-3xl font-bold leading-tight mb-4">
            Make your <br /> breakfast healthy <br /> and easy
          </h2>
          <Button
            variant="contained"
            startIcon={<ShoppingBag size={14} />}
            sx={{
              backgroundColor: '#003831',
              color: 'white',
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#002621', boxShadow: 'none' },
            }}
          >
            Shop Now
          </Button>
        </div>
 
        <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end pointer-events-none">
          <img 
            src="https://i.ibb.co.com/60H2H2MX/download-23.png" 
            alt="Healthy Breakfast"
            className="h-[90%] w-auto object-contain transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

    </div>
    );
};

export default SpecialDeals;