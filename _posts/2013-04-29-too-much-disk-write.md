---
layout: post
title: '优化图片该充分利用内存'
date: 2013-04-29 17:30
comments: true
category: utility
tagline:
tags: [image]
---

上个月硬盘空间吃紧，于是把不值得保留的电影删了，不常听的音乐上传到Google Play，并且把许多FLAC和APE转成320Kbps的MP3了……

此外还删了不少RAW格式的照片。该后期的都做过了，剩下的到此一游用JPEG够了。剩下100多GB的JPEG，800万像素的350D一张照片只要3~5MB，而550D我不明白为什么要那么大（15〜20MB）。我没有把照片放到100%然后在屏幕上找噪点找紫边找色块的强迫症，于是试了下ImageOptim，把JPEG质量设成98%，结果张张都能省下30%~60%的空间。最后平均省了近50%。很明显的一点是，新相机生成的文件，细节超多，那2%的细节占用了约60%的空间；老相机不知是编码器参数本身就低还是照片糊得没有细节，只能缩小3%~5%的体积。

ImageOptim里对JPEG的优化用到两个工具：JpegOptim和Jpegtran，跟PNG优化那几个工具类似，多次尝试不同的编码方式，找一个效率最高的。从下图可以看出来，大约把110G的图片缩到55G。

![Network Traffic ](http://qingpei.me/images/in_post/imageoptim_net.png)

可是搜索最优编码可是耗费了大量的磁盘写操作，1.71TB！每张图都不大，为什么要写到磁盘，而不是内存里面暂存着，找到最优直接写最优结果呢……MLC的SSD伤不起啊。

![Disk Read/Write](http://qingpei.me/images/in_post/imageoptim_disk.png)

估计把/tmp映射到内存盘，可以解决这个问题。

更好的方案应该是改改工具的代码，这个记到TODO里面去。
