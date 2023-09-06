'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import QueryModal from './QueryModal';
import CmbBox from '@/components/cmbBox';
import { Currency_rate } from '@/models/semex';
import DaisyUIModal from '@/components/errorModal';

export default function CurrencyConverter() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState<Currency_rate>();
  const [toCurrency, setToCurrency] = useState<Currency_rate>();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const inputAmntRef = useRef<HTMLInputElement | null>(null);
  const [isHidden, setIsHidden] = useState(true);



  const handleConvert = () => {
    // Implement your currency conversion logic here
    // For demonstration purposes, let's just show a random amount
    setIsHidden(false);
    if(fromCurrency === toCurrency) 
    {
      console.log('invalid');
      setErrorMessage('error');
      setShowModal(true);
    }
    else{
      if(toCurrency?.CurrencyCode == "BDT"){
        const convertedAmount = Number(fromCurrency?.Buying_Rate) * Number(inputAmntRef.current?.value);
        setConvertedAmount(convertedAmount);
      }
      else 
      {
        const convertedAmount = Number(inputAmntRef.current?.value) /Number(toCurrency?.Selling_Rate) ;
        setConvertedAmount(convertedAmount);
      }
    }
    
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [currencyList, setCurrencyList] = useState<Currency_rate[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew" : "";
        const response = await fetch(`${bsePath}/api`);
        const data = await response.json();
        setCurrencyList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [filteredFromCurrencyList, setFilteredFromCurrencyList] = useState<Currency_rate[]>(currencyList);
  const [filteredToCurrencyList, setFilteredToCurrencyList] = useState<Currency_rate[]>(currencyList);

  useEffect(() => {
    setFilteredFromCurrencyList(currencyList);
    setFilteredToCurrencyList(currencyList);
  }, [currencyList]);

  
  const handleFromCurrencyChange = (selectedCurrency: Currency_rate) => {
    setFromCurrency(selectedCurrency);

    if (selectedCurrency.CurrencyCode.includes("BDT")) {
      setFilteredToCurrencyList(currencyList.filter(currency => currency.CurrencyCode !== "BDT"));
    } else {
      setFilteredToCurrencyList(currencyList.filter(currency => currency.CurrencyCode === "BDT"));
    }
  };

  const handleToCurrencyChange = (selectedCurrency: Currency_rate) => {
    setToCurrency(selectedCurrency);
    // if (selectedCurrency.CurrencyCode.includes("BDT") && fromCurrency === null) {
    //   setFilteredFromCurrencyList(currencyList.filter(currency => currency.CurrencyCode !== "BDT"));
    // } else {
    //   setFilteredFromCurrencyList(currencyList.filter(currency => currency.CurrencyCode === "BDT"));
    // }
  };

  return (
  <div className="border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8" id="fxConverter">
    <div className="container mx-auto text-center">
      <h2 className="text-xl md:text-4xl underline font-bold mb-4">Currency Converter</h2>
      <p className='text-xs'>(Exchange Rate Last updated on: 19 August 2023, 00:00 pm)</p>
      <div className="lg:mx-24 my-12">
        <div className="flex flex-col md:flex-row md:space-x-2">
          <div className="px-3 md:px-0 md:pr-0 flex justify-items-end w-full md:w-1/3 flex-col items-left sm:mr-2">
            <p className="mb-2 flex items-left">From</p>
            <CmbBox currencyList={filteredFromCurrencyList} onChange={handleFromCurrencyChange} />
            {/* <CmbBox currencyList={currencyList} /> */}
            {/* <select className="border p-2 rounded-md" value={fromCurrency} onChange={(e)=>
              setFromCurrency(e.target.value)}
              >
              <option value="">Select a currency</option>

              {/* Options for fromCurrency }
            </select> */}

          </div>
          <div className="px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2">
            <p className="mb-2 flex items-left">To</p>
            <CmbBox currencyList={filteredToCurrencyList} onChange={handleToCurrencyChange} />
            {/* <CmbBox currencyList={currencyList} /> */}
            {/* <select className="border p-2 rounded-md" value={toCurrency} onChange={(e)=>
              setToCurrency(e.target.value)}
              >
              <option value="">Select a currency</option>

            </select> */}
          </div>
          <div className="px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2">
            <p className="mb-2 flex items-left">Amount</p>
            {/* onChange={(e)=>
            setAmount(e.target.value)} */}
            <input ref={inputAmntRef} type="text" placeholder='Amount' id="cnvrtAmnt" className="border p-2 rounded-md" value={amount} onChange={(e)=>
            setAmount(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 mb-4" onClick={handleConvert}>
          Convert
        </button> 
        <div id="convrsnResult" className={`border p-4 ${isHidden ? 'hidden' : ''}`} >
          {convertedAmount !== null && (

          <>
            <p className='text-xl'>You will get</p>
            <p className="text-green-500 font-bold text-4xl">{`${toCurrency?.CurrencyCode} ${convertedAmount.toLocaleString('en-in')}`}</p>
            <p className='text-red-600 flex justify-start'>*** The amount may vary subject to actual Date, Time & Rate.
              The above amount is indicative only.</p>
          </>
          )}
        </div>

        <div className="flex justify-end md:space-x-4 mt-4 sm:md:">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 md:mr-4">
            Send Query
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          </button>

        </div>
      </div>
    </div>
    <DaisyUIModal
        isOpen={showModal}
        onClose={closeModal}
        errorMessage={errorMessage}
      />
  </div>
  );
  }