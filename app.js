//http 모듈 로드
var http = require('http');

//http 서버를 생성
http.createServer(function(req, res){
    //컨텐츠 헤더
    res.writeHead(200, {'content-type': 'text/plain'});
    //메세지를 쓰고 통신이 완료되었다는 신호를 보냄
    res.end("Hellow, World\n");
}).listen(8124);

console.log('Server running on 8124');