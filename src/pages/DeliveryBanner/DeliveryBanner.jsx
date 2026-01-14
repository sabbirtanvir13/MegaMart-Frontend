import React from 'react';
import { ShoppingBag } from 'lucide-react'; // Lucide icon
import { Button } from '@mui/material'; // Material UI Button

const DeliveryBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div 
        className="relative bg-[#d5493d] min-h-[400px] flex items-center overflow-hidden rounded-lg"
        style={{
        
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
        }}
      >
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 pl-12 md:pl-20 z-10 py-10">
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
            We ship on the following day from <br />
            <span className="text-white">10:00 AM to 08:00 PM</span>
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl font-medium mb-8">
            For Purchases over $20.00
          </p>

          {/* Material UI Button with Lucide Icon */}
          <Button
            variant="contained"
            startIcon={<ShoppingBag size={20} />}
            sx={{
              backgroundColor: 'white',
              color: '#d5493d',
              borderRadius: '50px',
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: '700',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f3f3f3',
              },
            }}
          >
            Order Now
          </Button>
        </div>

        {/* Right Image Section (Delivery Boy) */}
        <div className="absolute right-0 bottom-0 w-full md:w-[55%] h-full flex justify-end items-end pointer-events-none">
          <img 
            src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-delivery-rider-on-scooter-with-package-clipart-illustration-png-image_16537256.png" // আপনার ইমেজের লিংক এখানে দিন
            alt="Delivery Boy on Scooter"
            className="h-[110%] w-auto object-contain transform translate-y-5"
          />
        </div>

        {/* Background Decorative Elements (Optional) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;