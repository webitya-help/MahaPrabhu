import React from 'react';
import { navLinks } from './navLinks.js';

function DesktopNav() {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-8 bg-yellow-500">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-white hover:text-gray-600 px-3 font-semibold py-2 text-md transition-colors duration-200" 
          style={{fontSize:"17px"}}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default DesktopNav;
