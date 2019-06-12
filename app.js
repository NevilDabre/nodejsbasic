var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://dbuser:dbuser123@ds235947.mlab.com:35947/nodejsbasic';

mongoose.connect(url, { useNewUrlParser: true })



const app = express();
var routes = require('./server/routes')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.post('/abc/:id', function(req,res,next){


    res.send('Hello from server'+ req.params.id);
})

app.use('/emp', routes);

app.listen(3000,function(){
    console.log('Server started');
})

