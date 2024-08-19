import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // Allows nested routes

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />
        
        {/* Content Area */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet /> {/* Render the content of the matched route here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
