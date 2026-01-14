import React from 'react';
import { Percent } from 'lucide-react'; // Or use any icon library like 'react-icons/fi'
import { MdPhoneInTalk } from 'react-icons/md';

const HeaderStrip = () => {
  return (
    <div className="flex items-center ml-35 justify-between gap-4 px-6 py-4 bg-white border-b border-gray-100 font-sans">
      
      {/* Left Section: Weekly Discount */}
      <div className="flex items-center gap-2">
        <div className="text-green-600">
          <Percent size={20} strokeWidth={3} />
        </div>
        <span className="text-slate-800 font-bold text-lg tracking-tight">
          Weekly Discount!
        </span>
      </div>

      {/* Right Section: Hotline Tooltip/Button */}
      <div className="relative">
        {/* The Little Arrow on Top */}
        <div className="absolute -top-1 left-4 w-3 h-3 bg-green-600 rotate-45 transform"></div>
        
        {/* Main Blue Box */}
        <div className="relative flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg">
          <div className="text-2xl">
            <MdPhoneInTalk />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-bold uppercase opacity-90 tracking-wider">
              Hotline
            </span>
            <span className="text-lg font-bold">
              +880 1777829308
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeaderStrip;