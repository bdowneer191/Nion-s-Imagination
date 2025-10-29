
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-gray-700">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
            Nion’s Imagination
          </Link>
          <nav>
            {/* Future navigation links can go here */}
          </nav>
        </div>
      </div>
    </header>
  );
}
