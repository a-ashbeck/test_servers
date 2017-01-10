var http = require('http');

var PORTONE = 7000;
var PORTTWO = 7500;

var serverOne = http.createServer(function(request, response) {
	response.end('It works! You are awesome! Path hit: ' + request.url);
});

var serverTwo = http.createServer(function(request, response) {
	response.end('It works! You suck! Path hit: ' + request.url);
});

serverOne.listen(7000, function() {
	console.log('YOU ARE AWESOME!', PORTONE)
});

serverTwo.listen(7500, function() {
	console.log('YOU SUCK!', PORTTWO)
});
