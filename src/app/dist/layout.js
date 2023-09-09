"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google");
require("@fortawesome/fontawesome-svg-core/styles.css");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var imge_1 = require("@/components/imge");
var link_1 = require("next/link");
fontawesome_svg_core_1.config.autoAddCss = false;
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "BeFreshFX",
    description: "Operated by South East Money Exchange"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: "bg-gray-400" },
            React.createElement("div", { className: "bg-gray-500 text-white px-4 md:px-8 py-2 flex justify-between items-end" },
                React.createElement("div", { className: "flex items-end" },
                    React.createElement(imge_1["default"], { quality: 100, src: "/fxLogo.jpg", alt: "BeFreshFX", unoptimized: true, width: 24, height: 24, className: "w-16 h-16 md:w-24 md:h-24 mr-2" }),
                    React.createElement("div", null,
                        React.createElement("p", { className: "font-bold text-xs md:text-lg" }, "BeFreshFX"),
                        React.createElement("p", { className: "font-bold text-xs md:text-lg" }, "Operated by:"),
                        React.createElement("p", { className: "font-bold text-xs md:text-lg" }, "South East Money Exchange Ltd."))),
                React.createElement("div", { className: "hidden md:flex md:flex-col md:space-x-2 md:items-end" },
                    React.createElement("p", null, "+88 017 3044 4519"),
                    React.createElement("div", { className: "flex flex-wrap space-x-2 mt-1" },
                        React.createElement(link_1["default"], { href: "#", className: "text-white" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMobile, className: "mr-2 mt-1" })),
                        React.createElement(link_1["default"], { href: "#", className: "text-white" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faWhatsapp, className: "mr-2 mt-1" })),
                        React.createElement(link_1["default"], { href: "#", className: "text-white" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebookMessenger, className: "mr-2 mt-1" })),
                        React.createElement(link_1["default"], { href: "#", className: "text-white" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTelegram, className: "mr-2 mt-1" })))),
                React.createElement("div", { className: "md:hidden z-20 w-auto justify-end drawer drawer-end" },
                    React.createElement("input", { id: "my-drawer-4", type: "checkbox", className: "drawer-toggle", hidden: true }),
                    React.createElement("div", { className: "drawer-content" },
                        React.createElement("label", { htmlFor: "my-drawer-4", className: "btn btn-circle swap swap-rotate" },
                            React.createElement("input", { type: "checkbox" }),
                            React.createElement("svg", { className: "swap-off fill-current", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 512 512" },
                                React.createElement("path", { d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" })),
                            React.createElement("svg", { className: "swap-on fill-current", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 512 512" },
                                React.createElement("polygon", { points: "400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" })))),
                    React.createElement("div", { className: "drawer-side top-20" },
                        React.createElement("label", { htmlFor: "my-drawer-4", className: "drawer-overlay" }),
                        React.createElement("ul", { className: "menu p-4 w-full max-h-fit bg-base-200 text-base-content" },
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "/" }, "Home")),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "#fxExchRt" }, "Exchange Rate")),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "#fxConverter" }, "Converter")),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "#fxServices" }, "Services")),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "#fxContactus" }, "Contact Us")))))),
            React.createElement("nav", { className: "hidden md:block md:bg-gray-300 md:py-2" },
                React.createElement("ul", { className: "flex space-x-4 justify-left px-8" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#fxExchRt" }, "Exchange Rate")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#fxConverter" }, "Converter")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#fxServices" }, "Services")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#fxContactus" }, "Contact Us")))),
            React.createElement("div", { className: "" }, children),
            React.createElement("footer", { className: "footer px-10 py-6 bg-gray-500 text-white" },
                React.createElement("div", null,
                    React.createElement(link_1["default"], { href: "", className: "link link-hover" }, "About the Company"),
                    React.createElement(link_1["default"], { href: "", className: "link link-hover" }, "About the Brand"),
                    React.createElement(link_1["default"], { href: "", className: "link link-hover" }, "FAQ"),
                    React.createElement("header", { className: "text-white" }, "Social"),
                    React.createElement("div", { className: "grid grid-flow-col gap-4" },
                        React.createElement(link_1["default"], { href: "https://twitter.com/befreshx" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current" },
                                React.createElement("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }))),
                        React.createElement(link_1["default"], { href: "https://www.youtube.com/@BeFreshFX" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current" },
                                React.createElement("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }))),
                        React.createElement(link_1["default"], { href: "https://www.facebook.com/befreshfx" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current" },
                                React.createElement("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }))))),
                React.createElement("div", null,
                    React.createElement(link_1["default"], { href: "", className: "link link-hover" }, "Govt. Circulars"),
                    React.createElement(link_1["default"], { href: "", className: "link link-hover" }, "News")),
                React.createElement("div", null,
                    React.createElement("span", { className: "footer-title" }, "Get the App"),
                    React.createElement("div", { className: "flex space-x-2" },
                        React.createElement(imge_1["default"], { src: "/google-play.png", alt: "Google Play", unoptimized: true, width: 140, height: 11, className: "w-30 h-11" }),
                        React.createElement("br", null)),
                    React.createElement("div", { className: "flex space-x-2" },
                        React.createElement(imge_1["default"], { src: "/app-store.png", alt: "App Store", unoptimized: true, width: 140, height: 11, className: "w-30 h-11" })))),
            React.createElement("footer", { className: "footer footer-center bg-gray-500" },
                React.createElement("div", { className: "border-t-2 items-center gap-0" },
                    React.createElement("span", { className: "block" },
                        React.createElement("p", { className: "text-center text-white" }, "Copyright 2016-2023. South East Money Exchange Ltd.")),
                    React.createElement("span", { className: "block" },
                        React.createElement(imge_1["default"], { src: "/XLogo.png", alt: "X Limited", width: 70, height: 11, unoptimized: true, className: "h-11 mx-auto block" })),
                    React.createElement("span", null,
                        React.createElement("p", { className: "text-center text-white" }, "A X Limited Company")))))));
}
exports["default"] = RootLayout;
