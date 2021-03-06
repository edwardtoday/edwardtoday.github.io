---
layout: post
title: "Compiling"
description: ""
tagline: "工欲善其事，必先利其器"
category: "programming"
tags: []
published: true
---

今天看到xkcd 303的时候，感到真写实啊。

![Compiling](http://imgs.xkcd.com/comics/compiling.png)

从09年把自用的电脑内存加到3G之后，10年新机器是8G，12年双十一淘宝了16G插上，就没用过内存小于4G的机器了。连Macbook Air都有4G呢，虽然我越来越多时候觉得Air的内存不够用了。

CPU方面，貌似从家里第一台电脑开始就没见过低端产品线的东西。97年是Pentium，后来Pentium III，再换成Core 2 Duo，然后就Core i5了。升级间隔是长了点，不过有Pentium的时候，就没买过Celeron；有Core的时候，也没买过Pentium，更别说Celeron了。

10-11年的项目一个个都不小，用4核+超线程的Xeon（型号忘了，貌似跟i7 930差不多的性能）编译一次大约半小时；有的同事机器内存小或者是i5的机器，轻轻松松逼近一小时。那时候上一天班，有半天在编译啊。

最近工作中用的电脑，缩水成Pentium G630+2G内存了，在体验了三年SSD之后，又要重新忍受机械盘的各种卡了。开编辑器倒是没啥问题，2G内存的问题在于开Chrome查东西，开3个tab以上就力不从心了……编译呢，目前这个几千行的项目也没觉得啥，一分钟不到。可前天编译安装gcc真是要了命了，中午开工，下班前还没搞定。回家用家里的电脑，一个多小时解决。再比如说Vagrant的虚拟机配置完之后，想重新打包一个，免得以后还得经历这么惨痛的gcc编译，为了打包出来的镜像够小，要把磁盘可用空间统统写0，这个过程，在家里的SSD上就很快，平均速度300+MB/s，在单位的服务器上，就只有区区30+了。Ubuntu cloud image默认分配的磁盘空间是40G，于是就产生了90秒 vs 900秒的差距。

不是说低端硬件不能用，而是有些应用上，在硬件上省钱其实亏大了。

总看到有人对workstation或者以上级别的硬件定价颇有微词。特别是显卡，一样的芯片，怎么换了个驱动，换了ECC显存，可能还把频率降了、散热缩水了，反而价格乘了个六七倍。其实一样的芯片，卖给玩家个人是用来消费的，而卖给企业用户则是用来干活挣钱的，多么好的价格歧视的机会啊。只要能帮助企业里的人干更多的活、赚更多的钱，拿一部分出来投资硬件设备是件很合理的事情。

还得不懈地寻找机会，把干活的机器弄得快一点……

