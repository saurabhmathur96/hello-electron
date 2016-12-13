var dotenv = require("dotenv");
dotenv.load();
var path = require("path");
var fs = require("fs");


var source = path.join(__dirname, "configuration", `${process.env.NODE_ENV}.js`);
var destination = path.join(__dirname, "app", "js", "configuration.js");


fs.createReadStream(source).pipe(fs.createWriteStream(destination));
