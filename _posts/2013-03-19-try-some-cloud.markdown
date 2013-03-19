---
layout: post
title: 试试云服务
description:
keywords: 
date: 2013-03-19 15:36:15
tags:
- AWS
- mosh
---

（现在正事处在一个等数据的状态，一边根据已有的数据优化代码，一边把各种数据处理、实验、报告生成都尽量自动化）

上周尝试了一些云服务。

## Travis CI
常在GitHub上看到项目的readme里面有个代码编译结果的图示[![Build Status](https://travis-ci.org/edwardtoday/edwardtoday.github.com.png?branch=master)](https://travis-ci.org/edwardtoday/edwardtoday.github.com)，感觉挺好玩的。于是我也去赶了个时髦，把这个blog源文件也CI了一下。

或许在GitHub Pages托管的时候，很少遇到Jekyll编译出错的情况，不过万一以后想把blog托管在别的地方，就可能遇到gem升级之后，Jekyll各种报错了。这时要是只生成了一部分静态页面，还把这半成品发布了，那多囧啊。

用Travis CI的话，可以通过脚本，只有当jekyll顺利生成全部静态页面之后，才把整个_site目录更新；否则发个邮件提示下出错了，对网站不作任何改动就好。[https://github.com/Sibylus/sibylus.github.com](https://github.com/Sibylus/sibylus.github.com)就是个例子，源文件放source branch，如果build成功，就把结果push到master branch去。

## AWS
实验室里的台式机实在是太慢了，装个Ubuntu用起来卡得难以忍受，干脆弄个EC2跑跑轻量级的计算。

目前主要用来架了个VPN，方便回上海的时候上“Internet”用。（本来是想直接拿家里路由架VPN的，结果刷了个Tomato Toastman的带VPN后缀的固件，只有PPTP client，没有PPTP server，iOS要用OpenVPN貌似得越狱？还是算了。）

AWS Instance选在了Tokyo，国内访问未被墙（不知道与我绑了个qingpei.me的子域名有没有关系）。我从学校ping的话，大概80ms，略有延迟，不过又不用补刀，延迟一点点无妨。

顺便推荐下[mosh](http://mosh.mit.edu/)，这个shell在高延迟、高丢包率的网络条件下，连远程机器实在是舒心。大多数时候，远端的主机速度如何并不太影响体验，只是RTT高的时候，键盘敲一下，过一会shell才显示，对于码农们来说就是卡、很卡、非常卡。mosh用其提出的State Synchronization Protocol，大幅降低了感受到的延迟。再加上其他一些功能，比如Unicode在不同平台的处理、比如client换个IP不会中断连接等等，让我看到了iPad Cellular之类的设备远程访问主机进行编程的可能。以前看到过geek这么做，不过是在学校里拿iPad连着校园网访问学校机房的Linux主机干活。我猜想，如果连的是Linode、EC2或者Rackspace的主机，ping一高，这种编程方式的体验就会急剧下降了，mosh的出现算是拯救这么一批人的世界了。

## 买了俩域名
看到edwardtoday.com还能注册，拿下。

看到qingpei.us能注册，也拿下。

qingpei.me每年续费够上面俩域名加起来的费用，真是贵……