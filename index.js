var express = require('express');
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function (req, res) {
   res.send('Hello World');
})


