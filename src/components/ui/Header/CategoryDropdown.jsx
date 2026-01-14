import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  FaAppleAlt,
  FaDrumstickBite,
  FaBreadSlice,
  FaSnowflake,
  FaCookieBite,
  FaLeaf,
} from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold cursor-pointer shadow-md hover:bg-green-600 transition"
      >
        <HiMenuAlt2 className="text-xl" />
        ALL CATEGORIES
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-14 left-0 w-72 bg-white border rounded-lg shadow-xl z-50">
          
          {/* HEADER */}
          <div className="px-4 py-3 border-b bg-gray-50 rounded-t-lg">
            <p className="text-sm font-semibold text-gray-700">
              TOTAL 63 PRODUCTS
            </p>
          </div>

          {/* CATEGORY LIST */}
          <ul className="py-2 ">
            <CategoryItem cl icon={<FaAppleAlt />} label="Fruits & Vegetables" />
            <CategoryItem icon={<FaDrumstickBite />} label="Meats & Seafood" />
            <CategoryItem icon={<GiMilkCarton />} label="Breakfast & Dairy" />
            <CategoryItem icon={<MdLocalDrink />} label="Beverages" />
            <CategoryItem icon={<FaBreadSlice />} label="Breads & Bakery" />
            <CategoryItem icon={<FaSnowflake />} label="Frozen Foods" />
            <CategoryItem icon={<FaCookieBite />} label="Biscuits & Snacks" />
            <CategoryItem icon={<FaLeaf />} label="Grocery & Staples" />
          </ul>

          {/* FOOTER */}
          <div className="border-t px-4 py-3 text-sm text-gray-600 space-y-2">
            <p className="cursor-pointer hover:text-blue-500">
              Value of the Day
            </p>
            <p className="cursor-pointer hover:text-blue-500">
              Top 100 Offers
            </p>
            <p className="cursor-pointer hover:text-blue-500">
              New Arrivals
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CategoryItem = ({ icon, label }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
      <span className="text-lg text-gray-400">{icon}</span>
      <span className="flex-1">{label}</span>
      <span className="text-gray-400">&rsaquo;</span>
    </li>
  );
};

export default CategoryDropdown;
