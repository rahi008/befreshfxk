"use strict";
exports.__esModule = true;
var react_1 = require("react");
var imge_1 = require("@/components/imge");
require("./slider.css");
var images = [
    "/carousel/banner1.jpg",
    "/carousel/banner2.jpg",
    "/carousel/banner3.jpg",
];
var ImageSlider = function () {
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setCurrentIndex(function (prevIndex) {
                return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            });
        }, 5000);
        return function () { return clearInterval(interval); };
    }, []);
    return (React.createElement("div", { className: "relative w-full" },
        React.createElement("div", { className: "featuredImageWrapper" }, images.map(function (image, index) { return (React.createElement(imge_1["default"], { key: index, unoptimized: true, src: image, alt: "Image " + (index + 1), fill: true, priority: true, className: index === currentIndex ? "opacity-100" : "opacity-0" })); })),
        React.createElement("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center" }, images.map(function (_, index) { return (React.createElement("span", { key: index, className: "h-2 w-2 mx-1 rounded-full " + (index === currentIndex ? "bg-blue-500" : "bg-gray-300") })); }))));
};
exports["default"] = ImageSlider;
