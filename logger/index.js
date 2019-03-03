/***
 * logger middleware
 *
 * @type {module:fs}
 */
var fs = require("fs");

function logger(filename) {

    //cette fonction est retournée car le callback  est limité à req, res, next
    return function (req, res, next) {
        fs.writeFile(filename, req.url + "\r\n", {flag: "a+"}, function (err) {
            console.log(filename + " " + req.url);
            next();
        });
    };
}

module.exports = logger;
