/***
 * Demo queryString (qs)
 * @type {createServer}
 */
var connect = require("connect");
var morgan = require("morgan");
var qs = require("querystring");

var app = connect();

app.use(morgan("combined"))

    .use(function (req, res) {
        var q = qs.parse(req.url); //fonctionne pas comme prévu
        console.log(q);
        res.end(JSON.stringify(q));
    })
    .listen(3000);