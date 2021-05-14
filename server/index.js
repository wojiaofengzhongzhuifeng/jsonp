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
    // 后端已经定义了 params 的字段必须为 callback, 前端需要问后端 callback
    if(params.callback){
      let resData = `${params.callback}(${JSON.stringify(mockData)})`
      res.end(resData)
    } else {
      res.end(JSON.stringify(mockData))
    }

  }
})

server.listen(10010, () => console.log('Done'))
