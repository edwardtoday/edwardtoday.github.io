---
layout: post
title: "Coding Standards"
description: ""
tagline: ""
category: "programming"
tags: [c++]
published: true
---

看Stroustrup主页的时候，发现了这么个文档

[Joint Strike Fighter Air Vehicle C++ Coding Standards](http://www.stroustrup.com/JSF-AV-rules.pdf)

Lockheed Martin公司出品。

适用于战斗机系统的标准，可以说比我能接触到的几乎所有代码的要求都要严格了。粗略看了下确实如此。这里面的规则，我平时写代码违反的多了去了。以往，包括现在的业务逻辑里，string、int、long等等各种类型，想转就转，罕见需要考虑精度损失的；只要是标准库，想用就用，难得有平台竟敢实现得不一致的情况。其他诸如函数不可超过200行、复杂度必须足够低、代码不能使用除了multibyte char等等规范，更加没有被强制要求过。

或许接受一种规范最好的途径，就是参与开源项目，看代码，提交代码，然后看着自己的代码被批斗，敲打成符合项目采用规范的代码吧。
