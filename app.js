
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , _ = require('underscore')
  , config = require('./config').global
  , loadurl = require('./config/loadurl');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'components')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req,res){
    res.render('index');
});
app.get('/api/search/:name', function(req,res){

    var api = config.api[req.params.name] || "";


    if(!api) {
        res.send(404);
        return;
    }

    req.query.q = encodeURIComponent(req.query.q);
    req.query.page = req.query.page || "1";

    var url = _.template(config.api[req.params.name], req.query);
    console.log('API:', url);

    loadurl.call( url , function(body){
        res.set('Content-Type', 'text/json');
        res.send(body);
    });

});


http.createServer(app).listen(app.get('port'), function(){
    console.log('express server listening on port ' + app.get('port'));
});
