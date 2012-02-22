---
date: '2011-05-31 22:34:46'
layout: post
slug: shu_shi_wu_du
status: publish
title: 熟视无睹
wordpress_id: '38095'
categories:
- Programming
tags:
- Debug
---

进入到了Alpha-Beta-…的被版本追赶的阶段，昨天上午有个搁置了一段时间没有修掉的beta blocker突然被置成最高优先级assign给我了。

代码的逻辑清晰明了，但是整个状态机跑起来就不是正确的结果。跟了一下午加一上午，各处设断点看变量的值，最后就改了一行，从代码来看，应该是当初作者paste之后没改函数调用的参数。

这一行我多少次单步执行过啊，就因为这东西是个SDK的API调用，返回值也是对的，就这么被玩弄了将近10个小时……

修那些导致crash的bug都比这个舒坦，当然，那些晾上几天之后才能出现的crash不在此列……
