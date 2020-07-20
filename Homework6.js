console.log('our express app will go here')

var express = require('express');
var app = express();

// "/" => 'Hi There!'
app.get("/", function(req,res) {
	res.send("yeeeowwwww");
});

app.get('/bye', function(req,res) {
	res.send('Goodbye!')
});

app.listen(3000,function() {console.log('Listening at port 3000');});