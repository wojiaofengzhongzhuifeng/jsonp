const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  const params = qs.parse(query)

  if(pathname === '/api/user'){
    let mockData = {
      name: 'datafromserver-raojiajun',
      id: params.id
    }
    res.end(JSON.stringify(mockData))
  }
})

server.listen(10010, () => console.log('Done'))
