var getLinks = require('../src/index')
var src = `
<img src="/test.png">
<a href="/index.html">test</a>
<link href="../test.css">
<script src="test.js"></script>
`
var links = getLinks.html(src, 'http://www.test.com/test/index.html')
console.log(links)
