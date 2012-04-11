---
date: '2011-09-19 19:52:55'
layout: post
slug: workflow_use_dropbox_to_synchronize_among_devices
status: publish
title: 'Workflow: Use Dropbox to Synchronize Among Devices'
wordpress_id: '38201'
categories:
- Life at Hong Kong
tags:
- Android
- BlackBerry
- Bookmarks
- Dropbox
- Eclipse
- Emacs
- GIT
- iPad
- iPhone
- Mac
- Reading
- Work
- Workflow
---

越来越多的人拥有超过一台电脑了，公司一台、家里一台、学校一台、实验室一台等等。现在手机可能也要加入数据共享的行列了，有些人可能需要自己的手机能随时访问公司某台电脑上的某个文件，或者希望手机拍了照片，能够自动同步到家里电脑的相册里面并且在另一处留个备份。

我是用Dropbox来做同步的。有其他选择，甚至自己装台linux机器，配好dyndns和rsync、samba、afp、ftp等服务也能达到目的，不过就是“强大，但是折腾”。

[![Logo](http://qingpei.me/images/in_post/logo.png)](http://www.dropbox.com)用一句话来概括就是把一个文件夹存到云上去，在多个设备间同步。

有PC、Mac、Linux，也有iPhone、iPad、Android、Blackberry版本。基本上一网打尽了。


# 只有一个文件夹，会不会太少了？


有这个想法，很可能没有用过hard link、symbolic link之类的功能，一句“ln -s source target”就可以把任何一个文件夹包含到dropbox目录里面。Windows用户可能会对[Junction](http://technet.microsoft.com/en-us/sysinternals/bb896768)感兴趣，NTFS也是可以做链接的。

几个月前有篇文章，是分析Dropbox为什么成功的，其中一点就是因为Dropbox只同步一个文件夹。有很多功能vs一个完美的功能，后者更有可能成功，Dropbox就是一个例子，稳定而快速地同步仅仅一个文件夹。


## More on Symbolic Links


以我同步Safari的书签、历史记录等信息为例，这些内容Safari存在~/Library/Safari下面。我的Dropbox目录就在~/Dropbox。

于是在一台机器A上，执行


    
    
    ln -s ~/Library/Safari ~/Dropbox/Safari
    



Dropbox目录里就会出现一个Safari目录，并将其同步到服务器上。另一台机器B上，过一会也会在Dropbox目录下出现这个Safari目录。假设机器B上的Dropbox目录在~/Documents/Dropbox/，在机器B上执行


    
    
    rm -rf ~/Library/Safari
    ln -s ~/Documents/Dropbox/Safari ~/Library/Safari
    




再打开Safari，就能看到机器A上的书签和历史记录了。

如果仅仅想要同步书签，那么不用对整个目录做链接，只链接Bookmarks.plist就可以了。


# 我在墙内，怎么办⋯⋯


墙内同步我记得只要[改hosts文件](http://forums.dropbox.com/topic.php?id=19830&page=2)就可以了，下载dropbox的话，墙内有个很强悍的东西叫做迅雷！


# 同步什么东西呢？


我同步了不少东西：



	
  * 各种IM的聊天记录

	
  * 课件。在学校下载了课件和作业，回房难道再下一遍么？还是用U盘复制过去？其实回去发现已经在家里电脑上了不是更好？

	
  * dotfiles。比如.emacs, .bashrc, .gitconfig之类的文件。这个同步了之后，链接到~/下面就可以了。

	
  * Safari的书签、历史等等。比如我再Air上看网页看到一半，回去想用另一台机器看，什么都不用做，历史里面找最后几条记录就行了。这个同步~/Library/Safari就行。

	
  * 当前项目，Eclipse Workspace等。主要是一些跨平台的项目，PC上可以打开来做，Air也可以。

	
  * org files。Emacs org-mode那么好用，一堆org文件没道理不同步的。随处都可能记笔记，与其花时间整合，不如同步一下，记在一起。

	
  * reading list。一个专门放近期要读的文件，可能是论文，可能是某个manual，也可能是某篇blog文章save as的。相当于GTD里面的inbox，只不过专门对付阅读任务。


其实还有很多其他东西可以同步的，比如游戏存档、replay之类的。只要个人有需求，用链接也好，移动也罢，总能通过Dropbox同步。
