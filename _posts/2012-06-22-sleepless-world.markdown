---
layout: post
title: 全世界失眠
description:
keywords:
date: 2012-06-22 18:49:00
tags:
  - Song
---

<div class="audiocontainer">
	<div class="mc" style="margin-bottom: 2em;">
	<audio src="http://files.qingpei.me/a/%E5%85%A8%E4%B8%96%E7%95%8C%E5%A4%B1%E7%9C%A0_edwardtoday.mp3" type="audio/mp3" controls="controls">
	<itext id="lyrics_a" lang="zh" type="text/lrc" display="yes" src="/song/lrc/%E5%85%A8%E4%B8%96%E7%95%8C%E5%A4%B1%E7%9C%A0_edwardtoday.lrc" category="LRC"></itext>
	</audio>
	<h1 id="lyricsline"></h1>
	</div>
</div>

作词：林夕 作曲：陈伟 编曲：陈伟

想起我不完美　你会不会

逃离我生命的范围

想着你的滋味　我会不会

把这个枕头　变得甜美

想起白天的约会　忘了晚上的咖啡

只怕感情如潮水　远离我梦中的堡垒

一个人失眠　全世界失眠

无辜的街灯　守候明天

幸福的失眠　只是因为害怕闭上眼

如何想你想到六点　如何爱你爱到终点

想起我的时候　你会不会　好像我一样不能睡

想像你的暧昧　我会不会　数不到绵羊　一双一对

想起白天的约会　忘了晚上的咖啡

只怕感情如潮水　远离我梦中的堡垒

一个人失眠　全世界失眠

无辜的街灯　守候明天

幸福的失眠　只是因为害怕闭上眼　如何想你想到六点

一个人失眠　全世界失眠

幸福的失眠　只是因为害怕闭上眼　如何想你想到六点

如何爱你爱到终点　如何爱你爱到终点

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
