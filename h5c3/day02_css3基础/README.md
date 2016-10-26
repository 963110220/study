[TOC]
#CSS3基础
>
CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的，是最新的 CSS 标准。
CSS3 完全向后兼容，因此您不必改变现有的设计。浏览器通常支持 CSS2。

###CSS3 选择器
>选择器是css3中的一个重要内容。使用它可以大幅度提高开发人员书写或修改样式表时的工作效率

####1. 回顾CSS2中的选择器
* 标签选择器，id选择器，类选择器，通用选择器
* 后代选择器，子选择器，群组选择器

####2. CSS3新增选择器
* 属性选择器
    - [属性名]
    示例: [data-index]{...} 匹配包含data-index属性的所有元素;
    - [属性名=属性值]
    示例: [data-index="110"]{...} 匹配data-index属性等于10的元素;
    - [属性名^=字符]
    示例: [data-index^="10"]{...} 匹配data-index属性以10开头的元素;
    - [属性名$=字符]
    示例: [data-index$="10"]{...} 匹配data-index属性以10结尾的元素;
    - [属性名\*=字符]
    示例: [data-index*="10"]{...} 匹配data-index属性包含10的元素;
* +: 相邻兄弟选择器
    相邻兄弟选择器可以选择紧接在另一元素后的元素，而且他们具有一个相同的父元素，E F两元素具有一个相同的父元素，而且Ｆ元素在Ｅ元素后面，而且相邻
    ```
    div+p{color: red;}
    <div>hello1</div>
    <p>world</p>
    <p>world2</p>
    ```
* ~: 通用兄弟选择器
    ```
    div~p{color: red;}
    <div>hello1</div>
    <p>world</p>
    <p>world2</p>
    ```

####3. 伪类选择器
>css 伪类用于向某些选择器添加特殊的效果。css伪元素用于将特殊的效果添加到某些选择器。
是在css中已经定义好的选择器，不能随便修改

* CSS2中的伪类
:link,:visited,:hover,:active(注意顺序)

* 结构性伪类选择器：可以基于元素在标记中的位置进行定位
    - :root、
    匹配E元素在文档的根元素。在HTML中，根元素永远是HTML 
    - :not (n)、
    如果相对某个结构元素使用样式，但是想排除这个结构元素下面的子结构元素，让它不使用整个样式时，可以使用not选择器
    - :empty、
    使用该选择器来制定当元素内容为空白时使用的样式
    - :target
    使用该选择器来对页面中的某个target元素（该元素的id当做页面中的超链接来使用）指定样式，该样式只在用户点击了页面中的超链接，并且跳转到target元素后起作用。 
    - first-child、last-child、
    指定第一个子元素和最后一个子元素
    - nth-child(n)、nth-last-child(n)
        + n: 匹配第n个元素
        + odd/2n+1/2n-1: 匹配奇数元素
        + even/2n: 匹配偶数元素
        + n+4: 选取大于等于4元素
        + -n+4: 选取小于等于4元素
        + 3n+1: 自定义选取元素，此为“隔二取一”
        `PS：不管那种变形，n都为大于等于0的整数，然后逐一匹配直到元素最大值`
    - nth-of-type、nth-last-of-type    
    - only-child
    匹配只有一个子元素的元素

* UI元素状态伪类选择器
>这些选择器的共同特征是：指定的样式只有当元素处于某种状态下时才起作用，
在默认状态下不起作用
    - E:focus、
    - E:enabled、
    - E:disabled、
    - E:read-only、
    - E:read-write、
    - E:checked、
    - E:default、

####4. 伪元素选择器
>是指并不是针对真正的元素使用的选择器，而是针对css中已经定义好的伪元素使用的选择器
css3的标准规定：伪类用单冒号":"，伪元素用双冒号"::"

* CSS2中的伪元素
    - ::before
    用于在某个元素之前插入一些内容，通常与content属性配合使用
    - ::after,
    用于在某个元素之后插入一些内容，通常与content属性配合使用
    ```
    p::after{
        content:attr(title);
        display:block;
        text-align:center;
        margin-top:5px;
    }
    <p title="蓝天白云"><img src="img/g003.jpg"/></p>
    ```
    - ::first-letter,
    获元素中的取第一个字符
    - ::first-line
    获取元素中的第一行文字

* CSS3新增伪元素
    - ::selection: 匹配选择的文本，只能向::selection选择器应用少量CSS属性：color、background、cursor以及outline。
    `css3新属性user-select: 设置是否允许用户选中文本。,值为none时不允许用户选择文本`

