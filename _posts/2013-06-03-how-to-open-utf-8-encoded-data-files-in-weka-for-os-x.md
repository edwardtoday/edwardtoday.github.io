---
layout: post
title: 'How to open UTF-8 encoded data files in Weka for OS X'
date: 2013-06-03 16:47
comments: true
category: 
tags:
---
    


In the [Weka wiki](http://weka.wikispaces.com/Can+I+process+UTF-8+datasets+or+files%3F), it shows how to open data files with characters not in the default ANSI or whatever English encoding.

However, we do not have that "RunWeka.ini" for "Weka.app" under OS X. Therefore we cannot change the value of *fileEncoding* from "Cp1252" to "utf-8" as we do on Windows.

When I googled this issue, the first several posts discussed about the "Info.plist" file inside "Weka.app". Some say there is no attribute called *fileEncoding*. That's true. But that file is exactly what we need to edit to solve this problem.

So here is the solution:

1. Open a Finder window, go to where "Weka-*-*-*.app" is located.
2. Right click or Ctrl+click on the application file, choose "Show Package Contents".
3. Open "Contents/Info.plist" with TextEdit, TextMate, Vim, Pacifist or any other text editor.
4. Find a key called "VMOptions". Its default value is "<string>-Xmx1Gb</string>". Change that to "<string>-Xmx1Gb -Dfile.encoding=utf-8</string>". (Exactly parameter what the Weka wiki tells us to add to command line.)
5. Done. Open the app, load some data file and see if it works.
