"use client";
import React, { useEffect, useState } from "react";
import {
  faShare,
  faChartBar,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Link from "next/link";
import { Currency_rate, gov_circ } from "@/app/models/semex";

export default function GovCirTbl() {
  const [rowData, setRowData] = useState<gov_circ[]>([]);
  const [displayedRows, setDisplayedRows] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>();
  const [serialNumbers, setSerialNumbers] = useState<number[]>([]);

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
        const bsePath = isProd ? "/fxnew/" : "";
        const response = await fetch(`${bsePath}/api/getCirculars`, {
          // cache: 'no-cache' or 'no-store'
          next: { revalidate: 0 },
        });
        const data = await response.json();
        // const upDt = data.find((item) => item.CurrencyCode === "USD");
        await setRowData(data);
        await setLastUpdate(new Date(data[0].update_datetime));

        // Generate serial numbers for rows
        const serials = Array.from({ length: data.length }, (_, i) => i + 1);
        setSerialNumbers(serials);
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
      <h2 className="text-xl text-left md:ml-6 lg:text-4xl font-bold mb-2">
        Govt. Circulars / Laws
      </h2>

      <div className="overflow-x-auto p-4 lg:px-8">
        <table className="prose table shadow">
          <thead>
            <tr className="text-black">
              <th style={{ width: "10%" }} className="text-sm md:text-lg">
                Sl No.
              </th>
              <th style={{ width: "10%" }} className="text-sm md:text-lg ">
                Particulars
              </th>
              <th
                style={{ width: "10%" }}
                className="text-sm text-center md:text-lg"
              >
                Issued by
              </th>
              <th
                style={{ width: "10%" }}
                className="text-sm text-center md:text-lg"
              >
                Issue / Effective Date
              </th>
              <th
                style={{ width: "10%" }}
                className="text-sm md:text-lg text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.slice(0, displayedRows).map((item: any, index) => (
              <tr key={index}>
                <td style={{ width: "10%" }}>{serialNumbers[index]}</td>
                <td style={{ width: "10%" }} className="text-justify text-lg">
                  {item.particulars}
                </td>
                <td style={{ width: "10%" }} className="text-center text-lg">
                  {item.issued_by}
                </td>
                <td style={{ width: "10%" }} className="text-center">
                  {format(new Date(item.issue_date), "d MMM yyyy")}
                </td>
                <td style={{ width: "10%" }}>
                  <Link
                    target="_blank"
                    href={`https://www.befreshfx.com/public/circulars/${item.filename}`}
                    className="flex justify-center btn-lblue md:mx-10"
                  >
                    View PDF
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 mr-6">
        {!showAll ? (
          <button
            title="moreClick"
            onClick={handleMoreClick}
            className="btn-blue"
          >
            <FontAwesomeIcon icon={faAngleDown} beat />
          </button>
        ) : (
          <button
            title="lessClick"
            onClick={handleLessClick}
            className="btn-blue"
          >
            <FontAwesomeIcon icon={faAngleUp} beat />
          </button>
        )}
      </div>
    </div>
  );
}
