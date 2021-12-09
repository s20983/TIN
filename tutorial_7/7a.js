// Write a simple HTTP server that will:
//1. accept requests for different mathematical operations (add, sub, mul, div) under different URLs
//2. extract parameter values from the request parameters 
//3. and returns result in form of HTML response containing the request parameters and result (formatting is up to you). 
//4. Make sure to handle situations in which the parameters are incorrect (missing or wrong type). 
//You can use https://nodejs.org/api/http.html as reference for the http module.

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var q = url.parse(request.url, true).query;
    var num1 = q.number1;
    var num2 = q.number2;
    response.writeHead(200, {'Content-Type': 'text/html'});

    if(isNaN(num1) || isNaN(num2)) {
        response.end("Error.");
    } else {
        switch (request.url) {
            case "/add":
                response.end(num1 + "+" + num2 + "=" + (num1+num2));
                break;
            case "/sub":
                response.end(num1 + "-" + num2 + "=" + (num1-num2));
                break;
            case "/mul":
                response.end(num1 + "*" + num2 + "=" + (num1*num2));
                break;
            case "/div":
                if(num2==0) {
                    response.end("You cannot divide by 0.");
                } else {
                    response.end(num1 + "/" + num2 + "=" + (num1/num2));
                }
                break;
            default:
                response.end("Operation not supported.");
                break;
        }
    }
}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');