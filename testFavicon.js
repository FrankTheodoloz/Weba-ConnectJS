/***
 * Demo favicon
 * @type {createServer}
 */
var connect = require("connect");
var morgan = require("morgan");
var serveFavicon = require("serve-favicon");
var app = connect();

app
    .use(morgan("dev"))
    .use(serveFavicon("public/favicon.png"))
    .use(function (req, res) {
        res.end("Bonjour");
    })
    .listen(3000);