---
layout: post
title: 不如这样
description:
keywords:
date: 2012-05-18 19:01:00
tags:
  - Song
---

<div class="audiocontainer">
	<div class="mc" style="margin-bottom: 2em;">
	<audio src="http://files.qingpei.me/a/%E4%B8%8D%E5%A6%82%E8%BF%99%E6%A0%B7_edwardtoday.mp3" type="audio/mp3" controls="controls">
	<itext id="lyrics_a" lang="zh" type="text/lrc" display="yes" src="/song/lrc/%E4%B8%8D%E5%A6%82%E8%BF%99%E6%A0%B7_edwardtoday.lrc" category="LRC"></itext>
	</audio>
	<h1 id="lyricsline"></h1>
	</div>
</div>

作曲/编曲/监制:陈伟 填词:林夕

天快亮了 你的心呢 他曾经属于我的

我该走了 你的手呢 有没有一点点舍不得

每一件不得不放手的玩具 总算带来过快乐

每一段不得不完结的关系 只是一种选择

如果美好记忆 还算难忘

为什么 还会记得悲伤

*不如这样 我们一直拥抱到天亮

如果关怀是种补偿 还有什么不能原谅

倒不如这样 我们回到拥抱的现场

证明感情总是善良 残忍的是人会成长

来的来了 走的走了 我们还要求什么

你是我的 我是你的 只是一首太温柔的歌

如果美好记忆 还算难忘

为甚么还会记得悲伤

repeat *

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
