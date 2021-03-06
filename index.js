var express = require('express');
var app = express();
app.enable('trust proxy');

app.use(express.static('public'));

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.set('view engine','jade');
app.set('views', './views');

app.get('/', function (req, res) {
   res.render('index');
});


app.get('/api/whoami', function(req, res) {
	res.contentType('application/json');
	
	var info = {
		"IP-address": req.ip,
		"Lang": req.headers["accept-language"],
		"Operating System": req.headers["user-agent"]
	}
	
	var infoJSON = JSON.stringify(info, null, '\t');
	res.send(infoJSON);
});


