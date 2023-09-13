"use client";
import { faShare, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import CurrentDateTime from "@/components/dtTime";
import Modal from "@/components/sendusQuery";
import Link from "next/link";

export default function MyDaisyUITableComponent() {
  const [rowData, setRowData] = useState([]);
  const [displayedRows, setDisplayedRows] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "" : "";
        const response = await fetch(`${bsePath}/api/getCurrencyRates`);
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  const handleMoreClick = () => {
    setDisplayedRows(rowData.length); // Display all rows
    setShowAll(true);
  };

  const handleLessClick = () => {
    setDisplayedRows(5); // Display only 5 rows
    setShowAll(false);
  };
  return (
    <div
      className="border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8 text-center md:py-4"
      id="fxExchRt"
    >
      <h2 className="text-xl lg:text-4xl underline font-bold mb-2">
        Exchange Rate
      </h2>
      <p className="text-sm md:text-xl">
        <CurrentDateTime />
      </p>
      <p className="text-sm md:text-xl">(Last Update: 22 July 2023 00:00 PM)</p>
      <div className="overflow-x-auto p-4 lg:px-8">
        <table className="prose table shadow">
          <thead>
            <tr>
              <th colSpan={5}>
                <div className="flex justify-between text-sm md:text-xl flex-col md:flex-row">
                  <div>
                    Base Currency:{" "}
                    <span className="text-xl text-center fi fi-bd"></span>BDT -
                    Bangladesh Taka
                  </div>
                  <div className="flex justify-start">
                    <button className=" btn-blue mr-2 md:mr-4">
                      Send Query
                    </button>
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 p-2 rounded-md mr-4 "
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
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>Currency</th>
              <th style={{ width: "10%" }}>
                <div className="flex flex-col md:flex-row">
                  <span>We are </span>
                  <span className="md:pl-1">Buying </span>
                  <span className="md:pl-1">@ Tk</span>
                </div>
              </th>
              <th style={{ width: "10%" }}>
                <div className="flex flex-col md:flex-row">
                  <span>We are </span>
                  <span className="md:pl-1">Selling </span>
                  <span className="md:pl-1">@ Tk</span>
                </div>
              </th>
              <th style={{ width: "10%" }}>
                <div className="flex flex-col md:flex-row">
                  <span>Chart</span>
                </div>
              </th>
              <th style={{ width: "10%" }}>
                <div className="flex flex-col md:flex-row">
                  <span>Currency </span>
                  <span className="md:pl-1">Profile</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {rowData.map((item:any, index) => ( */}
            {rowData.slice(0, displayedRows).map((item: any, index) => (
              <tr key={index}>
                <td style={{ width: "60%" }}>
                  <div className="flex items-center space-x-3">
                    <div
                      className={` text-2xl avatar fi fi-${item.CountryCode}`}
                    />
                    <div>
                      <div className="text-start font-bold">
                        {item.CurrencyCode}
                      </div>
                      <div className="text-xs md:text-sm opacity-50">
                        {item.CurrencyTagLine}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }} className="text-right">
                  {item.Buying_Rate}
                </td>
                <td style={{ width: "10%" }} className="text-right">
                  {item.Selling_Rate}
                </td>
                <td style={{ width: "10%" }}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="30"
                      fill="#000"
                      version="1.1"
                      viewBox="0 0 110.312 110.311"
                      xmlSpace="preserve"
                      className="hover:w-11 hover:h-9"
                    >
                      {" "}
                      <path d="M89.646 17.665a.654.654 0 00-.063-.259l-.007-.02a.636.636 0 00-.182-.209c-.008-.007-.012-.019-.021-.025-.008-.006-.018-.006-.025-.011-.017-.01-.028-.025-.045-.034l-8.121-4.396a.672.672 0 00-.532-.046l-13.114 4.396c-.036.012-.066.033-.1.05-.008.005-.021.003-.029.009-.006.003-.007.01-.014.013a.671.671 0 00-.209.212l-.024.044a.662.662 0 00-.079.248c-.001.015.002.028.002.043 0 .006-.005.011-.005.018v32.137l-1.133-.613a.663.663 0 00-.565-.033l-6.604 2.621V37.964c0-.012-.009-.022-.009-.035a.63.63 0 00-.062-.254c-.003-.007-.004-.014-.008-.021a.642.642 0 00-.182-.21c-.008-.007-.012-.018-.021-.024-.007-.005-.018-.005-.023-.01-.018-.011-.031-.026-.047-.035l-8.123-4.396a.672.672 0 00-.532-.046l-13.114 4.396c-.036.012-.066.033-.099.05-.009.005-.02.003-.029.008-.006.003-.008.01-.013.013a.658.658 0 00-.234.256.657.657 0 00-.079.247c-.001.015.003.028.002.042 0 .006-.004.011-.004.018v16.804l-1.439-.777a.672.672 0 00-.532-.046L21.114 58.34c-.036.012-.066.032-.099.05-.009.005-.02.003-.029.008-.006.003-.007.009-.013.013a.661.661 0 00-.209.212c-.009.016-.018.028-.026.044a.663.663 0 00-.079.247c-.001.015.002.028.002.042 0 .007-.004.012-.004.019v46.196c0 .244.133.47.347.587l8.122 4.471c.011.006.023.004.035.009a.666.666 0 00.289.074.666.666 0 00.216-.036l13.114-4.471a.672.672 0 00.454-.636v-1.952l1.432.788c.011.006.024.003.036.009a.665.665 0 00.288.074.694.694 0 00.216-.036l13.114-4.471a.672.672 0 00.454-.635V97.13l1.535.846c.012.006.025.004.037.009.09.043.188.074.287.074a.676.676 0 00.217-.036l13.113-4.47a.675.675 0 00.455-.636v-.957l1.077.724c.036.023.076.038.115.054.021.008.039.022.06.028a.646.646 0 00.199.031.735.735 0 00.217-.035L89.2 88.291a.67.67 0 00.454-.635V17.697c-.001-.012-.008-.021-.008-.032zm-60.867 90.843l-6.781-3.732V60.11l6.781 3.732v44.666zm.734-45.792l-4.1-2.258-2.423-1.333 11.388-3.816 6.517 3.527-5.784 1.972-5.598 1.908zm12.379 39.028a.654.654 0 000 .579v2.369l-11.772 4.014v-44.78l6.07-2.069 5.702-1.943v41.83zm2.426.541l-1.085-.598V58.975c0-.011-.007-.021-.008-.032a.676.676 0 00-.063-.26c-.003-.005-.004-.012-.007-.019a.67.67 0 00-.183-.211c-.008-.007-.011-.017-.02-.022-.007-.005-.017-.005-.024-.01-.017-.012-.03-.025-.047-.035l-5.345-2.894V39.098l6.781 3.732.001 59.455zm.734-60.581l-6.523-3.59 11.388-3.817 6.517 3.527-4.875 1.662-6.507 2.218zm12.379 56.765l-11.771 4.013V42.914l11.771-4.013v59.568zm2.533-2.213l-1.189-.654V58.304l1.189.745v37.207zm.754-38.316l-1.944-1.218v-3.471l6.808-2.701 6.498 3.518-11.362 3.872zm12.358 34.501l-11.772 4.013V59.157l11.772-4.013v37.297zm2.122-1.569l-.779-.522V54.207c0-.012-.009-.022-.01-.034a.643.643 0 00-.062-.256c-.002-.006-.004-.014-.008-.021a.644.644 0 00-.182-.211c-.008-.007-.012-.018-.021-.023-.006-.005-.017-.005-.023-.01-.016-.011-.029-.026-.046-.035L68.42 50.56V18.832l6.779 3.732v68.308zm.735-69.434l-1.463-.806-5.06-2.785 11.388-3.817 6.518 3.528-11.383 3.88zm12.379 65.741l-11.773 4.013V22.647l11.773-4.013v68.545z"></path>{" "}
                      <path d="M23.311 47.72a1.145 1.145 0 001.588-.339l15.513-23.922 16.33 3.557c.44.096.916-.088 1.177-.454L74.556 3.34l2.021 7.082a.955.955 0 101.838-.525L75.789.694a.955.955 0 00-1.182-.657l-.006.003a.922.922 0 00-.502.006L64.06 3.273a.956.956 0 10.585 1.821l7.571-2.434-15.725 21.95-16.368-3.565a1.16 1.16 0 00-1.206.499L22.971 46.131a1.15 1.15 0 00.34 1.589z"></path>{" "}
                    </svg>
                  </button>
                </td>
                <td style={{ width: "10%" }}>
                  <Link
                    href={"/currencyProfile/" + item.CurrencyCode}
                    className="flex justify-center btn-green"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          {!showAll ? (
            <button onClick={handleMoreClick} className="btn-blue">
              More
            </button>
          ) : (
            <button onClick={handleLessClick} className="btn-blue">
              Less
            </button>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
