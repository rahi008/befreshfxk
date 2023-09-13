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
//import { AgGridReact } from "ag-grid-react";
require("ag-grid-community/styles/ag-grid.css");
require("ag-grid-community/styles/ag-theme-alpine.css");
var cellRenderer_1 = require("@/components/cellRenderer");
var topRow_1 = require("@/components/topRow");
var getRowHeight = function (params) {
    // Calculate row height based on the content
    // For example, you can return a fixed height or calculate based on the text length.
    // Modify this logic according to your needs.
    return 50; // Set the desired row height here
};
function MyGridComponent() {
    var _a = react_1.useState([]), rowData = _a[0], setRowData = _a[1];
    react_1.useEffect(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("/api")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            setRowData(data);
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
    var gridOptions = {
        // ... other grid options
        frameworkComponents: {
            topRowComponent: topRow_1["default"]
        }
    };
    var columnDefs = [
        // Explicitly specify the type as ColDef[]
        {
            headerName: "Custom Header",
            field: "someField",
            headerComponent: topRow_1["default"]
        },
        {
            headerName: "Currency",
            valueGetter: function (params) { return params.data; },
            cellRenderer: cellRenderer_1["default"],
            width: 150
        },
        {
            headerName: "We are Buying At",
            field: "Buying_Rate",
            cellStyle: { justifyContent: "center" },
            width: 150
        },
        {
            headerName: "We are Selling At",
            field: "Selling_Rate",
            cellStyle: { justifyContent: "center" },
            width: 150
        },
    ];
    return (React.createElement("div", { className: "text-center border bg-gray-50 py-8 m-2 rounded shadow-lg md:m-8", id: "fxExchRt" },
        React.createElement("h2", { className: "text-xl lg:text-4xl underline font-bold mb-2" }, "Exchange Rate"),
        React.createElement("div", { className: "ag-theme-balham w-full h-96 p-4 m-0" },
            React.createElement(AgGridReact, { rowData: rowData, columnDefs: columnDefs, getRowHeight: getRowHeight }))));
}
exports["default"] = MyGridComponent;
