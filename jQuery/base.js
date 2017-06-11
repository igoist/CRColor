require(['./objs'], function(objs) {
  /*
  * 创建一个 style， 返回其 stylesheet 对象
  * 注意：IE6/7/8中使用 style.stylesheet，其它浏览器 style.sheet
  */
  // function createStyleSheet() {
  //   var head = document.head || document.getElementsByTagName('head')[0];
  //   var style = document.createElement('style');
  //   style.type = 'text/css';
  //   head.appendChild(style);
  //   return style.sheet || style.styleSheet;
  // }
  function createStyleSheet() {
    var head = document.head || $('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    return style.sheet || style.styleSheet;
  }

  // /*
  // * 动态添加 CSS 样式
  // * @param selector {string} 选择器
  // * @param rules    {string} CSS样式规则
  // * @param index    {number} 插入规则的位置, 靠后的规则会覆盖靠前的
  // */
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

  // // {/*<div class="item">
  // //   <div class="popover popover-hidden">
  // //     <div class="popover-arrow"></div>
  // //     <div class="popover-inner"><strong>hex</strong>: #cfc</div>
  // //   </div>
  // // </div>*/}
  var fragment = document.createDocumentFragment();
  var tmp;
  for (let i = 0; i < colors.length; i++) {
    tmp = $('<div class="item" style="background: #' + colors[i].hex + '"><div class="popover popover-hidden"><div class="popover-arrow"></div><div class="popover-inner"><strong>hex</strong>: #' + colors[i].hex + '</div></div></div>');
    // console.log(tmp[0]);
    // document.body.appendChild(tmp1[0]);
    fragment.appendChild(tmp[0]);
  }

  var box = $('.box')[0];
  box.innerHTML = '';
  box.append(fragment);

  var items = $('.item');
  var popovers = $('.popover');
  var delay = 210;

  const w = (items[0].offsetWidth - popovers[0].offsetWidth) / 2;
  addCssRule('.popover', 'left: ' + w + 'px', 0);

  var bindClickEvent = function(item, p) {
    item.addEventListener('click', function() {
      if ((' ' + item.className + ' ').indexOf('popover-hidden') > -1) {
        // p.classList.toggle('zoom-big-enter');
        // p.classList.toggle('zoom-big-enter-active');
        // p.classList.toggle('popover-hidden');
        console.log(p.toggleClass);
        p.toggleClass('zoom-big-enter');
        p.toggleClass('zoom-big-enter-active');
        p.toggleClass('popover-hidden');
        setTimeout(function() {
          // p.classList.toggle('zoom-big-enter');
          // p.classList.toggle('zoom-big-enter-active');
          p.toggleClass('zoom-big-enter');
          p.toggleClass('zoom-big-enter-active');
        }, delay);
      } else {
        p.classList.toggle('zoom-big-leave');
        p.classList.toggle('zoom-big-leave-active');
        // p.toggleClass('zoom-big-leave');
        // p.toggleClass('zoom-big-leave-active');
        setTimeout(function() {
          p.classList.toggle('zoom-big-leave');
          p.classList.toggle('zoom-big-leave-active');
          p.classList.toggle('popover-hidden');
          // p.toggleClass('zoom-big-leave');
          // p.toggleClass('zoom-big-leave-active');
          // p.toggleClass('popover-hidden');
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

  var btnMT = $('#btn-mt');
  var btnMR = $('#btn-mr');
  var btnW = $('#btn-w');
  var btnH = $('#btn-h');
  var btnSmall = $('#btn-small');
  var btnBig = $('#btn-big');
  // var btnHide = $('#btn-hide');
  var wrap = $('.wrap'); // can't use toggleClass with $('.wrap')[0]

  btnMT.click(function() {
    wrap.toggleClass('no-mt');
  });
  btnMR.click(function() {
    wrap.toggleClass('no-mr');
  });
  btnW.click(function() {
    wrap.toggleClass('wider');
  });
  btnH.click(function() {
    wrap.toggleClass('higher');
  });
  btnSmall.click(function() {
    wrap.toggleClass('smaller');
    // console.log(items[0].offsetWidth);
    // console.log(popovers[0].offsetWidth);
  });
  btnBig.click(function() {
    wrap.toggleClass('bigger');
  })
  // var ota = function(i) {
  //   setTimeout((function(j) {
  //     popovers[j].classList.toggle('popover-hidden');
  //     console.log(j * 100);
  //   }(i)), i * delay);
  // }
  // btnHide.addEventListener('click', function() {
  //   for(var i = 0; i < popovers.length; i++) {
  //     ota(i);
  //   }
  // });
});


