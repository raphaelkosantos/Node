const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {

res.statusCode = 200
res.setHeader('Contenty-type', 'text/html')
res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')

})

server.listen(port, () => {

    console.log('servidor rodando na porta: ${port}')
})