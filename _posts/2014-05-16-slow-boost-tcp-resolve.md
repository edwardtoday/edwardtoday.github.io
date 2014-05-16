---
layout: post
title: "Slow TCP endpoint resolution"
description: ""
tagline: ""
category: "programming"
tags: [tcp,optimization,boost]
published: true
---

近来连续两个项目用了 [Boost.Asio](http://www.boost.org/doc/libs/1_55_0/doc/html/boost_asio.html)，略微感受了以下异步IO的优势。

这两天遇到个问题：在建立TCP连接的时候，总是要耗费很长时间（4秒上下）才调用 handler 。

加了几行输出之后找到花费时间最多的函数调用是 `boost::asio::ip::tcp::resolver::resolve()` 。功能是从输入的IP、端口号（或服务名如 `"http"`）解析出一系列用于连接的 endpoint 。

耗时长的原因我猜想是因为在国内多数ISP提供的网络里，解析IPv6的 endpoint 是办不到的。于是加限制，只解析IPv4 endpoint，果然解决问题。

修改前后的代码示例如下：

<script src="https://gist.github.com/edwardtoday/05c50d5cf9b38934e81f.js"></script>
