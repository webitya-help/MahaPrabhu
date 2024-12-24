import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-yellow-500 backdrop-blur-sm transition-all duration-300 border-b border-yellow-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="w-auto  rounded-md" style={{width:"80px"}}/>
          </a>
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
