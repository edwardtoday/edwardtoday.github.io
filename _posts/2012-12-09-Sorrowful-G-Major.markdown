---
layout: post
title: G大调的悲伤
description:
keywords: 
date: 2012-12-09 23:43:40
tags:
- Song
---

<!-- <br></br> -->

<div class="audiocontainer">
	<div class="mc" style="margin-bottom: 2em;">
	<audio src="http://files.qingpei.me/a/G大调的悲伤_edwardtoday.mp3" type="audio/mp3" controls="controls">
	<itext id="lyrics_a" lang="zh" type="text/lrc" display="yes" src="/song/lrc/G大调的悲伤_edwardtoday.lrc" category="LRC"></itext>
	</audio>
	<h1 id="lyricsline"></h1>
	</div>
</div>

Songwriters: SCHLESINGER, ADAM L.

<br/>
作词：文雅

作曲：李伟菘

<br/>

去年圣诞腾空的烟花

刚好一场大雪也落下

摊开寂寞手掌

捧着冻得通红我滚烫的脸颊

想起一辈子那句话

<br/>

转眼又是北京的炎夏

什刹海又开满了荷花

越过了旧砖墙

那排法国梧桐多繁茂的枝桠

听到一曲G大调巴哈

<br/>

四季风景在我的窗前悬挂 人海涨落在我的心里变化

流转的时光 褪色的过往 岁月有着不动声色的力量

四季风景在我的窗前悬挂 人海涨落在我的心里变化

当曲终人散场 我终于听懂G大调有多悲伤

<br/>
转眼又是北京的炎夏

什刹海又开满了荷花

越过了旧砖墙

那排法国梧桐多繁茂的枝桠

听到一曲G大调巴哈

<br/>
四季风景在我的窗前悬挂 人海涨落在我的心里变化

流转的时光 褪色的过往 岁月有着不动声色的力量

四季风景在我的窗前悬挂 人海涨落在我的心里变化

当曲终人散场 我终于听懂G大调有多悲伤

<!--[if lt IE 9]>
	<script src="/js/mediaelement/mediaelement-and-player.min.js"></script>
	<link rel="stylesheet" href="/js/mediaelement/mediaelementplayer.min.css"/>
	<script>
		$('audio,video').mediaelementplayer();
	</script>
<![endif]-->

<script type="text/javascript" src="/js/itext/itext.min.js"></script>
<script type="text/javascript">
var audio = document.getElementsByTagName("audio")[0];
  // parse itexts and create an invisible menu for them
  var itexts=new ItextCollection(jQuery(audio), "lyricsline");
  // set callback for audio
  audio.addEventListener("timeupdate", function() {
  	if (audio.paused || audio.ended) {
  		return;
  	}
  	itexts.show(self.audio.currentTime);
  }, false);
</script>
