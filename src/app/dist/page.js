"use strict";
exports.__esModule = true;
var ContactUs_1 = require("./ContactUs");
var ImageSlider_1 = require("./ImageSlider");
var CurrencyConverter_1 = require("./CurrencyConverter");
var OurServices_1 = require("./OurServices");
var exRt_1 = require("./exRt");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mx-2 md:mx-8 relative shadow-xl z-10" },
            React.createElement(ImageSlider_1["default"], null)),
        React.createElement(exRt_1["default"], null),
        React.createElement(CurrencyConverter_1["default"], null),
        React.createElement(OurServices_1["default"], null),
        React.createElement(ContactUs_1["default"], null)));
}
exports["default"] = Home;
