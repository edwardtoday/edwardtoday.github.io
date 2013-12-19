---
layout: post
title: '利用脚本，一劳永逸'
date: 2011-11-22 12:20
comments: true
category: 
---
    

网络实验要采集一段时间的数据。于是，

写个shell script把工具的输出写到文件；

写个python（当做是script吧，反正script和program之间的界限挺模糊的）把许多文件中我要的数据提取出来写成csv表格；

写个R script把各种图画出来，存成pdf。

以上种种再让cron去自动执行，就没我什么事了，坐等Dropbox时不时把最新的图同步到我这里。如果没有Dropbox这样的工具，可以再写个script把结果rsync到每个组员的机器上，不过有简单的不用，简直是犯罪啊！

Lifehacker介绍了[一些不错的办法](http://lifehackerbook.com/ch7/)，可以让许多任务自动化。

比如在跟某个美剧，设置一下自动从rss下载种子，让下载工具自动把视频下载下来，然后自动转码成移动设备可以播放的格式，再自动同步到身边的设备上，比起每一集都自己操作一遍，方便太多了吧~

（本文的初衷不是鼓励自动化娱乐的⋯⋯）
