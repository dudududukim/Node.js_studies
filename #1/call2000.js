var http = require('http');

//The url we want, plus the path and options we need
var options = {
   host: 'localhost',
   port: 8080,
   path: '/?file=secondary',
   method: 'GET'
};

var processPublicTimeline = function(response) {
   // finished? ok, write the data to a file
   console.log('finished request');
};

for (var i = 0; i < 2000; i++) {
   // make the request, and then end it, to close the connection
   http.request(options, processPublicTimeline).end();
}

//결론이 이거 실행한 상태에서 file=main으로 요청을 보내면 둘이 같이 처리된다는거
//console에 secondary.txt하다가 중간에 main.txt껴있음
//단일스레드 비동기는 시작을 각각 시키고 한길로 다 실행되다가 먼저 끝나는 놈의 이벤트를 캐치해서 바로 실행함