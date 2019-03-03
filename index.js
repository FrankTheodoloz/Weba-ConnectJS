/***
 * Demo middleware connect/use
 * @type {createServer}
 */
var connect = require("connect");
//var http = require("http"); //pour mettre app en tant que callback
var logger = require("./logger");
var errorHandler = require("./errorHandler");

//createServer
var app = connect();

//middleware logger
app.use(logger("logs.txt"));

//générer une erreur
app.use(function (req, res, next) {
    next(new Error("Shit happens !"));
    next();
});

app.use(function (req, res, next) {
    //callback 1
    res.setHeader("X-nom", "Frank");
    next();
});

app.use(function (req, res) {
    //callback 2
    res.end("Bonjour");
});

//Exemple chaînage des methodes
app.use(errorHandler())
    .listen(3000);

//avec app en tant que callback
//http.createServer(app).listen(3000);
console.log("Serveur http démarré sur le port 3000");
