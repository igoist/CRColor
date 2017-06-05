/*
 * 创建一个 style， 返回其 stylesheet 对象
 * 注意：IE6/7/8中使用 style.stylesheet，其它浏览器 style.sheet
 */
function createStyleSheet() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  return style.sheet ||style.styleSheet;
}

/*
 * 动态添加 CSS 样式
 * @param selector {string} 选择器
 * @param rules    {string} CSS样式规则
 * @param index    {number} 插入规则的位置, 靠后的规则会覆盖靠前的
 */
function addCssRule(selector, rules, index) {
  var sheet = createStyleSheet();
  index = index || 0;
  // chrome detection
  if (sheet.insertRule) { 
    sheet.insertRule(selector + '{' + rules + '}', index); 
  } else if (sheet.addRule) { 
    sheet.addRule(selector, rules, index); 
  }
}

var items = document.querySelectorAll('.item');
var popovers = document.querySelectorAll('.popover');
var delay = 210;

const w = (items[0].offsetWidth - popovers[0].offsetWidth) / 2;
addCssRule('.popover', 'left: ' + w + 'px', 0);

for(var i = 0; i < 1; i++) {
  var item = items[i];
  // console.log(item.offsetWidth);
  var p = popovers[i];
  // console.log(p.offsetWidth);
  // var w = (item.offsetWidth - p.offsetWidth) / 2;
  item.addEventListener('click', function() {
    // console.log('click');
    if ((' ' + item.className + ' ').indexOf('popover-hidden') > -1) {
      p.classList.toggle('zoom-big-enter');
      p.classList.toggle('zoom-big-enter-active');
      p.classList.toggle('popover-hidden');
      setTimeout(function() {
        p.classList.toggle('zoom-big-enter');
        p.classList.toggle('zoom-big-enter-active');
      }, delay);

    } else {
      p.classList.toggle('zoom-big-leave');
      p.classList.toggle('zoom-big-leave-active');
      setTimeout(function() {
        p.classList.toggle('zoom-big-leave');
        p.classList.toggle('zoom-big-leave-active');
        p.classList.toggle('popover-hidden');
      }, delay);
    }
  });
}