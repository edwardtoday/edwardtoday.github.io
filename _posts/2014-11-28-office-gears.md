---
layout: post
title: "生产资料的投入产出"
description: ""
tagline: ""
category: "hardware,productivity"
tags: []
published: true
---

上周五遇到Windows故障，于是阴差阳错地提前更新了办公电脑。原先是 Pentium G630 + 12G（2+2+4+4）内存，现在是 Pentium G3240 + 8G （新机器主板只有两个DIMM槽……）。

新机器比原来快了多少呢？我们用实际应用来对比——Visual Studio 2013对目前正在进行的项目进行Rebuild Solution操作的耗时（都启用了并行编译）。

- G630：130秒
- G3240：85~90秒

作为对比，还有个公用的笔记本电脑 i5-540M + 2G，也凑个热闹

- i5-540M：快则90秒，满则430秒。

不知是因为内存太小，不时触发swap，还是木马作祟，有时候四个 cl.exe 运行着，CPU总占用率还不到15%，随之而来的就是七分多钟的神级编译时间。我这又不时什么大项目，才几千行而已……

5月份和这个月初赶进度的时候，我总是喜欢在家里的电脑上加班。虽然那台电脑已经买来3年多了，可是架不住它就是快啊。i5-2300 + 16G RAM + 250G SSD。编译工程耗时如下：

- i5-2300：43~46秒。

每次改动一处代码，按下 F5，虽然只编译一部分，也能差出少则十几秒，多则几十秒。日积月累，其实也不少。

现在回想起来，当初开做游戏开发的时候，各种工作站，要么 i7，要么 Xeon，应该要归功于动辄半小时的编译时间吧。硬件上的投入，在那个场景下，显然要比人力成本低太多。

---

另一个被证实能提升效率的工具叫做显示器，具体说应该是大显示器或者双显示器。

写文档、写代码、Excel制表、Powerpoint制片，多数时候都是要在读写见频繁切换的：读需求，写代码；读原始数据，写公式、解读。 `Alt+TAB` 虽快，也拼不过同时呈现的两个窗口。

写代码和文档，上下文很有意义。目前的显示器分辨率越来越跟不上时代，尤其是笔记本上弱弱的 1366x768 。十多年前就普及 1024x768 了好吗，纵向分辨率长期不长进，就意味着上下文还是只能看到那可怜的十几二十行。如果是 Windows + Word 的默认配置，上有标题栏和 ribbon，下有状态栏和任务栏，打开一个word文档几乎就没法看了。

面向商用的显示器有不少可以旋转，把长边分辨率变成纵向的，轻松达到1600或者1920的纵向分辨率。写文档或代码，有效减少滚轮或翻页键的使用，提高效率。

---

有时候，追求低成本这个策略本身就带来的成本的上升。就像节食减肥一样，容易陷入「节食-基础代谢率降低-更加节食」的恶性循环。现在不是讲可持续发展么。