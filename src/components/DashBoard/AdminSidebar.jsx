import React from 'react';
import {
  Home,
  User,
  ShoppingCart,
  Box,
  Settings,
  LogOut,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router';

const AdminSidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { label: "Add Products", icon: <User size={18} />, path: "/dashboard/add-product" },
    { label: "Users", icon: <User size={18} /> }, // no path → static item
    { label: "Products", icon: <ShoppingCart size={18} />, path: "/dashboard/products" },
    { label: "Orders", icon: <Box size={18} />, path: "/dashboard/orders" },
    { label: "Settings", icon: <Settings size={18} /> }, // static
    { label: "Logout", icon: <LogOut size={18} />, path: "/logout" },
  ];

  return (
    <div className="h-screen w-72 bg-white shadow-lg flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-gray-200">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          M
        </div>
        <span className="text-xl font-bold text-gray-800">MegaMart</span>
      </div>

      {/* Menu */}
      <div className="flex-1 p-6 flex flex-col gap-2">
        {menuItems.map((item, index) => {
          // If path exists → make Link, else just div
          return item.path ? (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-100 hover:text-green-700 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 font-medium cursor-not-allowed"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200 flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Manage your store efficiently. Stay updated with sales and orders.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
