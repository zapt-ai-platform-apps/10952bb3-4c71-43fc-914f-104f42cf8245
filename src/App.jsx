import React from 'react';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Calculator App</h1>
      <Calculator />
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-blue-500 underline cursor-pointer"
      >
        Made on ZAPT
      </a>
    </div>
  );
}