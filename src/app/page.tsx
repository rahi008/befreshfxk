import ContactUs from "./ContactUs";
import ImageSlider from "./ImageSlider";
import CurrencyConverter from "./CurrencyConverter";
import OurServices from "./OurServices";
import ExchangeRate from "./exRt";
import ERate from "./eRate";
import { useState } from "react";
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
