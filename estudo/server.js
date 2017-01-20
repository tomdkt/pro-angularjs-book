var connect = require('connect');

connect.createServer(
connect.static(__dirname + "/angularjs")
 
).listen(5000);
