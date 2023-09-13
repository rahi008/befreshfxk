"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_hook_form_1 = require("react-hook-form");
var InputFltName_1 = require("@/components/InputFltName");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var semex_1 = require("@/models/semex");
function Contacts() {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var onSubmit = function (data) { return sendMail(data); };
    var isProd = process.env.NODE_ENV === "production";
    var bsePath = isProd ? "/fxnew" : "";
    function sendMail(data) {
        var adminMsg = "Dear Sir/Madam," +
            "\r\n \r\n" +
            "One Visitor submitted a message to you." +
            "\r\n\r\n" +
            "Please see Visitor Message below-" +
            "\r\n" +
            "Name:  " +
            data.name +
            "\r\n" +
            "Mobile: " +
            data.mobile +
            "\r\n" +
            "Email:" +
            data.email +
            +"\r\n\r\n" +
            "-----" +
            "\r\n" +
            data.details +
            "\r\n" +
            "-----" +
            "\r\n" +
            "Thank You for Choosing BefreshFX." +
            "\r\n" +
            ".............................................................." +
            "\r\n" +
            "This is an Auto-Generated E-mail, Please Do not reply to this E-mail.";
        var clientMsg = "Dear Sir/Madam," +
            "\r\n \r\n" +
            "One Visitor submitted a message to you." +
            "\r\n\r\n" +
            "Please see your Message below-" +
            "\r\n" +
            "-----" +
            "\r\n" +
            data.details +
            "\r\n" +
            "-----" +
            "\r\n" +
            "Thank You for Choosing BefreshFX." +
            "\r\n" +
            ".............................................................." +
            "\r\n" +
            "This is an Auto-Generated E-mail, Please Do not reply to this E-mail.";
        var mailData1 = new semex_1.emailReqB(data.email, data.subject, clientMsg);
        var mailData2 = new semex_1.emailReqB("info@befreshfx.com", data.subject, adminMsg);
        var response1 = fetch(bsePath + "/api/sendEmail", {
            method: "POST",
            body: JSON.stringify(mailData1)
        });
        var response2 = fetch(bsePath + "/api/sendEmail", {
            method: "POST",
            body: JSON.stringify(mailData2)
        });
    }
    return (React.createElement("div", { className: "text-center md:py-4 border bg-gray-50 m-2 rounded shadow-lg md:m-8", id: "fxContactus" },
        React.createElement("h2", { className: "text-xl lg:text-4xl underline font-bold mb-2" }, "CONTACT US"),
        React.createElement("div", { className: "list-item p-1 md:flex " },
            React.createElement("div", { className: "md:w-1/3" },
                React.createElement("p", { className: "flex justify-left underline px-4 md:px-16" }, "Contact"),
                React.createElement("p", { className: "flex justify-left px-4 md:px-16" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot, className: "mr-3 mt-1" }),
                    "South East Money Exchange Ltd."),
                React.createElement("p", { className: "flex justify-left px-10 md:px-16" }, "Golden Plaza (5th Floor),"),
                React.createElement("p", { className: "flex justify-left px-10 md:px-16" }, "1692 CDA Avenue, GEC Moor,"),
                React.createElement("p", { className: "flex justify-left px-10 md:px-16" }, "Chattogram, Bangladesh."),
                React.createElement("p", { className: "flex justify-left px-4 md:px-16" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMobile, className: "mr-3 mt-1" }),
                    "+88 017 3044 4519"),
                React.createElement("p", { className: "flex justify-left px-4 md:px-16" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope, className: "mr-3 mt-1" }),
                    "info@befreshfx.com")),
            React.createElement("div", { className: "md:w-1/3" },
                React.createElement("p", { className: "flex justify-left underline px-4 md:px-16" }, "We Are Here"),
                React.createElement("div", { className: "h-48 w-full flex justify-center items-center" },
                    React.createElement("div", null,
                        React.createElement("iframe", { title: "googleMap", src: "https://www.google.com/maps/embed/v1/place?q=South+East+Money+Exchange+Limited,+CDA+Avenue,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" })))),
            React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "text-start px-4 md:w-1/3" },
                React.createElement("a", { href: "#", id: "openModalButton", className: "underline justify-start pb-2" }, "Tell Us More"),
                React.createElement("div", { className: "mb-4" },
                    React.createElement(InputFltName_1["default"], __assign({}, register("name"), { placeHolder: "Name", id: "name" }))),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("div", { className: "flex space-x-4" },
                        React.createElement("div", { className: "w-1/2" },
                            React.createElement(InputFltName_1["default"], __assign({}, register("mobile"), { placeHolder: "Mobile", id: "mobile" }))),
                        React.createElement("div", { className: "w-1/2" },
                            React.createElement(InputFltName_1["default"], __assign({ required: true }, register("email"), { id: "email", placeHolder: "Email" }))))),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("select", __assign({ required: true }, register("subject"), { title: "Subject", className: "w-full border border-gray-300 rounded-md px-3 py-2" }),
                        React.createElement("option", { value: "Enquiry" }, "Enquiry"),
                        React.createElement("option", { value: "Suggestions" }, "Suggestions"),
                        React.createElement("option", { value: "Complain" }, "Complain"),
                        React.createElement("option", { value: "Others" }, "Others"))),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("textarea", __assign({ required: true }, register("details"), { placeholder: "Details", className: "w-full border border-gray-300 rounded-md px-3 py-2 resize-none", rows: 3 }))),
                React.createElement("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded-full" }, "Send")))));
}
exports["default"] = Contacts;
