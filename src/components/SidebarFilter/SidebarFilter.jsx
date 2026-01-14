// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';
// import { Slider, Checkbox, FormControlLabel, Button } from '@mui/material';
// import ViewVideo from '../../../public/video/view.mp4'
// const SidebarFilter = () => {
//     const [priceRange, setPriceRange] = useState([0, 70]);

//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     const categories = [
//         { name: "Beverages", hasSub: false },
//         { name: "Biscuits & Snacks", hasSub: true },
//         { name: "Breads & Bakery", hasSub: true },
//         { name: "Breakfast & Dairy", hasSub: true },
//         { name: "Frozen Foods", hasSub: false },
//         { name: "Fruits & Vegetables", hasSub: true },
//         { name: "Grocery & Staples", hasSub: false },
//         { name: "Household Needs", hasSub: false },
//         { name: "Meats & Seafood", hasSub: true },
//     ];

//     const brands = [
//         { name: "Frito Lay", count: 10 },
//         { name: "Nespresso", count: 12 },
//         { name: "Oreo", count: 9 },
//         { name: "Quaker", count: 9 },
//         { name: "Welch's", count: 10 },
//     ];

//     return (
//         <div className="w-80 p-6 bg-white flex flex-col gap-10 font-sans text-[#202435]">

//             {/* Product Categories */}
//             <section>
//                 <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Product Categories</h3>
//                 <div className="flex flex-col gap-1">
//                     {categories.map((cat, index) => (
//                         <div key={index} className="flex items-center justify-between group cursor-pointer">
//                             <FormControlLabel
//                                 control={<Checkbox size="small" sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }} />}
//                                 label={<span className="text-[14px] text-gray-600 group-hover:text-[#2bbef9] transition-colors">{cat.name}</span>}
//                             />
//                             {cat.hasSub && <Plus size={14} className="text-gray-400" />}
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Filter by Price */}
//             <section>
//                 <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6">Filter by Price</h3>
//                 <div className="px-2">
//                     <Slider
//                         value={priceRange}
//                         onChange={handlePriceChange}
//                         valueLabelDisplay="auto"
//                         min={0}
//                         max={70}
//                         sx={{
//                             color: '#202435',
//                             height: 4,
//                             '& .MuiSlider-thumb': {
//                                 width: 14,
//                                 height: 14,
//                                 backgroundColor: '#202435',
//                             },
//                             '& .MuiSlider-track': { border: 'none' },
//                             '& .MuiSlider-rail': { opacity: 0.2, backgroundColor: '#202435' },
//                         }}
//                     />
//                     <div className="flex justify-between items-center mt-4">
//                         <div className="text-[13px] text-gray-500">
//                             Price: <span className="font-bold text-[#202435]">${priceRange[0]} — ${priceRange[1]}</span>
//                         </div>
//                         <button className="text-[11px] font-bold uppercase tracking-tighter text-gray-800 hover:text-[#2bbef9]">
//                             Filter
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Product Status */}
//             <section>
//                 <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Product Status</h3>
//                 <div className="flex flex-col">
//                     {["In Stock", "On Sale"].map((status) => (
//                         <FormControlLabel
//                             key={status}
//                             control={<Checkbox size="small" sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }} />}
//                             label={<span className="text-[14px] text-gray-600">{status}</span>}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Brands */}
//             <section>
//                 <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Brands</h3>
//                 <div className="flex flex-col gap-1">
//                     {brands.map((brand) => (
//                         <div key={brand.name} className="flex items-center justify-between">
//                             <FormControlLabel
//                                 control={<Checkbox size="small" sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }} />}
//                                 label={<span className="text-[14px] text-gray-600">{brand.name}</span>}
//                             />
//                             <span className="text-[12px] text-gray-400">({brand.count})</span>
//                         </div>
//                     ))}
//                 </div>
//             </section>


//             {/* video */}
// <div className="relative rounded-2xl w-full h-[500px] overflow-hidden">
//   {/* Video Background */}
//     <video
//     className="absolute top-0 left-0 w-full h-full object-cover"
//     src={ViewVideo}
//     autoPlay
//     loop
//     muted
//   />
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
//     <div>
//       <h1 className="text-4xl md:text-3xl font-bold text-white mb-4">
//         MegaMart Shop
//       </h1>
//       <p className="text-lg md:text-2xl text-white mb-6">
//         Fresh Products Every Hour
//       </p>
      
//     </div>
//   </div>
// </div>

//         </div>
//     );
// };

// export default SidebarFilter;


import React from 'react';
import { Slider, Checkbox, FormControlLabel } from '@mui/material';

const SidebarFilter = ({
  selectedCategories = [],
  setSelectedCategories = () => {},
  selectedBrands = [],
  setSelectedBrands = () => {},
  priceRange = [0, 1000],
  setPriceRange = () => {},
  selectedStatus = [],
  setSelectedStatus = () => {}
}) => {
  const categories = [
    "Beverages",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Fruits & Vegetables",
    "Grocery & Staples",
    "Household Needs",
    "Meats & Seafood"
  ];

  const brands = ["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"];

  const statusOptions = ["In Stock", "On Sale"];

  return (
    <div className="w-80 p-6 bg-white flex flex-col gap-10 font-sans text-[#202435]">
      
      {/* Categories */}
      <section>
        <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Product Categories</h3>
        <div className="flex flex-col gap-1">
          {categories.map(cat => (
            <FormControlLabel
              key={cat}
              control={
                <Checkbox
                  size="small"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => {
                    if (selectedCategories.includes(cat)) {
                      setSelectedCategories(selectedCategories.filter(c => c !== cat));
                    } else {
                      setSelectedCategories([...selectedCategories, cat]);
                    }
                  }}
                  sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }}
                />
              }
              label={<span className="text-[14px] text-gray-600">{cat}</span>}
            />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section>
        <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Brands</h3>
        <div className="flex flex-col gap-1">
          {brands.map(brand => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  size="small"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    if (selectedBrands.includes(brand)) {
                      setSelectedBrands(selectedBrands.filter(b => b !== brand));
                    } else {
                      setSelectedBrands([...selectedBrands, brand]);
                    }
                  }}
                  sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }}
                />
              }
              label={<span className="text-[14px] text-gray-600">{brand}</span>}
            />
          ))}
        </div>
      </section>

      {/* Price Slider */}
      <section>
        <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Filter by Price</h3>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          sx={{
            color: '#202435',
            height: 4,
            '& .MuiSlider-thumb': { width: 14, height: 14, backgroundColor: '#202435' },
            '& .MuiSlider-track': { border: 'none' },
            '& .MuiSlider-rail': { opacity: 0.2, backgroundColor: '#202435' }
          }}
        />
        <div className="text-[13px] text-gray-500 mt-2">
          Price: <span className="font-bold text-[#202435]">${priceRange[0]} — ${priceRange[1]}</span>
        </div>
      </section>

      {/* Status */}
      <section>
        <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">Status</h3>
        <div className="flex flex-col gap-1">
          {statusOptions.map(s => (
            <FormControlLabel
              key={s}
              control={
                <Checkbox
                  size="small"
                  checked={selectedStatus.includes(s)}
                  onChange={() => {
                    if (selectedStatus.includes(s)) {
                      setSelectedStatus(selectedStatus.filter(st => st !== s));
                    } else {
                      setSelectedStatus([...selectedStatus, s]);
                    }
                  }}
                  sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#2bbef9' } }}
                />
              }
              label={<span className="text-[14px] text-gray-600">{s}</span>}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SidebarFilter;