###字体及字体样式

####1. 颜色
* color name
`body{color:red;}`
* Hex
`a{color:#ff6600}`
* RGB & RGBA

    | 参数 | 说明        | 取值          | 
    |:----:| ----------- | ------------- | 
    | R    | 红色值      | 正整数,百分数 | 
    | G    | 绿色值      | 正整数,百分数 | 
    | B    | 蓝色值      | 正整数,百分数 | 
    | A    | Alpha透明度 | 取值0~1之间   | 

    ```
    a{color:rgb(255,0,0)}
    .box{background-color:rgba(0,0,0,0.5)}
    ```

* HSL(H,S,L) & HSLA
    
    | 参数 | 说明                 | 取值          | 
    |:----:| -----------          | ------------- | 
    | H    | Hue(色调)   | 取值：0-360。其中，红色：0(或360)，绿色：120，蓝色：240 | 
    | S    | Saturation(饱和度)   | 0%-100% | 
    | L    | Lightness(亮度)      | 0%-100% | 
    | A    | Alpha透明度          | 取值0~1之间 | 

* transparent
transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。
* opacity
使用浮点数指定对象的不透明度。值被约束在[0.0-1.0]范围内，如果超过了这个范围，其计算结果将截取到与之最相近的值

####2. 服务器字体@font-face

```
//规则如下：
@font-face {
    font-family: <YourWebFontName>;
    src: <source> [<format>][,<source> [<format>]]*;
    [font-weight: <weight>];
    [font-style: <style>];
}

//示例：
@font-face{
    font-family:WebFont;
    src:url("fonts/Fontin_Sans_B_45b.otf") format("opentype");
    font-weight:normal;
}

```

* YourWebFontName:此值指的就是你自定义的字体名称，最好是使用你下载的默认字体，他将被引用到你的Web元素中的font-family。如“font-family:"YourWebFontName";”
* source:此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径；
* format：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型以及浏览器的支持情况：
    - truetype(.ttf),
    【IE9+,Firefox3.5+,Chrome4+,Safari3+,Opera10+,iOS Mobile Safari4.2+】
    - opentype(.otf),
    【Firefox3.5+,Chrome4.0+,Safari3.1+,Opera10.0+,iOS Mobile Safari4.2+】
    - woff(.woff)
    Web Open Font Format是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，【IE9+,Firefox3.5+,Chrome6+,Safari3.6+,Opera11.1+】
    - embedded-opentype(.eot),
    IE专用字体，【IE4+】；
    - svg(.svg)
    基于SVG字体渲染的一种格式,支持这种字体的浏览器有【Chrome4+,Safari3.1+,Opera10.0+,iOS Mobile Safari3.2+】

    >这就意味着在@font-face中我们至少需要woff,eot两种格式字体，甚至还需要svg等字体达到更多种浏览版本的支持。

    ```
        @font-face{
            font-family: 'YourWebFontName';
            src: url('YourWebFontName.eot'); /* IE9 Compat Modes */
            src: url('YourWebFontName.eot?#iefix') format('embedded-opentype'), /*IE6-IE8 */
                url('YourWebFontName.woff') format('woff'), /*Modern Browsers*/
                url('YourWebFontName.ttf')  format('truetype'), /*Safari, Android, iOS*/
                url('YourWebFontName.svg#YourWebFontName') format('svg'); /*Legacy iOS*/
        }
    ```

* weight和style:这两个值大家一定很熟悉，weight定义字体是否为粗体，style主要定义字体样式，如斜体。

####3. 文本样式
* text-shadow
    设置文本阴影效果，可同时设置多个阴影效果
    格式：text-shadow:x y length color
    - x： 第1个长度值用来设置对象的阴影水平偏移值。可以为负值 
    - y： 第2个长度值用来设置对象的阴影垂直偏移值。可以为负值 
    - length： 如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值 
    - color： 设置对象的阴影的颜色。 
* word-wrap
    设置或检索当内容超过指定容器的边界时是否断行（强调的是是否允许断行）
    - normal： 允许内容顶开或溢出指定的容器边界。 
    - break-word： 内容将在边界内换行。如果需要，单词内部允许断行
