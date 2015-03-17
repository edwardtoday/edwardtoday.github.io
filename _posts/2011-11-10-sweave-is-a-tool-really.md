---
layout: post
title: 'Sweave果然是个利器'
date: 2011-11-10 16:57
comments: true
category:
tagline:
tags: []
---

距离上一篇日志已经有三周了。现在各种课程的小组作业都已经开始，外加依旧繁琐的数据挖掘作业。我有些不理解，为什么数据挖掘作业要求手算的题目，维度那么高，记录条数那么多，非得我们计算器按到手抽筋才能摆平它。

算完之后，究竟对不对，计算器输入数字的时候，有没有手抖漏掉一个小数点或者误按了其他键，不得而知。好在有万能的Excel，写好公式统统帮我算好，结果一致我也就不看中间的值了。

至于用软件来k-means，我是真不想动用IBM那个PASW，虽然是个收费的，虽然看上去挺牛的，但是trial license的问题让我每隔15天得重新恢复虚拟机到没有授权的那个snapshot重来，何必呢。咱有GNU/R，kmeans还是挺方便的。第一次作业用Apriori的时候，也是R做的。R的文字结果都是限宽的，复制粘贴没啥问题；plot结果就得输出一下了，不管是eps还是pdf又或者是png之类的格式。但是第一次作业证明，前几次的输出都是不靠谱的，时不时会想出新增一个处理步骤，或者调整一下参数，难道再复制粘贴一遍么？！

牛人们又赐予了我Sweave。本以为用GUI写TeX的美好日子要过去了，结果发现TextMate有Sweave的bundle，还挺好用的。

这下不担心频繁修改R code了，随便怎么改，COMMAND+R一下，新的PDF就出现了。

顺便记录一下这次写tex遇到的问题：

  * 距离矩阵太宽了，tex默认又不作处理，一开始我是把表格转90度的，但是实在是太浪费纸了⋯⋯后来把整个tabular环境放到\resizebox {\textwidth}{!}{}里面，就顺眼多了。

  * 插入的表格茫茫多，tex引擎报错说float太多。于是加了

\usepackage{etex}

\reserveinserts{18}

\usepackage{morefloats}

三行，我实在是不想固定每张表的位置，那样各种空白一样浪费纸。

暂时，看上去是这样的：

[gview file="https://dn-qingpei-file.qbox.me/post/11500811g_QING_Pei.pdf"]

欢迎交流R、Sweave、TeX的各种神级应用，话说我这学期为了作业才开始接触R的，真是宝物啊。
