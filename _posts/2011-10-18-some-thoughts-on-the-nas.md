---
layout: post
title: '关于NAS的一些想法'
date: 2011-10-18 11:15
comments: true
category: 
---
    

想把存储的任务分离出来交给一个独立的NAS设备处理。方便管理，方便备份，方便从多个设备访问。

系统的选择就多种多样：

  * Windows Home Server的优势是无敌的吸血雷，劣势是不免费。

  * Ubuntu Server挺好的

  * FreeNAS是后来看到的，原本是用UFS的，8.0开始主打ZFS了。于是引起了我对ZFS的关注。

  * 关注了ZFS，就不得不关注Open Solaris了⋯⋯

如果不用ZFS，Atom加上2G内存就够了。但是ZFS的亮点实在太多啊，尤其是Sun派人拿着锤子砸硬盘的demo，多么具有煽动性。ZFS的raidz、compression、dedup看起来都挺诱人的。

可是用ZFS的话，2G内存是不够滴，如果开了dedup，用64K的block，几T的存储就需要32G内存来放dedup table了。于是人们想到了把这个大表从内存转移到SSD上存放，这个时候不说SSD贵了，跟内存一比，那就是白菜价啊。反正现在手头有一块闲置的SSD（竟然把它闲置了！！），做缓存好歹也是个归宿⋯⋯

等确定了方案再更新吧。To be continued.
