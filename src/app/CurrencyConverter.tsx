import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import QueryModal from './QueryModal';
const currencyOptions = [
    { code: 'USD', label: 'United States Dollar', iconClass: 'fi fi-us' },
    { code: 'EUR', label: 'Euro', iconClass: 'fi fi-eu' },
    // ... Add more currency options with their details and icon classes
  ];
const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BDT');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = () => {
    // Implement your currency conversion logic here
    // For demonstration purposes, let's just show a random amount
    const randomAmount = Math.floor(Math.random() * 10000);
    setConvertedAmount(randomAmount);
  };

  return (
    <div className="border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8" id="fxConverter">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-4xl underline font-bold mb-4">Currency Converter.</h2>
        <p className='text-xs'>(Exchange Rate Last updated on: 19 August 2023, 00:00 pm)</p>
        <div className="lg:m-24">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="px-3 md:px-0 md:pr-0 flex justify-items-end w-full md:w-1/3 flex-col items-left sm:mr-2">
            <p className="mb-2 flex items-left">From</p>
            <select
              className="border p-2 rounded-md"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="">Select a currency</option>

              {/* Options for fromCurrency */}
            </select>
          </div>
          <div className="px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2">
            <p className="mb-2 flex items-left">To</p>
            <select
              className="border p-2 rounded-md"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="">Select a currency</option>
              {/* Options for toCurrency */}
            </select>
          </div>
          <div className="px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2">
          <p className="mb-2 flex items-left">Amount</p>
            <input
              type="text"
              placeholder='Amount'
              className="border p-2 rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 mb-4"
          onClick={handleConvert}
        >
          Convert
        </button>
        <div className="border p-4">
          {convertedAmount !== null && (
            <>
              <p className='text-xl'>You will get</p>
              <p className="text-green-500 font-bold text-4xl">{`${toCurrency} ${convertedAmount}`}</p>
              <p className='text-red-600 flex justify-start'>*** The amount may vary subject to actual Date, Time & Rate. The above amount is indicative only.</p>
            </>
          )}
        </div>
      
      <div className="flex justify-end md:space-x-4 mt-4 sm:md:">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 md:mr-4">
          Send Query
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-4 md:mr-0">
          <FontAwesomeIcon icon={faShare} className="mr-2" />
          Share
        </button>
      </div>
      </div>
        </div>
    </div>
  );
};

export default CurrencyConverter;
