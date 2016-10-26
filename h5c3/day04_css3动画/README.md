[TOC]
#CSS3动画

###关键帧动画animation

####定义动画
```
@keyframes <identifier> '{' <keyframes-blocks> '}';
<keyframes-blocks>：[ [ from | to | <percentage> ]{ sRules } ] [ [ , from | to | <percentage> ]{ sRules } ]*

```
指定动画名称和动画效果。 
@keyframes定义的动画名称用来被animation-name所使用。 
定义动画时，简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态
```
@keyframes testanimations{
    from{opacity:1;}
    to{opacity:0;}
}
```

####使用动画
```
//完整格式：
animation：name duration timing-function delay iteration-count direction

```

* animation-name： 
设置对象所应用的动画名称，这里的名称为@keyframes中定义的名称
* animation-duration： 
设置对象动画的持续时间，默认值为0，所以必须设定动画时间才会有动画效果
* animation-timing-function： 
设置对象动画的过渡类型 
`同transition`
* animation-delay：
设置对象动画延迟的时间（默认：0）
* animation-iteration-count：
设置对象动画的循环次数 
    - infinite： 无限循环 
    - number： 指定对象动画的具体循环次数（默认：1）
* animation-direction：
设置对象动画在循环中是否反向运动 
    - normal(默认)： 正常方向 
    - alternate： 正常与反向交替 
* animation-play-state：
设置对象动画的状态。w3c正考虑是否将该属性移除，因为动画的状态可以通过其它的方式实现，比如重设样式 
    - running： 运动 
    - paused： 暂停



