var connect = require("connect");
var logger = require("morgan");
var methodOverride = require('method-override')
var serveStatic = require("serve-static");
var bodyParser = require("body-parser");

var app = connect();

// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method')) // Microsoft
    .use(methodOverride('X-Method-Override')) // IBM
    .use(methodOverride('X-HTTP-Method-Override')); // Google/GData

app
    .use(logger("dev"))
    .use(serveStatic("public/forms"))
    .use(bodyParser.urlencoded({extended: false})) //querystring or qs (true)
    .use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method
            delete req.body._method
            return method
        }
    }))
    .use(function (req, res) {
        res.setHeader("Content-Type", "text/html");
        res.end(req.method + " " + req.url + "<br/>" + JSON.stringify(req.body))
    })
    .listen(3000);