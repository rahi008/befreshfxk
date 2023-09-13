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
var react_2 = require("@headlessui/react");
var cmbBox_1 = require("@/components/cmbBox");
function Modal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = react_1.useState(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var _c = react_1.useState(""), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(""), name = _d[0], setName = _d[1];
    var _e = react_1.useState(""), mobile = _e[0], setMobile = _e[1];
    var _f = react_1.useState([]), currencyList = _f[0], setCurrencyList = _f[1];
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
    var options = ["Buy", "Sell"];
    var handleFormSubmit = function (e) {
        e.preventDefault();
        // Handle form submission here
    };
    var handleCurrencyChange = function (selectedCurrency) { };
    return (react_1["default"].createElement(react_2.Transition, { show: isOpen, as: react_1["default"].Fragment },
        react_1["default"].createElement("div", { className: "fixed inset-0 z-50 overflow-y-auto" },
            react_1["default"].createElement("div", { className: "flex items-center justify-center min-h-screen " },
                react_1["default"].createElement(react_2.Transition.Child, { as: react_1["default"].Fragment, enter: "transition-opacity duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react_1["default"].createElement("div", { className: "fixed inset-0 bg-black opacity-30", onClick: onClose })),
                react_1["default"].createElement(react_2.Transition.Child, { as: react_1["default"].Fragment, enter: "transition-transform duration-300", enterFrom: "translate-y-full", enterTo: "translate-y-0", leave: "transition-transform duration-300", leaveFrom: "translate-y-0", leaveTo: "translate-y-full" },
                    react_1["default"].createElement("div", { className: "z-10 w-full max-w-xl mx-auto bg-white rounded-md shadow-xl" },
                        react_1["default"].createElement("div", { className: "flex justify-between bg-teal-600  pl-6 " },
                            react_1["default"].createElement("h3", { className: "text-lg text-white font-semibold" }, "Send Us Query"),
                            react_1["default"].createElement("button", { className: "text-white bg-red-600 px-4 py-2 hover:text-red-700", onClick: onClose }, "x")),
                        react_1["default"].createElement("div", { className: "p-2 md:p-6" },
                            react_1["default"].createElement("form", { onSubmit: handleFormSubmit },
                                react_1["default"].createElement("div", { className: "border border-slate-600 p-2 mt-2 rounded" },
                                    react_1["default"].createElement("div", { className: "mt-4 flex flex-row justify-between" },
                                        react_1["default"].createElement("label", { className: "block mb-2" }, "I want to"),
                                        react_1["default"].createElement("span", { className: "space-x-4" }, options.map(function (option, index) { return (react_1["default"].createElement("button", { key: index, className: "py-1 px-3 border " + (selectedOption === option
                                                ? "bg-blue-500 text-white"
                                                : "border-gray-300") + " rounded-md", onClick: function () { return setSelectedOption(option); } }, option)); }))),
                                    react_1["default"].createElement("div", { className: "mt-4 flex flex-col md:flex-row md:justify-between" },
                                        react_1["default"].createElement(cmbBox_1["default"], { currencyList: currencyList, onChange: handleCurrencyChange }),
                                        react_1["default"].createElement("input", { type: "text", placeholder: "Amount", className: "border border-gray-300 rounded-md px-3 py-2 mt-2 md:mt-0" })),
                                    react_1["default"].createElement("div", { className: "mt-4 text-right text-gray-500" }, "Apx: BDT ...")),
                                react_1["default"].createElement("div", { className: "border border-slate-600 p-2 mt-2 rounded" },
                                    react_1["default"].createElement("div", { className: "mt-4" },
                                        react_1["default"].createElement("input", { type: "text", placeholder: "Name", className: "w-full border border-gray-300 rounded-md px-3 py-2" })),
                                    react_1["default"].createElement("div", { className: "mt-4" },
                                        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row md:space-x-4" },
                                            react_1["default"].createElement("input", { type: "text", placeholder: "Mobile", className: "md:w-1/2 border border-gray-300 rounded-md mb-2 md:mb-0 md:px-3 py-2" }),
                                            react_1["default"].createElement("input", { type: "email", placeholder: "Email", className: "md:w-1/2 border border-gray-300 rounded-md md:px-3 py-2" })))),
                                react_1["default"].createElement("div", { className: "mt-6 text-right" },
                                    react_1["default"].createElement("button", { type: "submit", className: "bg-green-500 text-white px-4 py-2 rounded-sm" }, "Submit"))),
                            react_1["default"].createElement("label", { className: "text-sm" }, "BeFreshFX concern person will contact to you soon."))))))));
}
exports["default"] = Modal;
