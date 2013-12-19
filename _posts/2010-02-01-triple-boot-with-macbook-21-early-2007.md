---
layout: post
title: 'Triple-boot with MacBook (2,1 early 2007)'
date: 2010-02-01 23:00
comments: true
category: 
tagline: 
tags:
---
    

去年国庆的时候重做了一次系统，当时是Snow Leopard + Windows 7 dual-boot。后来因为win 7的频频蓝屏让我不得不将其格掉换成win xp，顿时一切都安定了（VPN的连接稳定了，不过外接显示器的配置又繁琐了）。等到后半学期开始做各个大作业的时候，我发现让Linux蜗居在VMware里实在是有些影响速度：一来F1-F12被Mac占了，功能键得靠Fn搭配实现，麻烦；二来Mac以及一堆后台服务占了1g多内存，对于几个很能吃内存的工程，剩下的2g兼任cache和虚拟机RAM有些力不从心，而且我不能保证我需要放在RAM中的数据没有被VMware自动请到虚存里，对性能的测试就只好将就看看了。

这次回来，查了[相关文档](https://help.ubuntu.com/community/MactelSupportTeam/AppleIntelInstallation)，立即动手将整个硬盘格掉重新分区装系统做triple-boot，具体步骤如下：

  1. Boot with Snow Leopard Installation DVD. Use Disk Utility to re-partition the internal hard disk to get only 1 partition for Mac OS X.  
  2. Install Snow Leopard onto that partition.  
  3. Get all the updates installed (since some of them might modify the EFI partition and thus make rEFIt fail to work)  
  4. Use Boot Camp Assistant to install Windows 7, allocating space for both Windows and Ubuntu when partitioning the disk.  
  5. Install Windows 7 normally.  
  6. Startup Mac OS, install rEFIt (I chose to install support for ext2,ext3 file systems here) and enable it with enable-always.sh in Terminal.  
  7. Insert the Ubuntu live cd (or DVD or alternative cd, etc.) and reboot.  
  8. Choose to boot with the optical drive with a Linux icon in the rEFIt startup screen.  
  9. Install Ubuntu. Resize the windows partition to make room for Ubuntu. Install grub to the Ubuntu partition instead of the hd.  
  10. Configure Ubuntu to work better with MacBook.

到这里应该结束了，不过我启动了几回Ubuntu之后，换到Win7一次，然后再也进不了Ubuntu了。思考再三，我觉得可能是安装Ubuntu的时候用的是ext4而非ext3，而rEFIt没说支持ext4……于是从第7步重来，问题解决。

至此实现Snow Leopard + Windows 7 + Ubuntu 9.10 triple-boot。

这就是下学期毕业设计的辅助用机啦，主力机器应该是实验室的某台强机，还没见过面……
