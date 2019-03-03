/***
 * errorHandler middleware
 * @returns {Function}
 */
function errorHandler (){
    return function (err, req, res, next) {
        console.log("errorHandler");
        if (err) {
            res.writeHead(500, {"Content-Type": "Text/html"});
            res.end("<h1>Erreur !</h1>\n<pre>" + err.stack + "</pre>");
        } else next();

    };
}

module.exports = errorHandler;