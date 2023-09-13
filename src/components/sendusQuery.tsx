import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import CmbBox from "@/components/cmbBox";
import { Currency_rate } from "@/models/semex";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [currencyList, setCurrencyList] = useState<Currency_rate[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew" : "";
        const response = await fetch(`${bsePath}/api/getCurrencyRates`);
        const data = await response.json();
        setCurrencyList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const options = ["Buy", "Sell"];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };
  const handleCurrencyChange = (selectedCurrency: Currency_rate) => {};
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen ">
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={onClose}
            ></div>
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition-transform duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="z-10 w-full max-w-xl mx-auto bg-white rounded-md shadow-xl">
              <div className="flex justify-between bg-teal-600  pl-6 ">
                <h3 className="text-lg text-white font-semibold">
                  Send Us Query
                </h3>
                <button
                  className="text-white bg-red-600 px-4 py-2 hover:text-red-700"
                  onClick={onClose}
                >
                  x
                </button>
              </div>
              <div className="p-2 md:p-6">
                <form onSubmit={handleFormSubmit}>
                  <div className="border border-slate-600 p-2 mt-2 rounded">
                    <div className="mt-4 flex flex-row justify-between">
                      <label className="block mb-2">I want to</label>
                      <span className="space-x-4">
                        {options.map((option, index) => (
                          <button
                            key={index}
                            className={`py-1 px-3 border ${
                              selectedOption === option
                                ? "bg-blue-500 text-white"
                                : "border-gray-300"
                            } rounded-md`}
                            onClick={() => setSelectedOption(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row md:justify-between">
                      <CmbBox
                        currencyList={currencyList}
                        onChange={handleCurrencyChange}
                      />
                      <input
                        type="text"
                        placeholder="Amount"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-2 md:mt-0"
                      />
                    </div>

                    <div className="mt-4 text-right text-gray-500">
                      Apx: BDT ...
                    </div>
                  </div>
                  <div className="border border-slate-600 p-2 mt-2 rounded">
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-col md:flex-row md:space-x-4">
                        <input
                          type="text"
                          placeholder="Mobile"
                          className="md:w-1/2 border border-gray-300 rounded-md mb-2 md:mb-0 md:px-3 py-2"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="md:w-1/2 border border-gray-300 rounded-md md:px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <label className="text-sm">
                  BeFreshFX concern person will contact to you soon.
                </label>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
}
