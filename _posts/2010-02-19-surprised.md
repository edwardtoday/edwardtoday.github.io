---
layout: post
title: 'surprised'
date: 2010-02-19 23:18
comments: true
category: 
tags:
---
    

不久前找到一个Bold上的FTP客户端，好像叫BeFTP吧。虽然是共享软件，不过限制仅仅是不能保存站点为书签。

用下来感觉还是不错的，当然前提是有WiFi。

今天居然找到一个FTP服务端……竟然是freeware……彻底被折服了。

其实它不仅是个FTP Server，还可以做HTTP server，还可以做http/socks proxy，还可以做ssh tunnel。这简直就是万能嘛。

可能对5.0OS有点兼容性问题，root folder设置不了，抛出exception。

简单测试了一下我可能会用到的FTP server：

  * 支持多个连接（默认15！！！）
  * 支持用户登录（支持禁止匿名访问）
  * 写权限可选
  * incoming和outgoing分别可以从WiFi或Direct TCP两种连接方式中选择（这个我没想出怎样获得地址……）
  * 监听端口可以自选

从手机下载一个mp3到电脑平均347KBps，把手机上该文件删掉，从电脑上传回去，平均527.3KBps。

看来不稳定，我换个22.14MB的文件测试，上行733.7KBps，下行760.5KBps，神速！

如上折腾耗电在5%到10%之间。

该神作名为[Wi-Fi Proxy + FTP/HTTP Servers](http://www.foryourblackberry.com)
