---
layout: post
title: "独自开发的痛点"
description: ""
tagline: ""
category: "programming"
tags: [iOS]
published: true
---

来到公司，照例打开 Xcode，build，一个error出现。

```
error: cdtool cannot compile
```

这是什么鬼？Xcode 7.0 beta 4 出问题了吗？那就用 Xcode 6.4 吧。再次build。

```
Command /Applications/Xcode.app/Contents/Developer/usr/bin/ibtool failed with exit code 255
```

前面一堆具体错误信息，都是些 `Dyld Error Message: Library not loaded` 。

Clean 无效，Clear All Derived Data 无效，改模拟器作为 destination 同样无效。然后我发现了这篇 [El Capitan beta 6 + Xcode](https://forums.developer.apple.com/message/35849) 。升级个系统，稳定版和测试版 Xcode 同时挂掉。Apple 你干得漂亮！

Apple 也说了这是 beta，不要用于生产环境。但是我得在 iOS 9 正式亮相前确认自家 app 的兼容性。真的要再分个区做双系统吗？一个 OSX + XCode，一个 OSX beta + Xcode beta ？

据说覆盖安装 10.11 beta 5 的升级包可以解决问题，但是会导致系统很多莫名的问题，典型的如声音没了，有人关 SIP 解决，有人说没用。

以公司的网速，升级包等我吃完饭就能下载好了。不管怎样，先试试看再说吧。