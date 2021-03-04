
var baseSize = 37.5
// 设置 rem 函数
function setRem() {
  var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  var htmlHeight = document.documentElement.clientHeight || document.body.clientHeight
  // 375px = 10rem ;每个元素的px基础上/37.5
  var scale =  Math.min(htmlWidth, htmlHeight) / 375
  //得到html的Dom元素
  var htmlDom = document.getElementsByTagName('html')[0]
  //设置根元素字体大小
  htmlDom.style.fontSize = (baseSize * Math.min(scale, 1.5)) + 'px'
  var htmlFontSize = htmlDom.style.fontSize.replace(/px/gi, '')
  var computedFontSize = getComputedStyle(htmlDom)['font-size'].replace(/px/gi, '')
  htmlDom.style.fontSize = htmlFontSize * htmlFontSize / computedFontSize + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', setRem)
// window.addEventListener('hashchange', setRem)
