import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo2.png" 

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const getLinkClass = (path: string) => 
    `text-white px-3 py-2 rounded-md text-sm font-medium ${
      location.pathname === path ? 'bg-blue-700' : 'hover:bg-blue-600'
    }`;

  return (
    <nav className="bg-gray-gradient p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[50px]">
            <img src={Logo} alt="" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
