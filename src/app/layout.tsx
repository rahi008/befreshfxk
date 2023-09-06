import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMobile} from "@fortawesome/free-solid-svg-icons";
import Image from '@/components/imge';
import Link from 'next/link';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'BeFreshFX',
description: 'Operated by South East Money Exchange',
}

export default function RootLayout({

children,
}: {
children: React.ReactNode
}) {

return (
<html lang="en">
<body className="bg-gray-100">
  <div className="bg-gray-500 text-white px-4 md:px-8 py-2 flex justify-between items-end">

    <div className="flex items-end">
      <Image quality={100} src="/fxLogo.jpg" alt="BeFreshFX" unoptimized={true} width={24} height={24}
        className="w-16 h-16 md:w-24 md:h-24 mr-2" />
      <div>
        <p className="font-bold text-xs md:text-lg">BeFreshFX</p>
        <p className="font-bold text-xs md:text-lg">Operated by:</p>
        <p className="font-bold text-xs md:text-lg">South East Money Exchange Ltd.</p>
      </div>
    </div>
    <div className="hidden md:flex md:flex-col md:space-x-2 md:items-end">
      <p>+88 017 3044 4519</p>
      <div className="flex flex-wrap space-x-2 mt-1">
        <Link href="#" className="text-white">
        <FontAwesomeIcon icon={faMobile} className="mr-2 mt-1" />
        </Link>
        <Link href="#" className="text-white">
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 mt-1" />
        </Link>
        <Link href="#" className="text-white">
        <FontAwesomeIcon icon={faFacebookMessenger} className="mr-2 mt-1" />
        </Link>
        <Link href="#" className="text-white">
        <FontAwesomeIcon icon={faTelegram} className="mr-2 mt-1" />
        </Link>
      </div>
    </div>
    <div className="md:hidden z-20 w-auto justify-end drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" hidden/>
      <div className="drawer-content">
        {/* Page content here */}
        <label  htmlFor="my-drawer-4" className="btn btn-circle swap swap-rotate">

          {/* this hidden checkbox controls the state */}
          <input type="checkbox"/>

          {/* hamburger icon */}
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
        </label>
      </div>
      <div className="drawer-side top-20">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-full max-h-fit bg-base-200 text-base-content">
          {/* Sidebar content here */}
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
        <Link href="#fxContactus">Contact Us</Link>
      </li>
    </ul>
  </nav>

  {children}
  <footer className="footer p-10 bg-green-600 text-white">
    <div>
      <Link href="" className="link link-hover">About the Company</Link>
      <Link href="" className="link link-hover">About the Brand</Link>
      <Link href="" className="link link-hover">FAQ</Link>
      <header className="text-white">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <Link href="https://twitter.com/befreshx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> 
      <Link href="https://www.youtube.com/@BeFreshFX"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link> 
      <Link href="https://www.facebook.com/befreshfx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
    </div>
    </div>
    <div>
      <Link href="" className="link link-hover">Govt. Circulars</Link>
      <Link href="" className="link link-hover">News</Link>
    </div>
    <div>
      <span className="footer-title">Get the App</span>
      <div className="flex space-x-2">
        <Image src="/google-play.png" alt="Google Play" unoptimized={true} width={140} height={11}
          className="w-30 h-11" /><br />
      </div>
      <div className="flex space-x-2">
        <Image src="/app-store.png" alt="App Store" unoptimized={true} width={140} height={11} className="w-30 h-11" />
      </div>
    </div>
  </footer>
  <footer className="footer footer-center bg-green-600">
    <div className="border-t-2 items-center">
      <span className='block'>
        <p className="text-center text-white">Copyright 2016-2023. South East Money Exchange Ltd.</p>
      </span>
      <span className='block'>
        <Image src="/XLogo.png" alt="X Limited" width={70} height={11} unoptimized={true}
          className="h-11 mx-auto block" />
      </span>
      <span>
        <p className="text-center text-white">A X Limited Company</p>
      </span>

    </div>
  </footer>

</body>
</html>
)
}