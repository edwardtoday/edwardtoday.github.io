---
layout: post
title: '冗余数据真可怕'
date: 2012-02-08 20:14
comments: true
category: programming
tagline:
tags: [dedup]
---

近日处理掌纹数据，前人工作的一部分就是采集了8000个掌纹样本。具体的扫描方法我就不细说了（我也没仔细研究那几篇文章），至少生成的3D掌纹样本文件是这样的：

  * 768*576行;分辨率就是它了
  * 每行3个浮点数，空格分割;就是这个像素的XYZ坐标，Z是皮肤表面到扫描设备的距离

就这样了。

于是呢，8000个样本的数据正好100GB。因为数据太多，网络条件不好，我还带着个移动硬盘，过海关去深圳拷数据来着。回来一看，发现程序员们真的是给点阳光就灿烂，以前内存吃紧的时候，申请一点空间都小心翼翼，现在不了；原来硬盘容量以MB为单位的时候，一个游戏才几十KB，现在也不这样了。中学的时候，每年还能看到64KB的3D演示程序，各种神奇，后来不限制64KB了，再后来就销声匿迹了。

回正题，某样本的其中几行是这样的：

> 0.000000 3.824712 0.000000
> 0.141656 3.824712 0.000000
> 0.283312 3.824712 0.000000
> 0.424968 3.824712 -35.490659

这几个Y坐标的值怎么这么像呢？

再看看另外几行：

> 0.000000 0.000000 0.000000
> 0.141656 0.000000 0.000000
> 0.283312 0.000000 0.000000
> 0.424968 0.000000 0.000000

X坐标貌似曾经见过啊？

X坐标一共就768个不同的值，重复了576遍。Y坐标则是576个值，重复了768遍。既然已经重复了这么多次了，也不在乎8000个样本写8000遍了。

我的硬盘用了100*2/3GB来存这768*576个浮点数！

把这些冗余数据去掉，可以压缩到三分之一，也就是33GB左右。这还是挺大的，毕竟好好的浮点数，用ASCII码来存储，每个数后面还得搭上一个空格或者一个换行符，多浪费啊。直接把这768*576个浮点数（float32）存成二进制文件，能进一步省58%的空间。这都不用任何复杂的压缩算法，直接就从100G变成14G了。

存成二进制文件之后，每个样本768*576*4B=1.6875MB。我试了试把这个矩阵用matlab序列化（新版matlab存mat文件的时候已默认就压缩了，zip还是gzip我倒没查过），压缩率是83%。用7zip压那个二进制文件，选最大压缩，大约是66%的压缩率。

以上是讨论冗余数据的害处，与数据备份无关，为了消除冗余而不备份文件，硬盘U盘光盘丢了坏了格了的，纯属自找啊⋯⋯
