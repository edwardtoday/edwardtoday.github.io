---
layout: post
title: 'Git server on a mac'
date: 2011-01-03 23:46
comments: true
category: 
tagline: 
tags: []
---
    

虽说现在工作的项目都不带回家来，不过自己的一些文档和代码也不仅需要单纯的备份，保存各个版本还是有必要的。

很久前用的是Dropbox，现在依然在用，不过自从被盾了之后毕竟有些不便。

后来用了github，那个免费用户的soft limit真够soft的，起码多上传了2倍大小的东西，也只是提示，文件还是统统保留在服务器上。不过这样感觉不太好，毕竟人家提供服务也得混口饭吃……

既然macbook已经沦为客厅的网络播放器，再加个备份服务器也未尝不可。

按照[http://scie.nti.st/2007/11/14/hosting-git-repositories-the-easy-and-secure-way](http://scie.nti.st/2007/11/14/hosting-git-repositories-the-easy-and-secure-way)的方法，在mac上建立一个git server还是很方便的。

macbook通过11n连着路由，再通过百兆的线连到台机，互相push pull的速度大概在3m左右。对于不需要出门在外随时需要的文档，本地版本控制加上一两个备份足够了。也不用等龟速地push到不知道在地球哪一个位置的服务器上。

git对于大的工程确实不给力，add一个40多G的目录，26XXXX个文件，花了好几个小时，commit干脆无响应，重试一次报内存不足，还得人工分了十几次add/commit。
