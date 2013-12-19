---
layout: post
title: 'Typography matters'
date: 2012-07-01 17:47
comments: true
category: 
tagline: 
tags:
---
    

网站换了字体，很久以前就用上了Typekit，以Wordpress插件的形式。但后来不用Wordpress，改用Jekyll了，也就一直没关注这个事情。

此前一直用的是`font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;`。这是Twitter Bootstrap的默认值，也是很多站点的默认值。看起来是这样的：

<p style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

有部分人支持只指定serif或是sans-serif，并通过测试说这样的效果最好。下面是`font-family: sans-serif;`的样子，至少在我的Lion+Chrome下，明显不如上面的效果。

<p style="font-family:sans-serif">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

长期只做slides而不为报告的字体操心，习惯了sans-serif。现在倒是又觉得正文用serif可读性更强些。
加上前两天在Typekit里看到了原先中意的Calluna，就用它了。现在的正文是`font-family: "calluna-1","calluna-2",georgia,serif;`：

<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

自我感觉大段文字看下来，比默认的那个轻松些。如果不用第三方字体的话，georgia真是很好的选择，原来在公司写文档都是用georgia作为正文字体的，看起来比Times New Roman舒服多了。下面是`font-family: georgia,serif;`的效果：

<p style="font-family:georgia,serif">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

而默认党支持的`font-family: serif;`在我目前这个系统加浏览器组合下，惨不忍睹……

<p style="font-family:serif">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

请注意我只改了字体，而没有改字号。之前默认字号是13，我觉得小了（是因为11″ Air ppi太高了么……），现在改到16了。以上所有段落的字号都是16px。

至于标题字体，改用Nimbus Sans了。这个差别不大，我是奔着我自己看不出来的，传说中Typekit提供的更好的字体渲染去的。对比一下：

`font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;`

<h1 style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:48px;padding-bottom:30px;">
Typography matters
</h1>

`font-family: "nimbus-sans-1","nimbus-sans-2","Helvetica Neue",Helvetica,Arial,sans-serif;`

<h1 style="font-size:48px;padding-bottom:30px;">
Typography matters
</h1>

我本地写文章的时候，Typekit字体看不到啊，上线就能看出具体什么差别了。我现在至少知道如果fallback到Arial的话，差别挺大。对于默默花钱买了Helvetica Neue的Mac用户们，这算是个小小安慰吧。

最后呢，推荐两篇Calluna设计者的文章：[A Guide to Web Typography](http://ilovetypography.com/2008/02/28/a-guide-to-web-typography/)以及[On Choosing Type](http://ilovetypography.com/2008/04/04/on-choosing-type/)。
