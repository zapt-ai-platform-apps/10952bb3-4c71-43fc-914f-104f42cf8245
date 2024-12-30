import React, { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 box-border">
      <input
        type="text"
        value={display}
        readOnly
        className="w-full mb-4 p-2 text-right text-xl border border-gray-300 rounded box-border"
      />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition"
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition"
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition"
          >
            {item}
          </button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button
            key={item}
            onClick={() => (item === '=' ? handleCalculate() : handleClick(item))}
            className={`p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition ${
              item === '=' ? 'col-span-2 bg-blue-500 text-white' : ''
            }`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 p-4 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}