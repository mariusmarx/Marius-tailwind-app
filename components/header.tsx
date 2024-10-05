import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">
          Alaris
        </div>
        <nav className="space-x-8">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;