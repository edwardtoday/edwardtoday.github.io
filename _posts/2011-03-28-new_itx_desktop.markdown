---
date: '2011-03-28 00:25:00'
layout: post
slug: new_itx_desktop
status: publish
title: New ITX Desktop
wordpress_id: '38000'
categories:
- Life at Shanghai
tags:
- CPU
- i5
- ITX
- Mac
- MacBook
- Q07
- RAID
- RAM
- SSD
- SuperCache
- 内存
- 散热
- 机箱
---

MacBook四周岁了，换上固态硬盘后是个性能出众的上网本，主要功能为连着电视看优酷和高清电影。

在ChipHell坛子里盘算了一周，昨天去浦东把机器装了。

[![_MG_6183](http://qingpei.me/images/in_post/MG_6183_thumb.jpg)](http://qingpei.me/images/in_post/MG_6183.jpg)

我自备了一个光驱位的硬盘架，外加两块希捷的320G笔记本盘。原因就是小机箱只有一个光驱位和一个硬盘位，我要塞个SSD，别的盘只能往光驱位放了。

[![_MG_6182](http://qingpei.me/images/in_post/MG_6182_thumb.jpg)](http://qingpei.me/images/in_post/MG_6182.jpg)[![5-inch-to-2-inch](http://qingpei.me/images/in_post/5-inch-to-2-inch_thumb.jpg)](http://qingpei.me/images/in_post/5-inch-to-2-inch.jpg)

[ITX的小板子](http://www.chiphell.com/portal-view-aid-1188.html)只有一个PCIE槽，不过机箱小并且没有风扇主动散热，加个独显估计风道就更悲剧了。这PCI挡板现在放了个CPU风扇调速器，转速目前1000rpm，可以保证待机温度在35以下。

手头这块Intel X25-M G2 80G之前装在笔记本上，是1.5Gbps的SATA口，全新入手时的速度大概就是读130写50，4K基本上就在12~15左右。现在搭档换了H67，顿时抬起头来了……

[![Q07-SSD](http://qingpei.me/images/in_post/Q07-SSD_thumb.png)](http://qingpei.me/images/in_post/Q07-SSD.png)

两块5400转的笔记本盘用Windows做的软RAID0，主板那个伪硬RAID除了拖延开机时间外，对这么慢的两块硬盘和软件RAID没什么区别，反正也没缓存。

说到缓存，我尝试了一下SuperCache，这玩意实际作用多大目前不太清楚，用来跑分确实是霸气，下面两幅测试图，左边是双盘软RAID0的速度（单盘速度大约68～50MB），右边则是用1.5G内存给同一个分区做Cache之后的结果。

[![Q07-STRaid0](http://qingpei.me/images/in_post/Q07-STRaid0_thumb.png)](http://qingpei.me/images/in_post/Q07-STRaid0.png)[![Q07-STRaid0SuperCache](http://qingpei.me/images/in_post/Q07-STRaid0SuperCache_thumb.png)](http://qingpei.me/images/in_post/Q07-STRaid0SuperCache.png)

如果是ATTO来测，那就更离谱了，基本就测成内存带宽了，超过64K后都是2XXX到3XXX MB/s的结果。

在小文件写入时确实有加速，不过仅仅是对用户而言的，该写入的东西还是要写的，先写到RAM里告诉你写完了，然后后台再悄悄地实际写入。

整机性能不玩游戏的话挺不错的，新i5的集显据说性能还可以，不过从PES11实测情况来看，质量只能开到Low……家里另外一台Dell的5450都能开High！我只能说，再便宜的独显，那也是独显……我很纳闷的是办公室的Quadro竟然只能开到Middle，实在是大失所望。

[![Q07-Win7Index](http://qingpei.me/images/in_post/Q07-Win7Index_thumb.png)](http://qingpei.me/images/in_post/Q07-Win7Index.png)

这机器估计又能顶个三四年了。MacBook可以转型成全职上网本。
