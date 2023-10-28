// pages/index.tsx
"use client";
import { GetServerSideProps } from "next";
import NewsList from "@/app/currencyNews/newsList";
import { currency_news } from "@/app/models/semex";
import { useEffect, useState } from "react";

export const revalidate = 0;

// interface HomeProps {
//   newsData: currency_news[];
// }

// const Home: React.FC<HomeProps> = ({ newsData }) => {
//   return (
//     <div>
//       <h1>News List</h1>
//       <NewsList newsData={newsData} itemsPerPage={20} />
//     </div>
//   );
// };

export default function News() {
  const [apiData, setapiData] = useState<currency_news[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew/" : "";
        const response = await fetch(`${bsePath}/api/getNews`);
        const data = await response.json();
        setapiData(data);
        // const upDt = data.find((item) => item.CurrencyCode === "USD");
        //await setRowData(data);
        //await setLastUpdate(new Date(data[0].update_datetime));

        // Generate serial numbers for rows
        //const serials = Array.from({ length: data.length }, (_, i) => i + 1);
        //setSerialNumbers(serials);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="mx-6 text-4xl font-bold">Fx News</h1>
      <NewsList newsData={apiData} itemsPerPage={20}></NewsList>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   // Fetch your news data from the API and store it in the `newsData` variable
//   const isProd = process.env.NODE_ENV === "production";
//   const bsePath = isProd ? "/fxnew/" : "";
//   const response = await fetch(`${bsePath}/api/getNews`, {
//     // cache: 'no-cache' or 'no-store'
//     next: { revalidate: 0 },
//   });
//   console.log(response);
//   const newsData = await response.json();

//   return {
//     props: {
//       newsData,
//     },
//   };
// };

//export default Home;