* word-break
    使用该属性自定义自动换行的处理方法（强调的则是怎么样来进行断行）
    - normal:使用浏览器默认换行规则
    - keep-all:只能在半角空格或连接字符处换行
    - break-all:允许在单词内换行（对于标点符号来说，允许标点符号位于行首，不过在IE中是不可以的）
* white-space
    - normal：默认处理方式。
    - nowrap：强制在同一行内显示所有文本，直到文本结束或者遭遇br对象。
    - pre：用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行。可查阅pre对象
    - pre-wrap：用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行。
    - pre-line：保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行。
* text-overflow
    - clip：当对象内文本溢出时将溢出的部分裁切掉。
    - ellipsis：当对象内文本溢出时显示省略标记（...），
    >配合overflow:hidden和white-space:nowrap配合使用才出效果。

###其他新增样式

####1. 背景
- background-size:
    + length： 用长度值指定背景图像大小。不允许负值
    + percentage： 用百分比指定背景图像大小。不允许负值
    + auto： 背景图像的真实大小。
    + cover： 将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
    + contain： 将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。
- background-origin
    + padding-box： 从padding区域（含padding）开始显示背景图像。 
    + border-box： 从border区域（含border）开始显示背景图像。 
    + content-box： 从content区域开始显示背景图像。 
- background-clip
    + padding-box： 从padding区域（不含padding）开始向外裁剪背景。 
    + border-box： 从border区域（不含border）开始向外裁剪背景。 
    + content-box： 从content区域开始向外裁剪背景。 
    + text： 从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果    

####2. 边框
* border-image
>给元素边框添加背景图像，复合属性，包含以下属性：

    + border-image-source： 设置或检索对象的边框是否用图像定义样式或图像来源路径。 
    + border-image-slice： 设置或检索对象的边框背景图的分割方式。 
    + border-image-width： 设置或检索对象的边框厚度。 
    + border-image-outset： 设置或检索对象的边框背景图的扩展。 
    + border-image-repeat： 设置或检索对象的边框图像的平铺方式。
        - stretch： 指定用拉伸方式来填充边框背景图。 
        - repeat： 指定用平铺方式来填充边框背景图。当图片碰到边界时，如果超过则被截断。 
        - round： 指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。写本文档时仅Firefox能看到该效果 
        - space： 指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的之间的间距直至正好可以铺满整个边框。 

* box-shadow
    + none： 无阴影 
    + x： 第1个长度值用来设置对象的阴影水平偏移值。可以为负值 
    + y： 第2个长度值用来设置对象的阴影垂直偏移值。可以为负值 
    + length： 如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值 
    + offset： 如果提供了第4个长度值则用来设置对象的阴影外延值。可以为负值 
    + color： 设置对象的阴影的颜色。 
    + inset： 设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影 

####3. 渐变
>什么是渐变：渐变就是两种或多种颜色之间的平滑过渡

* 线形渐变：
    格式：linear-gradient(角度/关键字,起始颜色,结束颜色)
    - angle：通过角度来确定渐变的方向。
    - 关键词：通过关键词来确定渐变的方向(格式：to + 方向)，比如“to top”、“to right”、“to bottom”和“to left”。
    - color-stop：第2个和第3个参数，表示颜色的起始点和结束点。可以在两个颜色中间插入更多的颜色值

* 径向渐变：
    格式：`radial-gradient(position,shape,size,color-stop,color-stop)`;
    - position：主要用来定义径向渐变的圆心位置。其值主要有以下几种：
        + length：用长度值指定径向渐变圆心的横坐标或纵坐标。可以为负值。
        + percentage：用百分比指定径向渐变圆心的横坐标或纵坐标。可以为负值。
        + left：设置左边为径向渐变圆心的横坐标值。
        + center(默认)：设置中间为径向渐变圆心的横坐标值或纵坐标。
        + right：设置右边为径向渐变圆心的横坐标值。
        + top：设置顶部为径向渐变圆心的纵标值。
        + bottom：设置底部为径向渐变圆心的纵标值。
    - shape：主要用来定义径向渐变的形状。其主要包括两个值“circle”和“ellipse”：
        + circle：用来指定圆形的径向渐变
        + ellipse(默认)：用来指定椭圆形的径向渐变。
    - size：主要用来确定径向渐变的结束形状大小。参数主要有：
        + closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边；
        + closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角；
        + farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边；
        + farthest-corner(默认)：指定径向渐变的半径长度为从圆心到离圆心最远的角；
    - color-stop：表示颜色的起始点和结束点。可以在两个颜色中间插入更多的颜色值
