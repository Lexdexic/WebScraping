var express = require("express");
var path = require("path");
var app = express();
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var poort = 8080;

var url = "https://www.reddit.com/"

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var articleTitle = $(".title");
    var articleTitleText = articleTitle.text();

    console.log(articleTitleText);
})

app.listen(port);
console.log("server running on " + port);