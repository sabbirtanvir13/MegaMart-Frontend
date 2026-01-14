import React from 'react';
import AdminSidebar from '../components/DashBoard/AdminSidebar';
import { Outlet } from 'react-router-dom'; // ✅ react-router-dom

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet /> {/* Nested routes like AddProductForm will render here */}
      </div>
    </div>
  );
};

export default DashboardLayout;
