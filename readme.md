# 获取文件中的所有链接

## install
```sh
npm install get-links
```

## usage
```js
var getLinks = require('get-links')
var src = `
<img src="/test.png">
<a href="/index.html">test</a>
<link href="../test.css">
<script src="test.js"></script>
`
var links = getLinks.html(src, 'http://www.test.com/test/index.html')
console.log(links)

/* 将输出
[ 'http://www.test.com/test.png',
  'http://www.test.com/index.html',
  'http://www.test.com/test.css',
  'http://www.test.com/test/test.js' ]
*/
```
## api
* get-links.html(html, baseUrl)
  - @param {string} html html内容
  - @param {string} baseUrl 网址
  - @return {array} 所有的链接地址（去重后的）
