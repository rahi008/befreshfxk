"use strict";
exports.__esModule = true;
var html_1 = require("@react-email/html");
var text_1 = require("@react-email/text");
var section_1 = require("@react-email/section");
var container_1 = require("@react-email/container");
function WelcomeEmail() {
    return (React.createElement(html_1.Html, null,
        React.createElement(section_1.Section, { style: main },
            React.createElement(container_1.Container, { style: container },
                React.createElement(text_1.Text, { style: heading }, "Hi there!"),
                React.createElement(text_1.Text, { style: paragraph }, "Welcome to our app!")))));
}
exports["default"] = WelcomeEmail;
// Styles for the email template
var main = {
    backgroundColor: "#ffffff"
};
var container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px"
};
var heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848"
};
var paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848"
};
