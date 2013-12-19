---
layout: post
title: 'Workflow: Use Homebrew for Missing Unix Tools in OS X'
date: 2011-09-27 10:46
comments: true
category: 
tagline: 
tags: []
---
    

虽然OS X希望将用户任务变得简单，不用面对命令行，但有时候难免会觉得特定任务用命令行比上网找个专门的GUI软件好多了。

比如上次找Sweave的资料时，想把一个路径下的文件都下载下来，包括一些.R, .tex, .Rnw, .Snw之类的一堆源文件。在56K Modem拨号的年代，我装了软件来下载内容离线浏览，现在这个带宽，早就抛弃了。

上面是用来伪装的引子，其实就是很久没用MacPorts，再经历各种系统升级、换机，ports需要重装了，就看到更简洁的[Homebrew](http://mxcl.github.com/homebrew/)。

# Install Homebrew

就一句话，命令行执行：

    
    /usr/bin/ruby -e "$(curl -fsSL "

当然了，从参数也看出来需要网络连接了。我之前装了Xcode，于是我确实没在意究竟需不需要gcc之类的东西。

# Example: wget

以前面说的下载某路径下全部文件为例：

    
    brew install wget
    wget -r --no-parent http://qingpei.me
    

就可以下载一个离线站点了（前提是这站是静态的，wordpress数据库这样室抓不来的）。
