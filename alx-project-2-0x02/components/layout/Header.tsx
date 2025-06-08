import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ALX Project
        </Link>
        <div className="space-x-4">
          <Link href="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-300">
            Posts
          </Link>
          <Link href="/users" className="hover:text-gray-300">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 