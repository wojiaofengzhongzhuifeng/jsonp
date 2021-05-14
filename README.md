# JSONP

## 如何使用 JSONP ?

- 后端在原本接口的基础上`/api/user?id=123321`, 允许新增一个 params (callback12333333=fjdkalsjfdsa), 即可以通过 `/api/user?id=123321&callback12333333=fjdkalsjfdsa` 调用 api

- 前端先全局定义函数, 然后生成 script `<script src="http://localhost:10010/api/user?id=123321&callback12333333=fjdkalsjfdsa"></script>` 将 script 拼接到页面中, 

    ```javascript
    window.fjdkalsjfdsa = function (data){
      console.log('前端获取到的数据', data);
    }
    ```
  
- 核心
    
    后端需要把 callback12333333 这个 params 字段告知前端,前端使用 callback12333333 + 原本 api 进行调用
