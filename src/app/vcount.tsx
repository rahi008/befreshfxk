"use client";
import React, { useEffect, useRef, useState } from "react";
export default function Vcount() {
  const [vc, setVc] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew" : "";
        const response = await fetch(`${bsePath}/api/visitorCount`, {
          //cache:'no-cache'/'no-store'
          next: { revalidate: 0 },
        });
        const data = await response.json();
        await setVc(data.totalCount | 0);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return <label>Visitors: {vc.toLocaleString("en-in")}</label>;
}
