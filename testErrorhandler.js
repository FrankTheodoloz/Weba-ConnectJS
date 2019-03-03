/***
 * Demo errorhandler
 * @type {createServer}
 */
var connect = require("connect");
var morgan = require("morgan");

var errorhandler = require("errorhandler");

//modification du titre de l'erreur
errorhandler.title = "Error";
var app = connect();

app.use(morgan("dev"));

//générer une erreur
app.use(function (req, res, next) {
    next(new Error("Shit happens !"));
    next();
})

    .use(errorhandler())
    .use(function (req, res) {
        res.end("Bonjour");
    })
    .listen(3000);

