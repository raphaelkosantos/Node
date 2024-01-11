
const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)


console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parseUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produto'))

