import { useState, useEffect, Fragment, useRef } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Combobox } from "@headlessui/react";
import { Currency_rate } from "@/app/models/semex";
import React from "react";

interface CmbBoxProps {
  currencyList: Currency_rate[]; // Pass the currency list as a prop
  onChange: (selectedCurrency: Currency_rate) => void; // Add this line
  value?: Currency_rate;
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CmbBox({
  value = undefined,
  currencyList,
  onChange,
}: CmbBoxProps) {
  console.log({ currencyList });
  const [query, setQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<
    Currency_rate | undefined
  >(
    value // Initialize the selectedCurrency with the value prop
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    // Set selectedCurrency if value is provided
    if (value !== undefined) {
      setSelectedCurrency(value);
    }
  }, [value]);
  const handleCurrencyChange = (currency: Currency_rate) => {
    setSelectedCurrency(currency); // Update selectedCurrency when a currency is selected
    onChange(currency); // Call the onChange callback
  };

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input text when clicked
      Combobox.Options.call;
    }
  };

  const filteredCurrencies =
    query === ""
      ? currencyList
      : currencyList.filter((currency) =>
          currency.Currency_Name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox as="div" value={selectedCurrency} onChange={handleCurrencyChange}>
      <div className="relative w -full rounded-md border border-gray-300 bg-white pl-3 pr-10 shadow-sm focus:border-indigo-500  focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span className={`fi fi-${selectedCurrency?.CountryCode} mr-2`}></span>
        <Combobox.Input
          ref={inputRef}
          className="border-0 w-5/6 selection:border-0 focus:ring-0"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(currency: Currency_rate) =>
            `${currency.CurrencyCode} - ${currency.CurrencyTagLine}`
          }
          onClick={handleInputClick}
          placeholder="Select Currency"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredCurrencies.length >= 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCurrencies.map((currency) => (
              <Combobox.Option
                key={currency.CurrencyCode}
                value={currency}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {/* Display your currency data here */}
                      <span
                        className={`fi fi-${currency.CountryCode} mr-2`}
                      ></span>
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected && "font-semibold"
                        )}
                      >{`${currency.CurrencyCode} - ${currency.CurrencyTagLine}`}</span>
                    </div>
                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
