import React from 'react';
import { Smartphone, PackageCheck, Timer } from 'lucide-react';
import { Card, CardContent, Divider } from '@mui/material';

const InfoSidebar = () => {
  return (
    <div className="p-10  flex justify-center items-center w-80 ml-[-8px] h-[450px] overflow-hidden rounded-2xl">
      <Card 
        variant="outlined" 
        sx={{ 
          maxWidth: 360, 
          borderRadius: 2, 
          borderColor: '#e5e7eb', // tailwind gray-200
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        {/* Row 1: Download App */}
        <div className="flex items-center gap-6 p-6 transition-colors hover:bg-gray-50 cursor-pointer">
          <div className="flex-shrink-0">
            <Smartphone size={40} strokeWidth={1.5} className="text-gray-700" />
          </div>
          <p className="text-[15px] font-medium leading-tight text-gray-800">
            Download the Bacola App to your Phone.
          </p>
        </div>

        <Divider />

        {/* Row 2: Order Now */}
        <div className="flex items-center gap-6 p-6 transition-colors hover:bg-gray-50 cursor-pointer">
          <div className="flex-shrink-0">
            <PackageCheck size={40} strokeWidth={1.5} className="text-gray-700" />
          </div>
          <p className="text-[15px] font-medium leading-tight text-gray-800">
            Order now so you don't miss the opportunities.
          </p>
        </div>

        <Divider />

        {/* Row 3: Delivery Time */}
        <div className="flex items-center gap-6 p-6 transition-colors hover:bg-gray-50 cursor-pointer">
          <div className="flex-shrink-0">
            <Timer size={40} strokeWidth={1.5} className="text-gray-700" />
          </div>
          <p className="text-[15px] font-medium leading-tight text-gray-800">
            Your order will arrive at your door in 15 minutes.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default InfoSidebar;