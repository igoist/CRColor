# Color
<p>兴致使然，选取 Color 而非 Todos 作为第一个重构 demo</p>
<p>主要内容描述：</p>
<p>将作为未来 SPA 中 Color 模块内容，方便颜色选择识取</p>
<p>颜色信息需要于各层目录（本层不能够及时刷新，原因未知）创建一个 objs.js ，在其中填入色彩信息对象 Array，具体见其中注释</p>
<p>都以 require的 方式来获取</p>
<p>屏幕宽度在一定范围内时为固定宽高</p>
<p>在平板与 iPhone 范围内做比例调整</p>

主要功能如下：
* 单个颜色方块<code>hover</code>（光标离开前）或<code>click</code>（停留）显色颜色信息（考虑颜色信息进制转换），可根据上下按钮调整 rgb 进制
* 会放置相应按钮，切换显示方式（flex布局，栅格占比变化）

<p>会在各个子目录 README 中记录任务 task 与相应完成进度</p>
<p>ES5 中基础内容已在，可以开始重构</p>