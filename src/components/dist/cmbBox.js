"use strict";
exports.__esModule = true;
var react_1 = require("react");
var solid_1 = require("@heroicons/react/24/solid");
var react_2 = require("@headlessui/react");
var react_3 = require("react");
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(" ");
}
function CmbBox(_a) {
    var currencyList = _a.currencyList, onChange = _a.onChange;
    console.log({ currencyList: currencyList });
    var _b = react_1.useState(""), query = _b[0], setQuery = _b[1];
    var _c = react_1.useState(), selectedCurrency = _c[0], setSelectedCurrency = _c[1];
    var inputRef = react_1.useRef(null);
    var handleCurrencyChange = function (currency) {
        setSelectedCurrency(currency); // Update selectedCurrency when a currency is selected
        onChange(currency); // Call the onChange callback
    };
    var handleInputClick = function () {
        if (inputRef.current) {
            inputRef.current.value = ""; // Clear the input text when clicked
            react_2.Combobox.Options.call;
        }
    };
    var filteredCurrencies = query === ""
        ? currencyList
        : currencyList.filter(function (currency) {
            return currency.Currency_Name.toLowerCase().includes(query.toLowerCase());
        });
    return (react_3["default"].createElement(react_2.Combobox, { as: "div", value: selectedCurrency, onChange: handleCurrencyChange },
        react_3["default"].createElement("div", { className: "relative w -full rounded-md border border-gray-300 bg-white pl-3 pr-10 shadow-sm focus:border-indigo-500  focus:ring-1 focus:ring-indigo-500 sm:text-sm" },
            react_3["default"].createElement("span", { className: "fi fi-" + (selectedCurrency === null || selectedCurrency === void 0 ? void 0 : selectedCurrency.CountryCode) + " mr-2" }),
            react_3["default"].createElement(react_2.Combobox.Input, { ref: inputRef, className: "border-0 w-5/6 selection:border-0 focus:ring-0", onChange: function (event) { return setQuery(event.target.value); }, displayValue: function (currency) {
                    return currency.CurrencyCode + " - " + currency.CurrencyTagLine;
                }, onClick: handleInputClick, placeholder: "Select Currency" }),
            react_3["default"].createElement(react_2.Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" },
                react_3["default"].createElement(solid_1.ChevronUpDownIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" })),
            filteredCurrencies.length >= 0 && (react_3["default"].createElement(react_2.Combobox.Options, { className: "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, filteredCurrencies.map(function (currency) { return (react_3["default"].createElement(react_2.Combobox.Option, { key: currency.CurrencyCode, value: currency, className: function (_a) {
                    var active = _a.active;
                    return classNames("relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white" : "text-gray-900");
                } }, function (_a) {
                var active = _a.active, selected = _a.selected;
                return (react_3["default"].createElement(react_3["default"].Fragment, null,
                    react_3["default"].createElement("div", { className: "flex items-center" },
                        react_3["default"].createElement("span", { className: "fi fi-" + currency.CountryCode + " mr-2" }),
                        react_3["default"].createElement("span", { className: classNames("ml-3 truncate", selected && "font-semibold") }, currency.CurrencyCode + " - " + currency.CurrencyTagLine)),
                    selected && (react_3["default"].createElement("span", { className: classNames("absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600") },
                        react_3["default"].createElement(solid_1.CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" })))));
            })); }))))));
}
exports["default"] = CmbBox;
