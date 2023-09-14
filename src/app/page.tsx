import ContactUs from "@/app/ContactUs";
import ImageSlider from "@/app/ImageSlider";
import CurrencyConverter from "@/app/CurrencyConverter";
import ExchangeRate from "@/app/exRt";
import { useState } from "react";
import OurServices from "@/app/OurServices";
export default function Home() {
  return (
    <>
      <div className="mx-2 md:mx-8 relative shadow-xl z-10">
        {/* Your slider component */}
        <ImageSlider />
      </div>
      <ExchangeRate></ExchangeRate>
      {/* <ERate></ERate> */}
      <CurrencyConverter></CurrencyConverter>
      <OurServices></OurServices>
      <ContactUs></ContactUs>
    </>
  );
}
