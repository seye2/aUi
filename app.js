
/**
 * Module dependencies.
 */

var express = require('express')
    , http=require('http')
    , path = require('path')
    , bodyParser = require('body-parser')
    , app = express();

app.set('port', process.env.PORT || 8080);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//set link root
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/front-src/index.html'));
});

app.get('/accordion', function(req, res) {
    res.sendFile(path.join(__dirname + '/front-src/html/accordion/accordion.html'));
});

app.get('/tab', function(req, res) {
    res.sendFile(path.join(__dirname + '/front-src/html/tab/tab.html'));
});

app.get('/carousel', function(req, res) {
    res.sendFile(path.join(__dirname + '/front-src/html/carousel/carousel.html'));
});
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});