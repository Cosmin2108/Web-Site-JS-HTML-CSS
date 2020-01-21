// const http = require('http');
const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();

const hostname = '127.0.0.1';
const port = 7000;

app.use(express.static(__dirname + '/public')); /// JS, CSS and images need to be placed in public dir

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/formation', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/formation.html'));
})

app.get('/evolution', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/evolutin.html'));
})

app.get('/galery', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/galery.html'));
})

app.get('/q_phenomenon', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/q_phenomenon.html'));
})

app.get('/explosion', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/explosion.html'));
})

app.get('/big_bang', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/big_bang.html'));
})


app.get('/feedback', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/feedback.html'));
})

var server = app.listen(port, hostname, function() {
  console.log('Server running at http://%s:%s/', hostname, port);
});

// var fs = require('fs');

// fs.readFile('test.json',function (err, data) {
//     if (err) throw err;
//     var json=JSON.parse(data); //transformare din string JSON intr-un array JavaScript
//     fs.writeFileSync('test.html','<html><body>');
//     console.log(json);
//     fs.appendFileSync('test.html','<p>' + json['cosmin'].age + '</p>');
    
//     fs.appendFileSync('test.html','</html></body>');
//     console.log('Operatie completa.');
// }); 

