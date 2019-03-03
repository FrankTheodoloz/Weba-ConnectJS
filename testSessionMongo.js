var connect = require("connect");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);

var url = require("url");
var cookieParser = require("cookie-parser");
var app = connect();

app
    .use(cookieParser("secret1"))

    .use(session({
        secret: "secret2", resave: false, saveUninitialized: true,
        store: new MongoStore({
            url: 'mongodb://localhost:27017/testSessionMongo'

        })
    }))

    .use(function (req, res) {

        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;

        //parcourir le querystring
        for (var prop in query) {
            req.session[prop] = query[prop];
        }
        //ajouter un element
        req.session.client = {name: "value"};

        //affichage des variables de session
        res.end(JSON.stringify(req.session));

        //suppression un element
        // delete req.session.client;

        //suppression session
        // req.session.destroy();

    })

    .listen(3000);
