'use client'
import ContactUs from './ContactUs'
import ImageSlider from './ImageSlider'
import CurrencyConverter from './CurrencyConverter'
import OurServices from './OurServices'
import ExchangeRate from './exRt'
import ERate from './eRate'
export default function Home() {
  return (
    <>
      <div className="relative z-10">
        {/* Your slider component */}
        <ImageSlider />
      </div>
      <ExchangeRate></ExchangeRate>
      {/* <ERate></ERate> */}
      <CurrencyConverter></CurrencyConverter>
      <OurServices></OurServices>
      <ContactUs></ContactUs>
    </>
  )
}
