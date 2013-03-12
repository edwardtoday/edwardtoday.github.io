---
date: '2011-02-21 22:14:09'
layout: post
slug: dui_xin_ban_de_zhui_qiu
status: publish
title: 对新版的追求
wordpress_id: '37970'
categories:
- Life at Shanghai
tags:
- App
- App Store
- Mac
- MacBook
- Python
- software
- Ubuntu
- update
- upgrade
---

软件为什么要升级？

我记得一两年前我在水木上就看到一帖子讨论升级强迫症，许多人都有，凡是软件有新版，就更新到最新版。差别就在，有些人升级到最新的stable版本，有些人升级到最新的beta版本，而有些人不用nightly build就心神不宁……

这个问题我最近又问我自己了，原因是我在物色笔记本电脑的时候，除了MacBook之外，又对T410s有了兴趣。而Windows实在是太容易演变成一台游戏机，所以我想格了它装Linux，这就有个兼容性问题了。经过两三天零零碎碎地Google，确定了指纹识别用不了，显卡切换比较繁琐，还有人的blog开开心心地宣布T410s支持Ubuntu已经做到了compatible out of the box，然后没几个礼拜的博文开始发牢骚，说这个功能没了，那个硬件用不了了。

这可是个关键问题，如果从mac换回pc，连linux的驱动都这么折腾，我还不如继续折腾macboook的linux驱动呢！但是我转念一想，曾经是fully compatible的硬件，怎么一段时间之后就不能用了呢？肯定是手贱打了几个apt-get update！

我爸公司配的笔记本装的还是Office2003，虽然时有报怨说powerpoint的效果比较单调，但是不至于报怨文件发出去客户打不开。我在公司里用的是Windows XP，虽然对多显示器的支持稍显弱小，打开程序也得在开始菜单里找来找去，但起码公司IT不至于面对数不胜数的对win7使用方法的support request。

明明用得好好的软件为什么要去升级？

我觉得合适的理由只有安全漏洞、核心功能的增加以及实际遇到的bug的修复。

至于其它的bug fix，像word这样一个庞然大物，就算修100个bug，估计也很难修到我会碰上的bug。像Python 2.6到3.0这类根本就不向前兼容的升级，我更加不愿意了。

新版并非是更好的选择，有些情况下，还要降级，对于开发人员，这似乎时常会遇到。比如要编译一个工程，make一下，发现不行，非要把gcc或者一些lib降到某个版本，才顺利编译。

虽然道理很明白了，但是见到App Store上面的badge，手还是不由自主地点上去，然后update all……强迫症啊……
