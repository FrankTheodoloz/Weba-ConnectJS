/***
 * Demo queryString (qs)
 * @type {createServer}
 */
var connect = require("connect");
var logger = require("morgan");
var query = require("connect-query");

var app = connect();

app.use(logger("combined"))

    .use(query())
    .use(function (req, res) {
        res.end(JSON.stringify(req.query));
    })
    .listen(3000);