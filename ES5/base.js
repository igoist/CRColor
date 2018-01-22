require(['../js/objs', '../js/ctrl.js'], function(objs) {
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

  // {/*<div class="item">
  //   <div class="popover popover-hidden">
  //     <div class="popover-arrow"></div>
  //     <div class="popover-inner"><strong>hex</strong>: #cfc</div>
  //   </div>
  // </div>*/}
  var fragment = document.createDocumentFragment();
  var tmp, tmp1, tmp2, tmp3, tmp4;
  for (let i = 0; i < colors.length; i++) {
    tmp4 = document.createElement('strong');
    tmp4.appendChild(document.createTextNode('hex'));

    tmp3 = document.createElement('div');
    tmp3.classList.add('popover-inner');
    tmp3.appendChild(tmp4);
    tmp3.appendChild(document.createTextNode(': #' + colors[i].hex));

    tmp2 = document.createElement('div');
    tmp2.classList.add('popover-arrow');

    tmp1 = document.createElement('div');
    tmp1.classList.add('popover');
    tmp1.classList.add('popover-hidden');
    tmp1.appendChild(tmp2);
    tmp1.appendChild(tmp3);

    tmp = document.createElement('div');
    tmp.classList.add('item');
    tmp.style.background = '#' + colors[i].hex;
    tmp.appendChild(tmp1);
    fragment.appendChild(tmp);
  }

  var box = document.querySelector('.box');
  box.innerHTML = '';
  box.appendChild(fragment);


  var items = document.querySelectorAll('.item');
  var popovers = document.querySelectorAll('.popover');
  var delay = 210;

  const w = (items[0].offsetWidth - popovers[0].offsetWidth) / 2;
  addCssRule('.popover', 'left: ' + w + 'px', 0);

  var bindClickEvent = function(item, p) {
      item.addEventListener('click', function() {
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
    };

  for(var i = 0; i < colors.length; i++) {
    var item = (function(i) {
      return items[i];
    }(i));
    var p = item.children[0];

    bindClickEvent(item, p);
  }

  var btnMT = document.getElementById('btn-mt');
  var btnMR = document.getElementById('btn-mr');
  var btnW = document.getElementById('btn-w');
  var btnH = document.getElementById('btn-h');
  var btnSmall = document.getElementById('btn-small');
  var btnBig = document.getElementById('btn-big');
  var btnHide = document.getElementById('btn-hide');
  var wrap = document.querySelector('.wrap');

  btnMT.addEventListener('click', function() {
    wrap.classList.toggle('no-mt');
  });
  btnMR.addEventListener('click', function() {
    wrap.classList.toggle('no-mr');
  });
  btnW.addEventListener('click', function() {
    wrap.classList.toggle('wider');
  });
  btnH.addEventListener('click', function() {
    wrap.classList.toggle('higher');
  });
  btnSmall.addEventListener('click', function() {
    wrap.classList.toggle('smaller');
    console.log((items[0].offsetWidth - popovers[0].offsetWidth) / 2.0);
  });
  btnBig.addEventListener('click', function() {
    wrap.classList.toggle('bigger');
  });
  var ota = function(i) {
    setTimeout((function(j) {
      popovers[j].classList.toggle('popover-hidden');
      console.log(j * 100);
    }(i)), i * delay);
  }
  btnHide.addEventListener('click', function() {
    for(var i = 0; i < popovers.length; i++) {
      ota(i);
    }
  });

});


