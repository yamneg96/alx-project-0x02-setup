import React from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ title = 'ALX Project' }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {title}
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
