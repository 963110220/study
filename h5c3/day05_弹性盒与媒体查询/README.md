[TOC]
#CSS3弹性盒与媒体查询

###弹性盒flex-box

####概述
Flexbox从本质上就是一个盒模型（Box-model）的延伸，用来实现更复杂的版面布局。它能让我们的实现响应式布局更加优雅
设置容器为弹性盒，需加上css属性：
```
.box{display: flex;}
```
>PS：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

![弹性盒子](img/flexbox_axis.png "Flexible boxes弹性盒子")
**参照上图，弹性盒子按照宽和高分出了以下 8 点：**
1. 水平的主轴: main axis
2. 垂直的纵轴:cross axis
3. 纵轴的开始位置和边框的交点: cross start
4. 纵轴的结束位置和边框的交点: cross end
5. 主轴的开始位置和边框的交点: main start
6. 主轴的结束位置和边框的交点: main end
7. 单个项目占据主轴的空间距离: main axis
8. 单个项目占据纵轴的空间距离: cross axis

####应用在容器上的属性
* flex-direction
决定主轴的方向（即项目的排列方向）
    - row（默认）    主轴为水平方向，起点在左端。
    - row-reverse 主轴为水平方向，起点在右端。
    - column  主轴为垂直方向，起点在上沿。
    - column-reverse  主轴为垂直方向，起点在下沿。
* flex-wrap
项目都排在一条线（轴线）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
    - nowrap（默认）：不换行。
    - wrap：换行，第一行在上方。 
    - wrap-reverse：换行，第一行在下方
* flex-flow
是flex-direction和flex-wrap属性的简写形式，默认值为row nowrap。
* justify-content
定义了项目在主轴上的对齐方式。
    - flex-start（默认） 左对齐
    - flex-end    右对齐
    - center  居中
    - space-between   两端对齐，项目之间的间隔都相等。
    - space-around    每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
* align-items
定义项目在交叉轴上如何对齐
    - flex-start  交叉轴的起点对齐。
    - flex-end    交叉轴的终点对齐。
    - center  交叉轴的中点对齐。
    - baseline    项目的第一行文字的基线对齐。
    - stretch（默认）    如果项目未设置高度或设为auto，将占满整个容器的高度。
* align-content
定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    - flex-start  与交叉轴的起点对齐。
    - flex-end    与交叉轴的终点对齐。
    - center  与交叉轴的中点对齐。
    - space-between   与交叉轴两端对齐，轴线之间的间隔平均分布。
    - space-around     每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    - stretch（默认值）    轴线占满整个交叉轴。

####应用在项目上的属性
* order: integer
定义项目的排列顺序，属性值为整数（默认0）。数值越小，排列越靠前。
* flex-grow: number
定义项目的放大比例，如果项目没占满容器（存在剩余空间）按比例分配剩余空间。默认为0，即如果存在剩余空间，也不放大
* flex-shrink: number
定义了项目的缩小比例（与flex-grow相反），默认为1，即如果空间不足，该项目将缩小
* flex-basis
定义了在分配多余空间之前，项目占据的主轴空间（main size），可以理解为我们给子元素设置的宽度。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
* flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```
.item {
  flex: none || auto || <flex-grow> <flex-shrink> <flex-basis>
}
```
>PS：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
该属性有两个快捷值：auto(1 1 auto) 和 none(0 0 auto)。

* align-self
允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性
>所有属性跟容器的align-items相同


####其他相关属性
* box-sizing
    - content-box： padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和( Element width = width + border + padding ) 
    `此属性表现为标准模式下的盒模型。` 
    - border-box： padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width ) 
    `此属性表现为怪异模式下的盒模型。`



###媒体查询media query

>将已有的开发技巧（弹性盒、弹性图片、媒体查询等）整合起来，命名为**“响应式布局”**，所谓响应式布局，是一种针对任意设备对网页内容进行“完美”布局的一种显示机制。
简言之，是一个网站能够兼容多个终端的布局。

####优势：
1. 多终端视觉和操作体验非常风格统一
2. 兼容当前及未来新设备
3. 响应式web设计中的大部分技术可以用在WebApp开发中
4. 节约了开发成本，维护成本也降低很多

####不足：
1. 兼容性：低版本浏览器兼容性有问题
2. 移动带宽流量：相比较手机定制网站，流量稍大，
3. 但比较加载一个完整pc端网站显然是小得多
4. 代码累赘，会出现隐藏无用的元素，加载时间加长
5. 兼容各种设备工作量大

####如何使用
1. 外联CSS语法
```
<link rel="stylesheet" href="wide.css" media="screen and (min-width:1024px)" />
<link rel="stylesheet" href="mobile.css" media="screen and (max-width:320px)" />
```

2. 内嵌样式的语法
```
<style>
    @media all(screen) and (min-width:500px) { … }
    @media (orientation: portrait) { … }
</style>
```
>媒体介质类型
* all      所有设备
* screen        电脑显示器
* print     打印用纸或打印预览视图
* handheld  便携设备

####媒体查询语句
* 一个 Media Query 包含一种媒体类型，如果媒体类型没有指定，那么就是默认类型all
```
@media (max-width: 600px){...}
```

* 可以使用 and 表示同时满足这两者时生效，达到限定范围
```
@media handheld and (min-width:20em) and (max-width:50em){...}
```

* 逗号 , 被用来表示 并列 和 或者
```
@ handheld and (max-width:20em), screen and (max-width:30em){...}
```

* 排除符合表达式的设备
```
@media not screen and (color){...}
```


####设备特性(media feature)
* width/height 定义输出设备中的页面可见区域宽度/高度
* device-width/device-heigh  定义输出设备的屏幕可见宽度/高度
* orientation定义'height'是否大于或等于'width'。
    - portrait：是（竖屏），
    - landscape：否（横屏）
* aspect-ratio  定义'width'与'height'的比率
* device-aspect-ratio   定义'device-width'与'device-height'的比率。
如常见的显示器比率：4/3, 16/9, 16/10
* color 定义每一组输出设备的彩色原件个数。如果不是彩色设备，则值等于0
* color-index   定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0
* monochrome    定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0
* resolution    定义设备的分辨率。如：96dpi, 300dpi, 118dpcm
* scan  定义电视类设备的扫描工序
* grid  用来查询输出设备是否使用栅格或点阵。只有1和0才是有效值，1代表是，0代表否