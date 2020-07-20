var express = require('express');
var app = express();

app.set("view engine", "ejs")

app.get('/', function(req,res){ 
	res.render('geth1');
	var parameters = req.params;
	console.log(parameters);
	
});

app.post('/', function(req,res){
	res.render('posth1');
	
});

app.listen(3000,function() {console.log('Listening at port 3000');});