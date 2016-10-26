[TOC]
#day06本地存储与离线缓存


##本地存储

###Web Storage

>cookie的缺点
1、大小限制在4KB左右，数量限制在50个左右
2、带宽浪费（随着http请求一起发送）
3、难以操作
HTML5重新提供了一种在客户端本地保存数据的功能，Web Storage


####sessionStorage
>sessionStorage
将数据保存在session对象中。所谓session，是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，session对象可用来保存在这段时间内所要求保存的任何数据临时保存（类似临时cookie）


####localStorage
>localStorage
将数据保存在客户端本地的硬件设备中，即使浏览器关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可用（只要用户不主动删除，localStorage存储的数据将会永久存在，永久保存）

PS: IE8~11要在页面部署到服务器之后才支持localstorage/sessionStorage,否则为undefined

###属性与方法
sessionStorage与localStorage属性与方法完全相同，唯一的区别是一个是临时的，一个是长期的

* 存储：setItem(key,value)
往sessionStorage/localStorage对象添加key属性，如果key已经存在，则更新value，用法如下：
```
sessionStorage.setItem('name','小谢')
localStorage.setItem('name','老谢')
```

PS：在iPhone/iPad上有时设置setItem()时会出现诡异的QUOTA_EXCEEDED_ERR错误，这时一般在setItem之前，先removeItem()就ok了。

* length
获取sessionStorage/localStorage对象中属性的数量

* 获取：getItem(key)
如果key不存在返回null

* 删除：removeItem(key)
一旦删除，key对应的数据将会全部删除

* 全部清除：clear()
某些时候使用removeItem逐个删除太麻烦，可以使用clear,执行的后果是会清除所有localStorage/sessionStorage对象中保存的数据

* key(index)
key(index) 获取key，例：var key=localStorage.key(index);

###storage事件
>PS：目前浏览器兼容不好，建议不要用，了解即可

```
window.onstorage = function(e){

}
```

*event中保存着以下信息*

* storageArea: 表示存储类型（Session或Local）
* key:发生改变项的key
* oldValue: key的原值
* newValue: key的新值
* url: key改变发生的URL
如果调用clear()方法，那么key、oldValue和newValue都会被设置为null。




##离线缓存
HTML5引入了应用程序缓存，这意味着web应用可进行缓存，并可在没有网络连接时进行访问。

###优势
1. 离线浏览 - 用户可在应用离线时使用它们
2. 速度 - 已缓存资源加载得更快
3. 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

###manifest
使用HTML5，通过创建cache manifest文件，可以轻松地创建web应用的离线版本，如需启用应用程序缓存，请在文档的html标签中包含manifest属性。
```
<!DOCTYPE html>
<html manifest="test.appcache">
    <body>
        ......
    </body>
</html>
```

如何编写mainfest文件：

1. 创建后缀名为.appcache/.manifest的文件
2. 文件编码格式必须是utf-8
3. 文件四个部分
    * CACHE MANIFEST：写在文件第一行，用来声明这是一个manifest文件（必写）
    * CACHE：设置后面的文件需要缓存，一行一个文件（必写）
    * NETWORK：设置后面的文件为不缓存（即必须要连接服务器才能访问，可选）
    * FALLBACK：获取不到资源时的备选路径，如index.html访问失败，则返回404页面（格式如下示例，可选）
    * 注释：在开头使用#

示例：
```
CACHE MANIFEST
#我是注释，这个文件名叫test.manifest

CACHE:
/css/style.min.css
/js/common.js
/js/index.js

NETWORK:
/data/list.json

FALLBACK:
/style.min.css /style.css
```

注意事项：
1. 必须启用web服务器，离线缓存才会起作用。
2. 引用cache.manifest的html文档会被默认缓存
3. 站点中的其他页面即使没有设置manifest属性，请求的资源如果在缓存中也从缓存中访问
4. 更新.manifest文件，浏览器检测到.manifest变更后，会主动更新本地缓存。（假如没有更新.manifest，即使你对缓存清单里的文件进行了修改，浏览器依旧会顽强地从本地缓存里面读取修改之前的文件）

>离线缓存的下线
要将离线缓存下线，我们只需要将服务端的manifest文件删除即可，同时也要将HTML中的  manifest属性删除，删除后用户再第一次访问还是原来的缓存页面并刷新一次
chrome浏览器删除方式：chrome://appcache-internals

###applicationCache 
浏览器通过window.applicationCache对象来及其相应属性、接口、事件供用户构建离线应用
####属性
* status
当前缓存所处的状态，为0～5的整数值，分别对应一个状态，并分别对应以下6个常量
* window.applicationCache.UNCACHED === 0
未缓存，比如一个页面没有制定缓存清单，其状态就是UNCACHED
* window.applicationCache.IDLE === 1
空闲，缓存清单指定的文件已经全部被页面缓存，此时状态就是IDLE
* window.applicationCache.CHECKING === 2
页面正在检查当前离线缓存是否需要更新
* window.applicationCache.DOWNLOADING === 3
页面正在下载需要更新的缓存文件
* window.applicationCache.UPDATEREADY === 4
页面缓存更新完毕
* window.applicationCache.OBSOLETE === 5
缓存过期，比如页面检查缓存是否过期时，发现服务器上的.manifest文件被删掉了

####方法
* update()
update方法调用时，页面会主动与服务器通信，检查页面当前的缓存是否为最新的，如不是，则下载更新后的资源
* swapCache()
updateready后，更新到最新的应用缓存