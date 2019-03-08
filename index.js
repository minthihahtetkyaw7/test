var express = require("express");
var parser = require("body-parser");
var app = express();

app.set('views','./view');
app.engine('html',require('ejs').renderFile);

var server=app.listen(3000,function(){
    console.log("Server started");

    app.get('/',function(req,res){
        res.send("About Page");
    });

    app.get('/about',function(req,res){
        res.render("index.html",{greeting:"Welcome To Index"});
    });
});