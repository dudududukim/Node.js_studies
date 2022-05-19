var http = require('http');
var fs =require('fs');
var counter =0;

function writeNumbers(res){
    
    for(var i=0; i<100; i++){
        counter++;
        res.write(counter.toString()+'\n');
    }
}

http.createServer(function(req, res){

    var query = require('url').parse(req.url).query;
    //주소를 http://localhost:8080/?file=main로하면 ?뒤에어 .query에서 가져오는 부분
    var app = require('querystring').parse(query).file + '.txt';
    //The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.
    //그래서 file key에 있는 value를 리턴
    res.writeHead(200, {'content-type': 'text/plain'});

    writeNumbers(res);
    setTimeout(function(){
        console.log('opening ' + app);
        fs.readFile(app, 'utf8', function(err, data){
            if(err)
                res.write('Could not find or open file for reading\n');
            else
                res.write(data);
            res.end();
        });
    }, 2000);
    
}).listen(8080);

console.log('Server running on 8080/n');