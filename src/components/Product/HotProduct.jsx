import React, { useState, useEffect } from 'react';
import { Button, LinearProgress } from '@mui/material';
import { ArrowRight } from 'lucide-react';

const HotProduct = () => {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 56,
    hours: 0,
    minutes: 43,
    seconds: 12,
  });

 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const TimeBox = ({ value }) => (
    <div className="bg-gray-100 px-2 py-1 rounded text-[#202435] font-bold text-sm min-w-[35px] text-center">
      {value < 10 ? `0${value}` : value}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#202435] uppercase tracking-tight">
            Hot Product For <span className="text-rose-600">This Week</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Dont miss this opportunity at a special discount just for this week.
          </p>
        </div>
        <button className="flex items-center gap-1 text-gray-400 text-sm font-semibold hover:text-[#2bbef9] transition-colors border border-gray-200 px-4 py-1.5 rounded-full">
          View All <ArrowRight size={14} />
        </button>
      </div>

      {/* Main Card */}
      <div className="border-2 border-rose-500 rounded-xl p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden bg-white">
        
        {/* Discount Badge */}
        <div className="absolute top-6 left-6 bg-rose-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-rose-200 z-10">
          21%
        </div>

        {/* Product Image */}
        <div className="w-48 h-48 flex-shrink-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wJWXpNyXYbRBXLnvlCsXYkNeFDvugK-_ng&s" 
            alt="Chobani Yogurt" 
            className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow w-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 line-through text-lg font-medium">$5.49</span>
            <span className="text-rose-600 text-2xl font-bold">$4.49</span>
          </div>

          <h3 className="text-xl font-bold text-[#202435] mb-2">
            Chobani Complete Vanilla Greek Yogurt
          </h3>
          
          <div className="flex items-center gap-2 mb-6 text-[11px] font-bold">
            <span className="text-gray-400 uppercase">1 kg</span>
            <span className="text-emerald-500 uppercase">In Stock</span>
          </div>

          {/* Progress Bar (Material UI) */}
          <div className="mb-6">
            <LinearProgress 
              variant="determinate" 
              value={75} 
              sx={{ 
                height: 8, 
                borderRadius: 5, 
                backgroundColor: '#f3f4f6',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #ed1c24 0%, #ff8a00 100%)',
                }
              }} 
            />
          </div>

          {/* Dynamic Countdown */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <TimeBox value={timeLeft.days} />
              <span className="font-bold text-gray-400">:</span>
              <TimeBox value={timeLeft.hours} />
              <span className="font-bold text-gray-400">:</span>
              <TimeBox value={timeLeft.minutes} />
              <span className="font-bold text-gray-400">:</span>
              <TimeBox value={timeLeft.seconds} />
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase leading-none">
              Remains until the end <br /> of the offer
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Promo Code Banner */}
      <div className="mt-6 bg-[#fff2f5] border border-dashed border-rose-300 rounded-xl py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-[#202435] text-sm font-medium">
          Super discount for your <span className="underline font-bold decoration-rose-500">first purchase.</span>
        </p>
        <div className="bg-white border-2 border-dashed border-rose-500 text-rose-600 px-6 py-1.5 rounded-lg font-black text-lg">
          FREE26Megamart
        </div>
        <p className="text-gray-400 text-xs font-medium">
          Use discount code in checkout!
        </p>
      </div>
    </div>
  );
};

export default HotProduct;