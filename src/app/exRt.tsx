import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import CurrentDateTime from '@/components/dtTime';

export default function MyDaisyUITableComponent() {
  const [rowData, setRowData] = useState([]);
  const [displayedRows, setDisplayedRows] = useState(5);
  const [showAll, setShowAll] = useState(false);

useEffect(() => {
async function fetchData() {
try {
  const isProd = process.env.NODE_ENV === "production";
const bsePath = isProd ? "/fxnew" : "";
const response = await fetch(`${bsePath}/api`);
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
<div className="border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8 text-center md:py-4" id="fxExchRt">
  <h2 className="text-xl lg:text-4xl underline font-bold mb-2">Exchange Rate</h2>
  <p className='text-sm md:text-xl'><CurrentDateTime/></p>
  <p className='text-sm md:text-xl'>(Last Update: 22 July 2023 00:00 PM)</p>
  <div className="overflow-x-auto p-4 lg:px-8">
    <table className="prose table shadow">
      <thead>
        <tr>
          <th colSpan={3}>
            <div className='flex justify-between text-sm md:text-xl flex-col md:flex-row'>
              <div >Base Currency: <span className='text-xl text-center fi fi-bd'></span>BDT - Bangladesh Taka</div>
              <div><button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 md:mr-4">
                  Send Query
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md sm:mr-4md:">
                  <FontAwesomeIcon icon={faShare} className="mr-2" />
                  Share
                </button></div>
              
            </div>
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th style={{ width: '60%' }}>Currency</th>
          <th style={{ width: '20%' }}><div className='flex flex-col md:flex-row'><span>We are </span><span>Buying At</span></div></th>
          <th style={{ width: '20%' }}><div className='flex flex-col md:flex-row'><span>We are </span><span>Selling At</span></div></th>
        </tr>
      </thead>
      <tbody>
        {/* {rowData.map((item:any, index) => ( */}
        {rowData.slice(0, displayedRows).map((item:any, index) => (
        <tr key={index}>
          <td style={{ width: '60%' }}>
            <div className="flex items-center space-x-3">
              <div className={` text-2xl avatar fi fi-${item.CountryCode}`} />
              <div>
                <div className="text-start font-bold">{item.CurrencyCode}</div>
                <div className="text-xs md:text-sm opacity-50">{item.CurrencyTagLine}</div>
              </div>
            </div>
          </td>
          <td style={{ width: '20%' }}>{item.Buying_Rate}</td>
          <td style={{ width: '20%' }}>{item.Selling_Rate}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-end mt-4">
        {!showAll ? (
          <button
            onClick={handleMoreClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            More
          </button>
        ) : (
          <button
            onClick={handleLessClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Less
          </button>
        )}
      </div>
  </div>
</div>
);
}