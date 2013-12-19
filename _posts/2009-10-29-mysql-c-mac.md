---
layout: post
title: 'MySQL C++ mac...'
date: 2009-10-29 17:13
comments: true
category: 
---
    

近日着手数据库大作业。
首次使用MySQLd的C++ Connector，能找到的教程统统是leopard甚至tiger下的。折腾了一整个晚上还是不断向我报error。不管是eclipse还是xcode。
我觉着吧，问题就是那个lib是i386的，现在内核更新了，支持64位了，估计得重编译。
可是编译它又要CMake，编译CMake又要gettext等等一堆东西。 虽然装了macports，但是学校这个网速⋯⋯

不得已啊，转投ubuntu门下，学校有个镜像就是不一样，不管是mysql还是eclipse，下载速度都是以MB为单位的，几分钟就装好了。可是啊可是，VM毕竟是VM，处理文件的速度不行啊。mysql做个query的速度就是比在mac下慢⋯⋯
原来分给它512MB内存的，现在做个实验，光一个树形结构据说就要分配400多MB内存，这东西还不能放在虚存里，不然这ms计算的性能要求还不够硬盘寻道的⋯⋯只好又分了1G内存给ubuntu⋯⋯

为了更好地实现VM下的数据与主机同步，把关掉了n久地svn服务又启动，就仰仗它了。mac下把ssl连接搞定，谁知道ubuntu下连不上，关了ssl就行⋯⋯波折啊。反正是内部交换一下数据，直连就直连吧。

上午又不甘心地尝试了一下jdbc，mac下立马可以连接mysql了。真是爱死java了！！！可惜明确要求c/c++⋯⋯java留着自娱自乐吧。

这学期基本就是被Database和Infomation Retrieval霸占的一学期。现在开始写IR的第一份代码。
