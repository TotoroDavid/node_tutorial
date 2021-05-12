const http = require('http');

//  const server = http.createServer((req, res)=>{
//    res.end('wellcome')
//  })

//using event emmiter API
const server = http.createServer()
    // emits request event 
    // subscribe to it / listen for it / request to it 
server.on('request', (req, res) => {
    res.end('helloWorld')
})
server.listen(5000)