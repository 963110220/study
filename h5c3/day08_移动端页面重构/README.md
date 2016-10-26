[TOC]
#day08移动端页面重构与交互


###页面重构

####viewport
>移动设备上的viewport就是设备的屏幕上能用来显示我们的网页的那一块区域
css中的1px并不等于设备的1px

各大手机的viewport大小
![View Port](img/viewport.png "各大手机viewport大小")

* layout viewport
以上图片显示的尺寸就是**layout viewport**，在js中可以通过document.documentElement.clientWidth
* visual viewport
layout viewport 的宽度是大于浏览器可视区域的宽度的，所以我们还需要一个viewport来代表 浏览器可视区域的大小，这个viewport叫做**visual viewport**。在js中可以通过window.innerWidth来获取
* ideal viewport
一个能完美适配移动设备的viewport，ideal viewport宽度等于移动设备的屏幕宽度
* meta标签属性
利用以下属性对viewport进行控制, 可多个同时使用，并用逗号隔开
    - width 设置layout viewport  的宽度，为一个正整数，或字符串"width-device"
    - initial-scale 设置页面的初始缩放值，为一个数字，可以带小数
    - minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数
    - maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数
    - user-scalable 是否允许用户进行缩放，值为"no"或"yes",no代表不允许，yes代表允许
    - height    设置layout viewport  的高度，这个属性对我们并不重要，很少使用


####单位
* px/百分比
* em
相对单位，基于自身字体大小font-size来计算，所以不同的元素1em代表的具体大小可能不同（部分浏览器默认字体是16px）。
* rem
相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持
* vw
viewpoint width，视窗宽度，1vw等于视窗宽度的1%
* vh
viewpoint height，视窗高度，1vh等于视窗高度的1%。
* vmin：取vw和vh中较小的那个。
* vmax：取vw和vh中较大的那个。

>使用vw/vh/vmin/vmax，需设置meta缩放比1:1
IE9+局部支持，chrome/firefox/safari/opera支持，ios safari 8+支持，android browser4.4+支持，chrome for android39支持

####移动web特别样式处理
* reset css
* 1px border
* 高清图片


###页面交互

####事件
* click
click事件在移动端会有200~300ms的延迟（为什么？），所以请用tap代替click作为点击事件
* tap
tap为模拟事件，zepto、jqueryMoblie、mui等插件封装了此事件
* touch，原生js事件，包含一下几种事件
    - touchstart  当手指触摸到屏幕会触发，即使已经有一个手指放在屏幕上也会触发。
    - touchmove  当手指在屏幕上移动时，会触发，在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
    - touchend 当手指离开屏幕时，会触发
    - touchcancel 当你的手指还没有离开屏幕，突然有系统级的操作发生，这时就会触发touchcancel事件
* touch事件中的event对象属性
    - touches：表示当前跟踪的触摸操作的touch对象的数组。
    - targetTouches：特定于事件目标的Touch对象的数组。
    - changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
    - 每个Touch对象包含的属性如下。
        + clientX：触摸目标在视口中的x坐标。
        + clientY：触摸目标在视口中的y坐标。
        + identifier：标识触摸的唯一ID。
        + pageX：触摸目标在页面中的x坐标。
        + pageY：触摸目标在页面中的y坐标。
        + screenX：触摸目标在屏幕中的x坐标。
        + screenY：触摸目标在屏幕中的y坐标。
        + target：触目的DOM节点目标。


###ECMAScript5(ES5)


####ES5的严格模式
>ES5还引入了一个语法的严格变种，它与常规JavaScript的语义不同，被称为”严格模式(strict mode)”，目前，除了IE6-9，其它浏览器均已支持ES5严格模式。

* 使用
>在头部写入 "use strict"
    - 全局：针对整个js文件
    将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行
    - 局部：针对单个函数
    将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。

* 执行限制
    - 不使用var声明变量严格模式中将不通过
    - 禁用使用with语句
    - 删除系统内置的属性会报错
    - delete不可删除属性的对象时报错，如：
        + var声明的全局变量（会自动称为window的属性）
        + 设置了isSealed或isFrozen的属性
    - 对象有重名的属性将报错
    - 函数有重名的参数将报错
    - arguments严格定义为参数
        + 不允许对arguments赋值
        + 禁止使用arguments.callee
    - 函数必须声明在顶层，不能写在条件判断语句或for循环语句中

####JSON对象方法
* JSON.parse()
* JSON.stringify()

####Array新增方法

**索引方法**
>区别就是一个从前往后找，一个从后往前找

* indexOf/lastIndexOf(keyword [,startIndex])
    - keyword: 要查找的项，
    - startIndex：查找起点位置的索引，该参数可选

**迭代方法**

* forEach(fn)
遍历方法，for循环没有太大差别，比for循环方便
* every(fn)
如果该函数对每一项都返回 true，则返回true
* some(fn)
如果该函数对任何一项返回 true，则返回true
* map(fn)
返回每次函数调用的结果组成的数组
* filter(fn)
返回该函数会返回 true 的项组成的数组，利用这个方法可对数组元素进行过滤筛选

>以上方法都对数组中的每一项运行给定函数fn,，函数中有三个形参分别为
item：数组中的每一项,
index：遍历过程中对应的索引值,
array：对数组的引用


**归并方法**
>这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。

* reduce(fn,initVal)
* reduceRight(fn,initVal)

* fn(prev,cur,index,array): fn是每一项调用的函数，函数接受4个参数分别是
    - prev：初始值，
    - cur：当前值，
    - index：索引值，
    - array：当前数组，
    函数需要返回一个值，这个值会在下一次迭代中作为初始值
* initVal: 迭代初始值（可选），如果缺省，初始值为数组第一项


