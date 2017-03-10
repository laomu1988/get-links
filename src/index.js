/**
 * 获取文件内容中的所有连接
 *
 * */
const Url = require('url')
const cheerio = require('cheerio') // cherrio是用jquery的语法来解析html
function getHTMLLinks (html, baseUrl) {
  try {
    var $ = cheerio.load(html)
    var attrs = ['href', 'src', 'data-original']
    var list = Array.prototype.slice.call($('[href],[src]'))
    var links = []
    list.forEach(function (dom) {
      var domAttrs = dom.attribs
      attrs.forEach(function (attr) {
        if (domAttrs[attr]) {
          links.push(Url.resolve(baseUrl, domAttrs[attr]))
        }
      })
    })
    return arrUnique(links.filter(isRealLink))
  } catch (e) {
    throw e
  }
}
module.exports = {
  html: getHTMLLinks
}

// 是否是指向某个文件的链接
function isRealLink (link) {
  if (!link || link[0] === '#' || link.indexOf('javascript:') === 0 || link.indexOf('void') === 0 || link.indexOf('data:') === 0) return false
  return true
}

// 过滤数组重复项
function arrUnique (arr) {
  var n = {}
  var arr2 = []
  for (var i = arr.length - 1; i >= 0; i--) {
    if (!n[arr[i]]) {
      n[arr[i]] = true
      arr2.unshift(arr[i])
    }
  }
  return arr2
}
