
/**
 * Module dependencies.
 */

var express = require('express')
  , cons = require('consolidate')
  , router = require('./routerules.js')
  , hbsHelper = require('./helpers/hbsHelpers.js')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');



var app = express();



app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.engine('hbs', cons.handlebars);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

hbsHelper.setupHelpers();
router.configure(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
