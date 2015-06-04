var React = require("react");
var App   = require("./app.jsx");

(function main () {
    console.log("hello world");

    React.render(<App/>, document.getElementById("app"));
}());

