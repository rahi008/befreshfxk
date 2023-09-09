"use strict";
exports.__esModule = true;
/* This example requires Tailwind CSS v2.0+ */
var imge_1 = require("@/components/imge");
function notFound() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-white min-h-full flex flex-col lg:relative" },
            React.createElement("div", { className: "flex-grow flex flex-col" },
                React.createElement("main", { className: "flex-grow flex flex-col bg-white" },
                    React.createElement("div", { className: "flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8" },
                        React.createElement("div", { className: "flex-shrink-0 my-auto py-16 sm:py-32" },
                            React.createElement("p", { className: "text-sm font-semibold text-indigo-600 uppercase tracking-wide" }, "404 error"),
                            React.createElement("h1", { className: "mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl" }, "Page not found"),
                            React.createElement("p", { className: "mt-2 text-base text-gray-500" }, "Sorry, we couldn\u2019t find the page you\u2019re looking for."),
                            React.createElement("div", { className: "mt-6" },
                                React.createElement("a", { href: "/", className: "text-base font-medium text-indigo-600 hover:text-indigo-500" },
                                    "Go back home",
                                    React.createElement("span", { "aria-hidden": "true" }, " \u2192"))))))),
            React.createElement("div", { className: "hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" },
                React.createElement(imge_1["default"], { className: "absolute inset-0 h-full ", src: "/not-found.jpg", alt: "", height: 900, width: 450, unoptimized: true })))));
}
exports["default"] = notFound;
