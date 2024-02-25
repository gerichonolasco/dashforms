import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white px-4 h-38 z-10 ">
      <div className="flex justify-start items-center">
        <div className="logo">
          {/* Negative margin to extend yellow background behind the logo */}
          <div className="bg-yellow-500 -ml-4 w-52 flex items-center justify-center px-6 py-6 rounded-none">
            <img src="/images/ustlogo.png" alt="Logo" className="h-24 w-auto" />
          </div>
        </div>
        <div className="text-center ml-6">
          <h1 className="text-5xl font-bold text-yellow-500">University of Santo Tomas</h1>
          <p className="text-lg text-white mt-1">Office of Planning and Quality Management</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
