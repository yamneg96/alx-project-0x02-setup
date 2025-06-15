import React from 'react';
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-8">
          Welcome to ALX Project
        </h1>
        <p className="text-center mt-4 text-gray-600">
          This is a Next.js project with TypeScript and Tailwind CSS
        </p>
      </main>
    </div>
  );
};

export default Home; 
