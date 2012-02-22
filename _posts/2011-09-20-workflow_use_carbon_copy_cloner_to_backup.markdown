---
date: '2011-09-20 13:38:55'
layout: post
slug: workflow_use_carbon_copy_cloner_to_backup
status: publish
title: 'Workflow: Use Carbon Copy Cloner to Backup'
wordpress_id: '38065'
categories:
- Life at Hong Kong
tags:
- App
- Apple
- Car
- Carbon Copy Cloner
- Dropbox
- Firewire
- Mac
- SSD
- ThunderBolt
- USB
- Work
- Workflow
---

在renren上发了个状态问大家的意见，longbow说写写Time Machine。




从技术上看，Time Machine就是个封装过的rsync，在备份的时候，开Activity Monitor看一下，有个rsync进程很忙碌的。




# Time Machine：Pros and Cons




最大的优点就是，插上一个移动硬盘，不管是USB的、Firewire的还是ThunderBolt的，系统会问你是不是把这个盘用于Time Mahine备份，给个肯定答复，一切就都备份了。没有比这更简单的了，Windows Backup哪怕到了Windows 7，都会问用户这样那样的问题，比如是不是做个系统镜像啊，除了用户文件和库里的文件，还有哪些要备份啊？不是说这样不可以，但是用户真的很可能无法区分系统和他自己的文件，无法区分哪些文件是在Library里面的，甚至根本没有意识到Windows 7多了个叫做Library的概念。如果用户这时候因为不知道而点错了，之后想恢复数据发现没有备份，用户会怪微软，而微软看起来确实没责任，选择是用户作出的。Time Machine没这个问题，除非用户多此一举把某个位置排除在备份之外，其他的统统备份，在geek看来很傻很浪费资源，不过在“用户”看来，就是保障了。




再有就是恢复界面比较，呃，称之为与系统接轨吧⋯⋯想恢复文件、文件夹，Finder选中它，点Time Machine图标就好了，然后就开始时空穿梭了，如果磁盘比较慢的话，还能发现穿越不是匀速的，是一个跳跃接另一个跳跃⋯⋯




缺点呢，就是所有让用户看到的都太简单了，以至于进阶用户们想干点啥，有些做不了，做得了的那部分，也搞得跟hack一样需要去terminal里面调整系统配置。要设置quota？要从备份的磁盘启动？我是没有研究过怎么做，也不确定是不是能做到。




更大的缺点就是，慢！备份的时候慢，恢复的时候还是慢。




# 我对备份的期望






  * 首当其冲就是备份得和源文件一致。不仅仅是文件内容，还包括文件的权限。权限乱了套，对于自己的数据可以chown给自己，要是系统或者应用程序的组件，恢复回来也基本上用不了。


  * 要快，我的要求就是比Time Machine快⋯⋯


  * 要自动备份，不能每次等我命令才做事。备份这么耗时的任务，当然主要放在半夜三更或者凌晨做了，那时候我哪有空给指令啊。


  * 系统备份得是bootable的，这是我对Time Machine最不满的一点。想想万一系统盘挂了，从Time Machine恢复得几个小时（以我上个礼拜从Firewire400恢复到SSD的实例来看），我肯定从Pegasus R4/R6通过ThunderBolt恢复肯定更快，不过如果备份盘可以启动的话，哪怕是我用的Firewire400，也只要一分钟左右就可以有一个近乎一样的系统了，区别就是上次备份到现在对系统做的修改。我想文档改起来比较频繁，系统配置不至于天天改的吧？文件有Dropbox同步，启动好了联网同步，也很方便。




# Carbon Copy Cloner




这家伙也是个披着羊皮的rsync。不过对我来说比Time Machine好用些。![Carbon copy cloner logo](http://qingpei.me/wordpress/wp-content/uploads/2011/09/carbon_copy_cloner_logo.jpg)




如果备份系统盘，那么这显然比Time Machine好使，因为备份结束后，那个备份盘可以启动，没什么区别。




一开始我们只有系统A，下载了免费的Carbon Copy Cloner (CCC)。




然后启动A，运行CCC，做一个系统A的备份，叫B好了。




万一A挂了，可以直接用B启动，该做什么做什么，空下来的时候，运行B里的CCC把B恢复到A所在的分区，然后继续工作或者重新启动到A。




这与一旦A挂了，用OSX安装程序，或者Lion的Recovery分区启动，花几个小时从Time Machine恢复相比，决定性的优势就是省掉了这几个小时的等待，把这个恢复推迟到任意一个自己期望的时刻。




风险是万一推迟的这段时间，B也挂了，那就game over了。Time Machine作为一个面向大众的设计，就设计成了将仅有一个copy的时间缩减到最短的方案，一旦数据出问题，立刻恢复，尽快保持有两个或两个以上copy的状态。




与必须等待几小时恢复相比，我更偏好承担风险，拥有立刻开工的能力。风险可以通过增加备份搞定，而就算有再多个Time Machine备份，还是得等那几个小时⋯⋯




如果你真的喜欢这几小时的等待，那么启动B之后，第一件事就打开CCC，将B恢复回A，虽然等待的时间短点，但好歹也是类似的用户体验了。而且这等待期间，还能上上网，收收邮件，做些磁盘访问不那么频繁的任务。




## More on CCC




因为CCC支持备份到磁盘镜像，所以如果像我这样只带了一个500G的外置盘，不想全用于备份的话，可以用Disk Utility生成一个200G的可读可写的磁盘镜像，然后告诉CCC备份到那个镜像去，这样就算开了Archive的功能，备份也不会塞满整个500G。




也因为磁盘镜像的缘故，备份可以被AES加密。




对于网络上的共享空间，Time Machine需要一点点配置才能用（如果那个空间不是Apple家Time Capsule提供的话），CCC倒可以直接用。




 




总之就是牺牲了一点易用性，增加了一些可控性。对于一个有一定电脑使用经验的人来说，应该会喜欢后者吧？
