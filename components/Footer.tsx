
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nion’s Imagination. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
