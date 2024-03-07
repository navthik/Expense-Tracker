const http = require('http')
const fs = require('fs')

http.createServer(function(request,response){
    const file = fs.readFileSync('./index.html')
    response.write(file)
    response.end()

}).listen(4000)
console.log('listening on port 4000.......')