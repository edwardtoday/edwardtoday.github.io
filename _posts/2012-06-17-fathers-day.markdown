---
layout: post
title: 父亲节
---
今天父亲节。

昨天从五点钟开始录音，然后After Effects做片头，再加入相片用Premiere Pro导出视频，最后再慢慢上传，做了一个独立的专题页面。

[**http://qingpei.me/fathersday2012/**](http://qingpei.me/fathersday2012/)

制作过程既自然而然又充满折腾，且听我一一道来。

# 音轨

上个月18号下单购买的麦克风，经过20多天，漂洋过海，途经京城，终于到了。关于麦克风的介绍，在论坛发了[一篇文章](http://www.chiphell.com/thread-496952-1-1.html)，有兴趣可以去看。

父亲节录什么歌是个问题。这年头恋上了、失恋了、三角恋了、同性恋了，都有许许多多流行歌曲适合，但是正经的唱给父母子女的歌，怎么搜都得回到十年前甚至更早期。经过一番试听，果断放弃了刘和刚的《父亲》，太专业了……感觉筷子兄弟的《父亲》挺好听，也不难学，就找了伴奏开始尝试。

![Audition](http://qingpei.me/images/in_post/adobe/Audition_CS6_mnemonic_RGB_50px.png)
制作用的是Adobe Audition，录上个五遍六遍的，就开始挑选。我不喜欢一句句拼，整首歌顶多三四段，分别来自效果相对较好的某一轨。早上五点钟左右开始录，大概八九点钟完成导出。

<audio src="http://files.qingpei.me/a/father_edwardtoday.mp3" controls>
Your browser does not support the audio element.
</audio>

# 照片

Aperture里屯了许多照片，把以前的library一个个打开搜寻。好在某个暑假里把家里的大部分老照片用数码相机翻拍了一遍。画质很差，但是这保存年限就长很多了。何况老照片的价值完全不在于画质。

作为一个长期在镜头后而不是镜头前的人，我的照片库里没多少我自己的照片，但是这次真的发现父母的照片更加少。今后有空应该多拍点~

# 视频部分

![AE](http://qingpei.me/images/in_post/adobe/After_Effects_CS6_mnemonic_RGB_50px.png)
片头很简单，就歌曲名、原唱和我自己的ID。在videocopilot.net上找到[一个教程](http://www.videocopilot.net/tutorials/procedural_crumble/)，就在其基础上改了改，做了三个片段。这么100帧视频，渲染将近300秒，导出来一个600多MB的AVI，真当硬盘不要钱。

<video autoplay loop tabindex="0" margin="0 auto">
  <source type="video/mp4" src="http://files.qingpei.me/v/ae.mp4">
  <source type="video/ogg" src="http://files.qingpei.me/v/ae.ogv">
  <source type="video/webm" src="http://files.qingpei.me/v/ae.webm">
</video>

![Ps](http://qingpei.me/images/in_post/adobe/Photoshop_CS6_mnemonic_RGB_50px.png)
歌词手写，拍照，Photoshop切成条状，供视频使用。（我承认字没以前好看行不……）

![Pr](http://qingpei.me/images/in_post/adobe/Premiere_Pro_CS6_mnemonic_RGB_50px.png)
用Premiere Pro做的slideshow，也没加什么特效，就根据音轨长度算了一下平均每张照片多少帧，然后导进去加到video track。

导出视频的过程真叫一个纠结。因为是个slideshow，我估摸着合适的场景是接到电视上看，于是就用了1080p的尺寸。这个选择真是突出一个电脑龟速啊！5分01秒的视频，导出H.264视频花了整整三个小时啊！开始导出之后，我洗了衣服、出去吃了个饭、回来洗了个早、刮了胡子、刷了微博，还没有结束啊！这是在提示我CPU该升级了么……亏得我没有用Air做视频编辑，老老实实用的台式机，i5 2300的CPU按说不慢了吧？！？！

# HTML5

做好的视频传到了[YouTube](http://www.youtube.com/watch?v=goUJjXHFO4o)和[优酷](http://v.youku.com/v_show/id_XNDE0NjIxMDg0.html)，在[开篇提到的页面](http://qingpei.me/fathersday2012/)里，显然不方便嵌一个墙外的东西，于是嵌了优酷的播放器。电脑上看挺好，掏出手机一瞧，flash碰上iOS又悲剧了。

这可不有点不完美么，得改！于是按照[Blake Walters的方法](http://viget.com/extend/quickly-converting-to-html5-video)用HandbrakeCLI、ffmpeg和ffmpeg2theora转码。ffmpeg用homebrew顺利安装，ffmpeg2theroa安装的时候报错，没有试图解决，直接去官网下了个安装文件。

转好的视频直接加到`<video>`里面就OK了(实际上那个页面用了videojs，估计以后就干脆直接写`<video>`了，比如上面那个After Effects的效果。)，测试了以下组合，都可以播放。

* Windows + Firefox
* Windows + Chrome
* Windows + IE9
* OS X + Safari
* OSX + Chrome
* iPhone 4S + Safari

相册是用[Juicebox](http://www.juicebox.net/)生成的，同样全平台测试没问题。我还在找合我口味的HTML5 gallery和portfolio的呈现方法，慢慢试验。

# 后话

专题页面做了一整天。我估计熟练工加更快的CPU和网络可以把这个时间大幅缩短。另外，不少工作适合写成脚本，比如视频转码，比如照片尺寸修改，再比如从Skydrive的嵌入代码生成文件外链之类的。想偷懒的话，总有各种让机器代劳的方法~
