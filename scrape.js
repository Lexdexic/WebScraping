var express = require("express");
var path = require("path");
var app = express();
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var port = 8080;

var url = "https://www.cnbc.com/technology/"

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    
    var articleTitle = $(".headline");
    var articleTitleText = articleTitle.text();
    
    var articleDescription = $(".desc")
    var articleDescriptionText = articleDescription.text();

    var info = {
        articleTitle: articleTitleText,
        articleDescription: articleDescriptionText
    }

    console.log(info);
    console.log(articleTitleText);
    console.log(articleDescriptionText);
})

app.listen(port);
console.log("server running on " + port);