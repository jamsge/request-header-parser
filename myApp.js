var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.get("/api/whoami", function(req, res){
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    })
})

module.exports = app;