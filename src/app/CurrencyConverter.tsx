"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import QueryModal from "./QueryModal";
import CmbBox from "@/app/components/cmbBox";
import { Currency_rate } from "@/app/models/semex";
import DaisyUIModal from "@/app/components/errorModal";
import Modal from "@/app/components/sendusQuery";
import { format } from "date-fns";

export default function CurrencyConverter() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState<Currency_rate>();
  const [toCurrency, setToCurrency] = useState<Currency_rate>();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const inputAmntRef = useRef<HTMLInputElement | null>(null);
  const [isHidden, setIsHidden] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConvert = () => {
    // Implement your currency conversion logic here
    // For demonstration purposes, let's just show a random amount

    if (
      fromCurrency?.CurrencyCode === null ||
      toCurrency?.CurrencyCode === null ||
      fromCurrency?.CurrencyCode === "" ||
      toCurrency?.CurrencyCode === "" ||
      fromCurrency === undefined ||
      toCurrency === undefined
    ) {
      alert("Please Select Both From and To Currency!");
      return;
    }
    if (fromCurrency === toCurrency) {
      setErrorMessage("error");
      //setShowModal(true);
    } else {
      if (toCurrency?.CurrencyCode == "BDT") {
        const convertedAmount =
          Number(fromCurrency?.Buying_Rate) *
          Number(inputAmntRef.current?.value);
        setConvertedAmount(convertedAmount);
      } else {
        const convertedAmount =
          Number(inputAmntRef.current?.value) /
          Number(toCurrency?.Selling_Rate);
        setConvertedAmount(convertedAmount);
      }
      setIsHidden(false);
    }
  };
  const [currencyList, setCurrencyList] = useState<Currency_rate[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew" : "";
        const response = await fetch(`${bsePath}/api/getCurrencyRates`, {
          //cache:'no-cache'/'no-store'
          next: { revalidate: 0 },
        });
        const data = await response.json();
        await setCurrencyList(data);
        //const upDt = data.find((item) => item.CurrencyCode === "USD");
        await setLastUpdate(new Date(data[0].update_datetime));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [filteredFromCurrencyList, setFilteredFromCurrencyList] =
    useState<Currency_rate[]>(currencyList);
  const [filteredToCurrencyList, setFilteredToCurrencyList] =
    useState<Currency_rate[]>(currencyList);

  useEffect(() => {
    setFilteredFromCurrencyList(currencyList);
    setFilteredToCurrencyList(currencyList);
  }, [currencyList]);

  const handleFromCurrencyChange = (selectedCurrency: Currency_rate) => {
    setFromCurrency(selectedCurrency);

    if (selectedCurrency.CurrencyCode.includes("BDT")) {
      setFilteredToCurrencyList(
        currencyList.filter((currency) => currency.CurrencyCode !== "BDT")
      );
    } else {
      setFilteredToCurrencyList(
        currencyList.filter((currency) => currency.CurrencyCode === "BDT")
      );
      const programmaticallySelectedValue = currencyList.find(
        (currency) => currency.CurrencyCode === "BDT"
      );
      setToCurrency(programmaticallySelectedValue);
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
    <div
      className="border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8"
      id="fxConverter"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-4xl underline font-bold mb-4">
          Currency Converter
        </h2>
        <p className="text-xs">
          {`(Exchange Rate Last updated on: ${
            lastUpdate ? format(lastUpdate, "d MMMM yyyy hh:mm:ss a") : ""
          })`}
        </p>
        <div className="lg:mx-24">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="px-3 md:px-0 md:pr-0 flex justify-items-end w-full md:w-1/3 flex-col items-left sm:mr-2">
              <p className="mb-2 flex items-left">From</p>
              <CmbBox
                currencyList={filteredFromCurrencyList}
                onChange={handleFromCurrencyChange}
              />
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
              <CmbBox
                currencyList={filteredToCurrencyList}
                onChange={handleToCurrencyChange}
                value={toCurrency}
              />
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
              <input
                ref={inputAmntRef}
                type="text"
                placeholder="Amount"
                id="cnvrtAmnt"
                className="border p-2 rounded-md text-right"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn-green-fw mt-4 mb-4  min-w-1/3 text-center text-2xl md:ml-2 font-bold"
            onClick={handleConvert}
          >
            CONVERT
          </button>
          <div
            id="convrsnResult"
            className={`border p-4 ${isHidden ? "hidden" : ""}`}
          >
            {convertedAmount !== null && (
              <>
                <p className="text-xl">You will get</p>
                <p className="text-green-500 font-bold text-4xl">{`${toCurrency?.CurrencyCode} ${convertedAmount.toLocaleString(
                  "en-in"
                )}`}</p>
                <p className="flex justify-start">
                  *** The amount may vary subject to actual Date, Time & Rate.
                  The above amount is indicative only.
                </p>
              </>
            )}
          </div>

          <div className="flex justify-end md:space-x-4 mt-4 sm:md:">
            <button
              onClick={openModal}
              className="bg-blue-500 text-base text-white px-4 py-2 rounded-md mr-2 md:mr-2 font-bold"
            >
              Send Query
            </button>
            <button
              type="button"
              title="shareNow"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
