"use client";
import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import Image from "@/app/components/imge";
import Link from "next/link";
import Vcount from "./vcount";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeFreshFX",
  description: "Operated by South East Money Exchange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-400">
        <div className="bg-gray-900 text-white px-4 md:px-8 py-2 flex justify-between items-end">
          <div className="flex items-end">
            <Link href="/">
              <Image
                quality={100}
                src="/fxNlogo.png"
                alt="BeFreshFX"
                unoptimized={true}
                width={60}
                height={20}
                className="w-36 h-12 md:w-60 md:h-20 mr-2"
              />
            </Link>
            <div className="hidden md:block">
              <p className="font-bold text- md:text-xs">Operated by:</p>
              <p className="font-bold text-xs md:text-lg">
                South East Money Exchange Limited
              </p>
              <p className="font-bold text-xs md:text-xs">
                (Govt. Approved Money Changer)
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col md:space-x-2 md:items-end">
            <p className="text-xl">+88 017 3044 4519</p>
            <div className="flex flex-wrap space-x-2 mt-1">
              <Link href="#" className="text-white">
                <FontAwesomeIcon
                  icon={faMobile}
                  className="mr-2 mt-1 text-2xl hover:text-blue-400"
                />
              </Link>
              <Link href="#" className="text-white">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mr-2 mt-1 hover:text-green-400 text-2xl"
                />
              </Link>
              <Link href="#" className="text-white">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className="mr-2 mt-1 hover:text-blue-600 text-2xl"
                />
              </Link>
              <Link href="#" className="text-white">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="mr-2 mt-1 hover:text-blue-400 text-2xl"
                />
              </Link>
            </div>
          </div>
          <div className="md:hidden z-20 w-auto justify-end drawer drawer-end">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              hidden
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="btn btn-circle swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div className="drawer-side top-20">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-full max-h-fit bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#fxExchRt">Exchange Rate</Link>
                </li>
                <li>
                  <Link href="#fxConverter">Converter</Link>
                </li>
                <li>
                  <Link href="#fxServices">Services</Link>
                </li>
                <li>
                  <Link href="/fxnew/currencyNews">News</Link>
                </li>
                <li>
                  <Link href="#fxContactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="hidden md:block md:bg-gray-300 md:py-2">
          <ul className="flex space-x-4 justify-left px-8">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#fxExchRt">Exchange Rate</Link>
            </li>
            <li>
              <Link href="#fxConverter">Converter</Link>
            </li>
            <li>
              <Link href="#fxServices">Services</Link>
            </li>
            <li>
              <Link href="/fxnew/currencyNews">News</Link>
            </li>
            <li>
              <Link href="#fxContactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="">{children}</div>

        <footer className="footer px-10 py-6 bg-gray-900 text-white">
          <dialog id="aboutTheBrand" className="modal text-black">
            <div className="modal-box">
              <h3 className="font-bold text-lg">About the Brand “BeFreshFX”</h3>
              <p className="py-4 text-justify">
                &apos;BeFreshFX&apos; is a prominent Brand operated by
                &apos;South East Money Exchange Limited&apos;, a
                government-approved money changer. With a strong reputation in
                the financial industry, &apos;BeFreshFX&apos; offers a wide
                range of currency exchange services to individuals and
                businesses. It’s expertise lies in providing efficient and
                secure transactions, ensuring customer satisfaction.
              </p>
              <p className="py-4 text-justify">
                As a Brand, &apos;BeFreshFX&apos; is committed to delivering
                competitive exchange rates, prompt service, and transparent
                operations. Backed by the trust of being a government-approved
                money changer, &apos;BeFreshFX&apos; aims to facilitate seamless
                currency exchanges for its clients, making their financial
                transactions smooth and hassle-free.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="aboutTheCompany" className="modal text-black">
            <div className="modal-box">
              <h3 className="font-bold text-lg">About the Company</h3>
              <p className="py-4 text-justify">
                South East Money Exchange Limited, established in 2016 and based
                in Chattogram, Bangladesh, is a reputable money exchange
                business operating under the license from Bangladesh Bank. As a
                subsidiary of &apos;X Limited&apos;, the company benefits from
                the support and resources of its parent organization. Alongside
                its sister company, &apos;Be Fresh Limited&apos;, a leading
                travel agent and tour operator in Bangladesh, South East Money
                Exchange provides reliable currency exchange services.
              </p>
              <p className="py-4 text-justify">
                Operated by a professional team, this trusted company
                prioritizes customer satisfaction and ensures secure and
                efficient transactions. With the backing of a strong parent
                company and a commitment to professionalism, South East Money
                Exchange Limited has gained a solid reputation in the industry.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <div>
            <label
              className="link link-hover"
              onClick={() =>
                (
                  document.getElementById("aboutTheCompany") as HTMLFormElement
                ).showModal()
              }
            >
              About the Company
            </label>
            <label
              className="link link-hover"
              onClick={() =>
                (
                  document.getElementById("aboutTheBrand") as HTMLFormElement
                ).showModal()
              }
            >
              About the Brand
            </label>
            <Link href="" className="link link-hover">
              FAQ
            </Link>
            <header className="text-white">Social</header>
            <div className="grid grid-flow-col gap-4">
              <Link target="_blank" href="https://twitter.com/befreshx">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl hover:text-blue-400"
                />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/@BeFreshFX">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl hover:text-red-700"
                />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/befreshfx">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl hover:text-blue-500"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/befreshfx-operated-by-south-east-money-exchange-limited-0109b7228/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl hover:text-blue-900"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/south_eastmoney_exchange_"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl hover:text-red-500"
                />
              </Link>
            </div>
          </div>
          <div>
            <Link href="/fxnew/govCir" className="link link-hover">
              Govt. Circulars
            </Link>
            <Link href="/fxnew/currencyNews" className="link link-hover">
              News
            </Link>
            <Link
              href="https://www.befreshfx.com/old/login.aspx"
              className="link link-hover"
            >
              System Login
            </Link>
            <span className="md:mt-6">
              <Vcount></Vcount>
            </span>
          </div>
          <div>
            <span className="footer-title">Get the App</span>
            <div className="flex space-x-2">
              <Image
                src="/google-play.png"
                alt="Google Play"
                unoptimized={true}
                width={140}
                height={11}
                className="w-30 h-11"
              />
              <br />
            </div>
            <div className="flex space-x-2">
              <Image
                src="/app-store.png"
                alt="App Store"
                unoptimized={true}
                width={140}
                height={11}
                className="w-30 h-11"
              />
            </div>
          </div>
        </footer>
        <footer className="footer mx-2footer-center bg-gray-900">
          <div className="w-full px-8 border-t-2 mb-2 flex flex-row justify-between">
            <span className="text-white px-2">
              Copyright 2016-2023. South East Money Exchange Limited (a Govt.
              Approved Money Changer)
            </span>
            <Link
              href="http://www.xlimited.xyz/"
              target="_blank"
              className="text-white"
            >
              a &apos;X Limited&apos; Company
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
