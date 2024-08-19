import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which item is active based on current path
  const getActiveLabel = () => {
    switch (currentPath) {
      case '/':
        return 'Home';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      default:
        return '';
    }
  };

  const [activeItem, setActiveItem] = useState<string>(getActiveLabel());

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-20'} h-screen bg-gray-dull-gradient text-white transition-all duration-300`}>
      <div className="flex flex-col w-full h-full relative">
        {/* Toggle Button */}
        <button
          className={`absolute p-4 text-2xl ${isOpen ? 'text-white' : 'text-gray-400'} transition-all duration-300 ${
            isOpen ? 'right-0 ' : 'right-[12px]'
          }`}
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <IoCaretBackOutline /> : <IoCaretForwardOutline />}
        </button>

        {/* Navigation */}
        <div className="flex flex-col flex-1 mt-12">
          <nav className="w-full flex flex-col px-5 py-2 ">
            <ul className="space-y-2">
              <NavItem
                icon={<FaHome />}
                label="Home"
                isOpen={isOpen}
                isActive={activeItem === 'Home'}
                onClick={() => handleItemClick('Home')}
                to="/"
              />
              <NavItem
                icon={<FaUser />}
                label="Profile"
                isOpen={isOpen}
                isActive={activeItem === 'Profile'}
                onClick={() => handleItemClick('Profile')}
                to="/profile"
              />
              <NavItem
                icon={<FaCog />}
                label="Settings"
                isOpen={isOpen}
                isActive={activeItem === 'Settings'}
                onClick={() => handleItemClick('Settings')}
                to="/settings"
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

// NavItem component to avoid repetitive code
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isOpen, isActive, onClick, to }) => (
  <li
    className={`flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200 ${
      isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
    }`}
    onClick={onClick}
  >
    <Link to={to} className="flex items-center w-full">
      <span className={`text-xl ${isActive ? 'text-blue-500' : 'text-white'}`}>{icon}</span>
      {isOpen && <span className={`ml-4 text-lg ${isActive ? 'font-semibold' : ''}`}>{label}</span>}
    </Link>
  </li>
);

export default Sidebar;
