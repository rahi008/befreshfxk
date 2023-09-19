"use client";
import {
  faShare,
  faChartBar,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import CurrentDateTime from "@/app/components/dtTime";
import Modal from "@/app/components/sendusQuery";
import Link from "next/link";
import { Currency_rate } from "./models/semex";
export default function MyDaisyUITableComponent() {
  const [rowData, setRowData] = useState<Currency_rate[]>([]);
  const [displayedRows, setDisplayedRows] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  function findUpdateDatetime(rates: Currency_rate[]): Date | null {
    if (rates.length === 0) {
      return null; // Return null if the array is empty
    }

    // Use reduce to find the maximum update_datetime
    const latestDatetime = rates.reduce((maxDate, rate) => {
      return rate.update_datetime > maxDate ? rate.update_datetime : maxDate;
    }, rates[0].update_datetime); // Initialize maxDate with the first update_datetime

    return latestDatetime; // Return the latestDatetime as a Date object
  }

  // function findUpdateDatetime(rates: Currency_rate[]): Date | null {
  //   if (rates.length === 0) {
  //     return null; // Return null if the array is empty
  //   }

  //   // Use reduce to find the maximum update_datetime
  //   const latestDatetime = rates.reduce((maxDate, rate) => {
  //     const currentDatetime = rate.update_datetime || new Date(); // Default to a very early date if update_datetime is missing
  //     return currentDatetime > maxDate ? currentDatetime : maxDate;
  //   }, new Date()); // Initialize maxDate with a very early date
  //   const dtStr = format(latestDatetime, "d MMMM yyyy hh:mm:ss a");
  //   return dtStr;
  // }
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew/" : "";
        const response = await fetch(`${bsePath}/api/getCurrencyRates`, {
          //cache:'no-cache'/'no-store'
          next: { revalidate: 0 },
        });
        const data = await response.json();
        const upDt = data.find((item) => item.CurrencyCode === "USD");
        await setRowData(data);
        await setLastUpdate(new Date(upDt.update_datetime));
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
      <p className="text-xs md:text-sm flex justify-end mr-2 md:mr-8">
        {`Last Update: ${
          lastUpdate ? format(lastUpdate, "d MMMM yyyy hh:mm:ss a") : ""
        }`}
      </p>
      <h2 className="text-xl lg:text-4xl underline font-bold mb-2">
        Exchange Rate
      </h2>
      <p className="text-sm md:text-xl">
        <CurrentDateTime />
      </p>

      <div className="overflow-x-auto p-4 lg:px-8">
        <table className="prose table shadow">
          <thead>
            <tr className="text-black">
              <th colSpan={5}>
                <div className="flex justify-between text-sm md:text-xl flex-col md:flex-row">
                  <div>
                    Base Currency:{" "}
                    <span className="text-xl text-center fi fi-bd mr-2"></span>
                    BDT - Bangladesh Taka
                  </div>
                  <div className="flex justify-start">
                    <button
                      type="button"
                      title="sendQuery"
                      onClick={openModal}
                      className="bg-blue-500 text-base text-white text px-4 py-2 rounded-md mr-2 md:mr-4 font-bold"
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
              </th>
            </tr>
          </thead>
          <thead>
            <tr className="text-black">
              <th style={{ width: "10%" }} className={"text-sm md:text-lg"}>
                Currency
              </th>
              <th style={{ width: "10%" }} className={"text-sm md:text-lg "}>
                <div className="flex flex-col md:flex-row md:justify-end">
                  <span>We are </span>
                  <span className="md:pl-1">Buying </span>
                  <span className="md:pl-1">@ Tk</span>
                </div>
              </th>
              <th style={{ width: "10%" }} className={"text-sm md:text-lg"}>
                <div className="flex flex-col md:flex-row md:justify-end">
                  <span>We are </span>
                  <span className="md:pl-1">Selling </span>
                  <span className="md:pl-1">@ Tk</span>
                </div>
              </th>
              <th
                style={{ width: "10%" }}
                className="text-sm text-center md:text-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-center">
                  <span>Chart</span>
                </div>
              </th>
              <th style={{ width: "10%" }} className={"text-sm md:text-lg"}>
                <div className="flex flex-col md:flex-row md:justify-center">
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
                <td style={{ width: "10%" }}>
                  <div className="flex items-center space-x-3">
                    <div
                      className={` text-2xl avatar fi fi-${item.CountryCode}`}
                    />
                    <div>
                      <div className="text-start font-bold text-lg">
                        {item.CurrencyCode}
                      </div>
                      <div className="text-xs md:text-sm text-black">
                        {item.CurrencyTagLine}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  style={{ width: "10%" }}
                  className="text-right font-bold text-lg"
                >
                  {item.Buying_Rate.toFixed(2)}
                </td>
                <td
                  style={{ width: "10%" }}
                  className="text-right font-bold text-lg"
                >
                  {item.Selling_Rate.toFixed(2)}
                </td>
                <td style={{ width: "10%" }} className="text-center">
                  <button type="button" title="graph">
                    <svg
                      id="Layer_1"
                      enable-background="new 0 0 53 53"
                      height="32"
                      viewBox="0 0 53 53"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:w-9 hover:h-9"
                    >
                      <g id="_x38_8">
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m44.2232285 10.3569136-.7199707 3.4700317c-.1199951.5699463-.8400269.789978-1.2600098.3699951l-.8200073-.8000488-6.3641586 6.4734087c-.2300415.25-.6100464.2999878-.9100342.1199951l-9.6099854-5.6000366-9.4199829 9.9100342c-.2565536.2747822-.7287645.3292179-1.0599976.0199585-.3000488-.2799683-.3099976-.7599487-.0200195-1.0599976l9.8300171-10.3299561c.2399902-.2600098.6199951-.3099976.9199829-.1400146l9.6099854 5.6099854 5.9541855-6.0533648-.8300171-.8200073c-.4199829-.4099731-.2099609-1.1300049.3600464-1.2599487l3.4400024-.7800293c.5299682-.1300049 1.0099487.3400268.8999634.8699951z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="m49.5009155 50.1425781c-.4140625 0-.75-.3359375-.75-.75v-3.2788086c0-.4140625.3359375-.75.75-.75s.75.3359375.75.75v3.2788086c0 .4140625-.3359375.75-.75.75z"
                                fill="#5b5e8b"
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m42.8490601 46.1102905v3.2799683c0 .4200439-.3400269.75-.75.75s-.75-.3299561-.75-.75v-3.2799683c0-.4100342.3400269-.75.75-.75s.75.3399658.75.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m35.2790527 46.1102905v3.2799683c0 .4200439-.3399658.75-.75.75-.4199829 0-.75-.3299561-.75-.75v-3.2799683c0-.4100342.3300171-.75.75-.75.4100342 0 .75.3399658.75.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m27.6990356 46.1102905v3.2799683c0 .4200439-.3299561.75-.75.75-.4099731 0-.75-.3299561-.75-.75v-3.2799683c0-.4100342.3400269-.75.75-.75.420044 0 .75.3399658.75.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m20.1290894 46.1102905v3.2799683c0 .4200439-.3300171.75-.75.75-.4100342 0-.75-.3299561-.75-.75v-3.2799683c0-.4100342.3399658-.75.75-.75.4199829 0 .75.3399658.75.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m12.559082 46.1102905v3.2799683c0 .4200439-.3400269.75-.75.75-.4200439 0-.75-.3299561-.75-.75v-3.2799683c0-.4100342.3299561-.75.75-.75.4099732 0 .75.3399658.75.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m7.5290527 40.9902954c0 .4099731-.3300171.75-.75.75h-3.2799682c-.4100342 0-.75-.3400269-.75-.75 0-.4200439.3399658-.75.75-.75h3.2799683c.4199828 0 .7499999.3299561.7499999.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m7.5290527 33.4202881c0 .4099731-.3300171.75-.75.75h-3.2799682c-.4100342 0-.75-.3400269-.75-.75 0-.4200439.3399658-.75.75-.75h3.2799683c.4199828 0 .7499999.329956.7499999.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m7.5290527 25.840271c0 .4199829-.3300171.75-.75.75h-3.2799682c-.4100342 0-.75-.3300171-.75-.75 0-.4099731.3399658-.75.75-.75h3.2799683c.4199828 0 .7499999.3400269.7499999.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m7.5290527 18.2702637c0 .4100342-.3300171.75-.75.75h-3.2799682c-.4100342 0-.75-.3399658-.75-.75 0-.4099731.3399658-.75.75-.75h3.2799683c.4199828 0 .7499999.3400268.7499999.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m7.5290527 10.7002563c0 .4100342-.3300171.75-.75.75h-3.2799682c-.4100342 0-.75-.3399658-.75-.75 0-.4199829.3399658-.75.75-.75h3.2799683c.4199828 0 .7499999.3300171.7499999.75z"
                                  fill="#5b5e8b"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="m3.4990845 9.9502563h1.75v1.5h-1.75c-.4100342 0-.75-.3399658-.75-.75 0-.4199829.3399658-.75.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m3.4990845 17.5202637h1.75v1.5h-1.75c-.4100342 0-.75-.3399658-.75-.75 0-.4099732.3399658-.75.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m3.4990845 25.090271h1.75v1.5h-1.75c-.4100342 0-.75-.3300171-.75-.75 0-.4099731.3399658-.75.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m3.4990845 32.6702881h1.75v1.5h-1.75c-.4100342 0-.75-.3400269-.75-.75 0-.420044.3399658-.75.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m3.4990845 40.2402954h1.75v1.5h-1.75c-.4100342 0-.75-.3400269-.75-.75 0-.4200439.3399658-.75.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m11.059082 47.7502441h1.5v1.6400146c0 .4200439-.3400269.75-.75.75-.4200439 0-.75-.3299561-.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m18.6290894 47.7502441h1.5v1.6400146c0 .4200439-.3300171.75-.75.75-.4100342 0-.75-.3299561-.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m26.1990356 47.7502441h1.5v1.6400146c0 .4200439-.3299561.75-.75.75-.4099731 0-.75-.3299561-.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m33.7790527 47.7502441h1.5v1.6400146c0 .4200439-.3399658.75-.75.75-.4199829 0-.75-.3299561-.75-.75z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m42.8490601 47.7502441v1.6400146c0 .4200439-.3400269.75-.75.75s-.75-.3299561-.75-.75v-1.6400146z"
                                fill="#312e4b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m49.5009155 50.25h-46c-.4140625 0-.75-.3359375-.75-.75v-46c0-.4140625.3359375-.75.75-.75h3.2792969c.4140625 0 .75.3359375.75.75s-.3359375.75-.75.75h-2.5292969v44.5h45.25c.4140625 0 .75.3359375.75.75s-.3359375.75-.75.75z"
                                fill="#5b5e8b"
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="m16.7932796 43.0302734h-4.4284172c-.7211628 0-1.3057804-.5846176-1.3057804-1.3057785v-6.6525536c0-.7211647.5846176-1.3057823 1.3057804-1.3057823h4.4284172c.7211628 0 1.3057804.5846176 1.3057804 1.3057823v6.6525536c.0000001.7211609-.5846176 1.3057785-1.3057804 1.3057785z"
                                fill="#fcb73e"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m14.4890747 43.0302734h-2.1199951c-.7300415 0-1.3099976-.5800171-1.3099976-1.3099976v-6.6500244c0-.7199707.5799561-1.2999878 1.3099976-1.2999878h2.1199951c-.7200317 0-1.2999878.5800171-1.2999878 1.2999878v6.6500244c0 .7299805.5799561 1.3099976 1.2999878 1.3099976z"
                                fill="#fd982e"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m26.7099476 43.0302734h-4.4284191c-.7211628 0-1.3057804-.5846176-1.3057804-1.3057785v-16.6383876c0-.7211628.5846176-1.3057804 1.3057804-1.3057804h4.4284191c.7211609 0 1.3057785.5846176 1.3057785 1.3057804v16.6383877c0 .7211608-.5846176 1.3057784-1.3057785 1.3057784z"
                                fill="#46cc6b"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m24.4090576 43.0302734h-2.1300049c-.7199707 0-1.2999878-.5800171-1.2999878-1.3099976v-16.6300048c0-.7300415.5800171-1.3100586 1.2999878-1.3100586h2.1300049c-.7199707 0-1.3099976.5800171-1.3099976 1.3100586v16.6300049c.0000001.7299804.5900269 1.3099975 1.3099976 1.3099975z"
                                fill="#34ba5d"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m36.6266136 43.0302734h-4.4284172c-.7211628 0-1.3057804-.5846176-1.3057804-1.3057785v-11.5064354c0-.7211609.5846176-1.3057785 1.3057804-1.3057785h4.4284172c.7211609 0 1.3057785.5846176 1.3057785 1.3057785v11.5064354c0 .7211609-.5846176 1.3057785-1.3057785 1.3057785z"
                                fill="#65b9ff"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m34.3190308 43.0302734h-2.1199951c-.7199707 0-1.3099976-.5800171-1.3099976-1.3099976v-11.5c0-.7200317.5900269-1.3099976 1.3099976-1.3099976h2.1199951c-.7199707 0-1.2999878.5899658-1.2999878 1.3099976v11.5c0 .7299805.5800171 1.3099976 1.2999878 1.3099976z"
                                fill="#3e7fff"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m46.5432816 43.0302734h-4.428421c-.7211609 0-1.3057785-.5846176-1.3057785-1.3057785v-22.3984508c0-.7211628.5846176-1.3057804 1.3057785-1.3057804h4.428421c.7211609 0 1.3057785.5846176 1.3057785 1.3057804v22.3984509c0 .7211608-.5846177 1.3057784-1.3057785 1.3057784z"
                                fill="#e83d62"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m44.2390747 43.0302734h-2.1199951c-.7300415 0-1.3099976-.5800171-1.3099976-1.3099976v-22.3900146c0-.7299805.5799561-1.3099976 1.3099976-1.3099976h2.1199951c-.7200317 0-1.2999878.5800171-1.2999878 1.3099976v22.3900146c0 .7299805.5799561 1.3099976 1.2999878 1.3099976z"
                                fill="#ce2955"
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="m13.4540405 8.2705116v-2.918457c.6264648.0332031 1.2207031.1479492 1.7651367.3398438.2962628.1191005.5437928.0398793.7011719-.1455079.2748146-.3271027.2309036-.8808436-.2626953-1.0571289-.6430664-.2456055-1.3842773-.390625-2.2036133-.4326172v-.8037111c0-.2945359-.2338924-.5034621-.5052891-.5029323-.2795868.000546-.4898281.2193716-.4898281.5029323v.8212893c-1.9078445.1942587-2.9072266 1.4015994-2.9072266 2.75 0 1.6242561 1.3409243 2.2093878 2.9072266 2.6313477v2.815918c-.71875-.0444336-1.4165039-.2148438-2.074707-.5068359-.2402163-.1066198-.5471802-.0839977-.746582.1342773-.3256464.3527832-.1764212.9012251.2495117 1.078125.7958984.3393555 1.6606445.5454102 2.5717773.6137695v.8325195c0 .308794.2185783.4907227.4907227.4907227.3099527 0 .5043945-.2200117.5043945-.4907227v-.8320313c2.0371561-.1514807 3.0107422-1.355896 3.0107422-2.6220703 0-1.7487516-1.3062334-2.2876844-3.0107422-2.6987305zm1.6376953 2.6206055c0 .8232422-.5361328 1.2744141-1.6376953 1.3774414v-2.5625c.7225418.2054024 1.6376953.4622479 1.6376953 1.1850586zm-2.6328125-5.4887695v2.6210938c-.7716866-.2166276-1.5205078-.4967585-1.5205078-1.2905273 0-.8047482.7299423-1.2009517 1.5205078-1.3305665z"
                              fill="#fcb73e"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </td>
                <td style={{ width: "10%" }}>
                  <Link
                    href={""}
                    // "/currencyProfile/" + item.CurrencyCode
                    className="flex justify-center btn-lblue md:mx-10"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 mr-6">
        {!showAll ? (
          <button onClick={handleMoreClick} className="btn-blue">
            <FontAwesomeIcon icon={faAngleDown} beat />
          </button>
        ) : (
          <button onClick={handleLessClick} className="btn-blue">
            <FontAwesomeIcon icon={faAngleUp} beat />
          </button>
        )}
      </div>
      <div className="flex justify-start ml-2 md:ml-8">
        *** Please note that prices are subject to change based on market
        conditions.
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
