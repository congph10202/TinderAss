//  var http = require('http');
//  var fs = require('fs');
//
// http.createServer(function (request, response){
//     response.writeHead('200',{'Content-Type':'text/html'});
//
//     fs.readFile('index.html',function (error,data){
//         if(error != null){
//                 response.end(error);
//         }else {
//             response.write(data);
//             response.end();
//         }
//     })
// }).listen((process.env.PORT));

var express = require('express');
var expressHBS = require('express-handlebars');

var app =express();
app.listen(process.env.PORT);
app.use(express.static('css_new'));

app.engine('.handlebars', expressHBS());

app.set('view engine','.handlebars');

app.get('/home', function (req,res){
   res.render('index'); //file name
});
app.get('/signup', function (req,res){
   res.render('signup'); //file name
});
app.get('/signin', function (req,res){
   res.render('signin'); //file name
});