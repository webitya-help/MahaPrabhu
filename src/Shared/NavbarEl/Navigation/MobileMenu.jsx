import React from 'react';
import { navLinks } from './navLinks.js';
import SocialLinks from '../Common/SocialLinks';
import ContactInfo from '../Common/ContactInfo';


function MobileMenu({ onClose }) {
  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
            onClick={onClose} style={{font:"20px"}}
          >
            {link.name}
          </a>
        ))}

        <div className="border-t border-gray-200 mt-4 pt-4 px-3">
          <SocialLinks />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
