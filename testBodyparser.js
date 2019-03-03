/***
 * Demo body-parser
 * @type {createServer}
 */
var connect = require("connect");
var morgan = require("morgan");

var serveStatic = require("serve-static");
var bodyParser = require("body-parser");

var app = connect();

app.use(morgan("dev"))
    .use(serveStatic("public/forms"))
    .use(bodyParser.urlencoded({ extended: false })) //querystring or qs (true)
    .use(function(req,res){
        res.end(JSON.stringify(req.body))
    })
    .listen(3000);