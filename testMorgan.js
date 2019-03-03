var connect = require("connect");
var morgan = require("morgan");

var app = connect();

app.use(morgan("date=:date[iso]"))
    .use(morgan(" address=:remote-addr"))
    .use(morgan(" url=:url"))
    .use(morgan(" response-time=:response-time"))
    .use(function (req, res) {
        res.end("Bonjour");
    })
    .listen(3000);