var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {

    res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log('<----------listening on localhost and ' + port + '---------->')
});
