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
    // 如果存在 callback pramas 说明需要使用 JSONP 获取数据,后端应该拼接 test1223321({name: 'datafromserver-raojiajun', id: 123321}) 字符串
    if(params.callback){
      let resData = `${params.callback}(${JSON.stringify(mockData)})`
      res.end(resData)
    } else {
      res.end(JSON.stringify(mockData))
    }

  }
})

server.listen(10010, () => console.log('Done'))
