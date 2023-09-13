"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("/node_modules/flag-icons/css/flag-icons.min.css");
var cmbBox_1 = require("@/components/cmbBox");
var sendusQuery_1 = require("@/components/sendusQuery");
function CurrencyConverter() {
    var _a = react_1.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = react_1.useState(""), errorMessage = _b[0], setErrorMessage = _b[1];
    var _c = react_1.useState(""), amount = _c[0], setAmount = _c[1];
    var _d = react_1.useState(), fromCurrency = _d[0], setFromCurrency = _d[1];
    var _e = react_1.useState(), toCurrency = _e[0], setToCurrency = _e[1];
    var _f = react_1.useState(0), convertedAmount = _f[0], setConvertedAmount = _f[1];
    var inputAmntRef = react_1.useRef(null);
    var _g = react_1.useState(true), isHidden = _g[0], setIsHidden = _g[1];
    var _h = react_1.useState(false), isModalOpen = _h[0], setIsModalOpen = _h[1];
    var openModal = function () {
        setIsModalOpen(true);
    };
    var closeModal = function () {
        setIsModalOpen(false);
    };
    var handleConvert = function () {
        // Implement your currency conversion logic here
        // For demonstration purposes, let's just show a random amount
        var _a, _b;
        if ((fromCurrency === null || fromCurrency === void 0 ? void 0 : fromCurrency.CurrencyCode) === null ||
            (toCurrency === null || toCurrency === void 0 ? void 0 : toCurrency.CurrencyCode) === null ||
            (fromCurrency === null || fromCurrency === void 0 ? void 0 : fromCurrency.CurrencyCode) === "" ||
            (toCurrency === null || toCurrency === void 0 ? void 0 : toCurrency.CurrencyCode) === "" ||
            fromCurrency === undefined ||
            toCurrency === undefined) {
            alert("Please Select Both From and To Currency!");
            return;
        }
        if (fromCurrency === toCurrency) {
            setErrorMessage("error");
            //setShowModal(true);
        }
        else {
            if ((toCurrency === null || toCurrency === void 0 ? void 0 : toCurrency.CurrencyCode) == "BDT") {
                var convertedAmount_1 = Number(fromCurrency === null || fromCurrency === void 0 ? void 0 : fromCurrency.Buying_Rate) *
                    Number((_a = inputAmntRef.current) === null || _a === void 0 ? void 0 : _a.value);
                setConvertedAmount(convertedAmount_1);
            }
            else {
                var convertedAmount_2 = Number((_b = inputAmntRef.current) === null || _b === void 0 ? void 0 : _b.value) /
                    Number(toCurrency === null || toCurrency === void 0 ? void 0 : toCurrency.Selling_Rate);
                setConvertedAmount(convertedAmount_2);
            }
            setIsHidden(false);
        }
    };
    var _j = react_1.useState([]), currencyList = _j[0], setCurrencyList = _j[1];
    react_1.useEffect(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var isProd, bsePath, response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            isProd = process.env.NODE_ENV === "production";
                            bsePath = isProd ? "/fxnew" : "";
                            return [4 /*yield*/, fetch(bsePath + "/api/getCurrencyRates")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            setCurrencyList(data);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    var _k = react_1.useState(currencyList), filteredFromCurrencyList = _k[0], setFilteredFromCurrencyList = _k[1];
    var _l = react_1.useState(currencyList), filteredToCurrencyList = _l[0], setFilteredToCurrencyList = _l[1];
    react_1.useEffect(function () {
        setFilteredFromCurrencyList(currencyList);
        setFilteredToCurrencyList(currencyList);
    }, [currencyList]);
    var handleFromCurrencyChange = function (selectedCurrency) {
        setFromCurrency(selectedCurrency);
        if (selectedCurrency.CurrencyCode.includes("BDT")) {
            setFilteredToCurrencyList(currencyList.filter(function (currency) { return currency.CurrencyCode !== "BDT"; }));
        }
        else {
            setFilteredToCurrencyList(currencyList.filter(function (currency) { return currency.CurrencyCode === "BDT"; }));
        }
    };
    var handleToCurrencyChange = function (selectedCurrency) {
        setToCurrency(selectedCurrency);
        // if (selectedCurrency.CurrencyCode.includes("BDT") && fromCurrency === null) {
        //   setFilteredFromCurrencyList(currencyList.filter(currency => currency.CurrencyCode !== "BDT"));
        // } else {
        //   setFilteredFromCurrencyList(currencyList.filter(currency => currency.CurrencyCode === "BDT"));
        // }
    };
    return (react_1["default"].createElement("div", { className: "border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8", id: "fxConverter" },
        react_1["default"].createElement("div", { className: "container mx-auto text-center" },
            react_1["default"].createElement("h2", { className: "text-xl md:text-4xl underline font-bold mb-4" }, "Currency Converter"),
            react_1["default"].createElement("p", { className: "text-xs" }, "(Exchange Rate Last updated on: 19 August 2023, 00:00 pm)"),
            react_1["default"].createElement("div", { className: "lg:mx-24 my-12" },
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row md:space-x-2" },
                    react_1["default"].createElement("div", { className: "px-3 md:px-0 md:pr-0 flex justify-items-end w-full md:w-1/3 flex-col items-left sm:mr-2" },
                        react_1["default"].createElement("p", { className: "mb-2 flex items-left" }, "From"),
                        react_1["default"].createElement(cmbBox_1["default"], { currencyList: filteredFromCurrencyList, onChange: handleFromCurrencyChange })),
                    react_1["default"].createElement("div", { className: "px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2" },
                        react_1["default"].createElement("p", { className: "mb-2 flex items-left" }, "To"),
                        react_1["default"].createElement(cmbBox_1["default"], { currencyList: filteredToCurrencyList, onChange: handleToCurrencyChange })),
                    react_1["default"].createElement("div", { className: "px-3 md:px-0 flex justify-items-end md:w-1/3 flex-col items-left sm:mr-2" },
                        react_1["default"].createElement("p", { className: "mb-2 flex items-left" }, "Amount"),
                        react_1["default"].createElement("input", { ref: inputAmntRef, type: "text", placeholder: "Amount", id: "cnvrtAmnt", className: "border p-2 rounded-md", value: amount, onChange: function (e) { return setAmount(e.target.value); } }))),
                react_1["default"].createElement("button", { className: "btn-green-fw mt-4 mb-4", onClick: handleConvert }, "Convert"),
                react_1["default"].createElement("div", { id: "convrsnResult", className: "border p-4 " + (isHidden ? "hidden" : "") }, convertedAmount !== null && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("p", { className: "text-xl" }, "You will get"),
                    react_1["default"].createElement("p", { className: "text-green-500 font-bold text-4xl" }, (toCurrency === null || toCurrency === void 0 ? void 0 : toCurrency.CurrencyCode) + " " + convertedAmount.toLocaleString("en-in")),
                    react_1["default"].createElement("p", { className: "text-red-600 flex justify-start" }, "*** The amount may vary subject to actual Date, Time & Rate. The above amount is indicative only.")))),
                react_1["default"].createElement("div", { className: "flex justify-end md:space-x-4 mt-4 sm:md:" },
                    react_1["default"].createElement("button", { onClick: openModal, className: "bg-blue-500 text-white px-4 py-2 rounded-md mr-2 md:mr-4" }, "Send Query"),
                    react_1["default"].createElement("button", { className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-4" },
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" })))))),
        react_1["default"].createElement(sendusQuery_1["default"], { isOpen: isModalOpen, onClose: closeModal })));
}
exports["default"] = CurrencyConverter;
