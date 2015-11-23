/**
 * Created by mcpar on 11/22/2015.
 */

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser());

app.delete('/user/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        delete users["user" + req.params.id];
        console.log( users );
        res.end( JSON.stringify(users));
    });
});

app.get('/user', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.put('/user', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var aUser = req.body;
        console.log( aUser );
        users["user4"] = aUser;
        res.end( JSON.stringify(users));
    });
});

app.post('/user/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        users["user" + req.params.id] = req.body;
        console.log(users);
        res.end( JSON.stringify(users));
    });
});

app.get('/user/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id];
        console.log( user );
        res.end( JSON.stringify(user));
    });
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});

var demoUser = [{
    "name" : "Miranda Merkelr",
    "password" : "CEO",
    "profession" : "relkremadnarim",
    "id": 4
}];