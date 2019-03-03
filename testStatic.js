/***
 * Demo serve-static
 * @type {createServer}
 */
var connect = require("connect");
var morgan = require("morgan");

var serveStatic = require("serve-static");
var app = connect();

app.use(morgan("dev"))
    .use(serveStatic("public/images"))
    .use(serveStatic("public/pdf"))
    .use(function (req, res) {
        res.end("Bonjour");
    })
    .listen(3000);