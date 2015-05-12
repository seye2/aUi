
/**
 * Module dependencies.
 */

var express = require('express')
    , http=require('http')
    , path = require('path')
    , bodyParser = require('body-parser')
    , app = express()
    , engine = require('express-dot-engine');

app.set('port', process.env.PORT || 8080);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//set link root
app.use(express.static(__dirname));

app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, '/front-src/dotjs/views/'));
app.set('view engine', 'dot');

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

app.get('/dotjs', function(req, res) {
    res.render('index', { fromServer: 'Hello from server' });
});
//app.get('/users', user.list);


app.get('/layout', function(req, res) {
    res.render('layout/index');
});

app.get('/cascade', function(req, res) {
    res.render('cascade/me');
});

app.get('/partial', function(req, res) {
    res.render('partial/index');
});

app.get('/helper', function(req, res) {

    // helper as a property
    engine.helper.myHelperProperty = 'Hello from server property helper';

    // helper as a method
    engine.helper.myHelperMethod = function(param) {
        return 'Hello from server method helper (parameter: ' + param + ', server model: ' + this.model.fromServer + ')';
    }

    res.render('helper/index', { fromServer: 'Hello from server', });
});


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});