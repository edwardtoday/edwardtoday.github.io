---
layout: post
title: 'Symbol Lookup Error'
date: 2013-12-18 16:00
comments: true
category: 
tags:
---

This post shows how to solve (partially) the "Symbol loopup error: undefined symbol ..." error.

I am currently working on a project which uses Google Logging Library (glog). The project is built with CMake. With the help of `FindGlog.cmake`, path to glog library is automatically found and set during `configure`.

Everything works just fine for the executable binary in the build directory. But after I run `make install` and run it in the installed dir, it says it cannot find some symbol "...alsologtostderr...".

With `ldd`, I find out the two binaries use libraries from different paths:

<script src="https://gist.github.com/edwardtoday/8018860.js"></script>

Obviously one of them finds glog at `/usr/local/lib` and the other at `/usr/lib64`.

I built and installed glog to `/usr/local/lib` and that is what CMake found. I do not know where the latter one comes from. There is no `libglog` found with `yum search`.

To solve the problem, I made a backup of `/usr/lib64/libglog.so.0.0.0`, replaced it with the copy in `/usr/local/lib` and the installed program runs without the error.

My exploration ends here. If you know why there is a different in search paths before/after the `install` process, you are more than welcome to leave a comment.
