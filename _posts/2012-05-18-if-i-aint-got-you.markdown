---
layout: post
title: 如果没有你
description:
keywords:
date: 2012-05-18 09:33:00
tags:
  - Song
---

<div class="audiocontainer">
	<div class="mc" style="margin-bottom: 2em;">
	<audio src="http://files.qingpei.me/a/%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E4%BD%A0_edwardtoday.mp3" type="audio/mp3" controls="controls">
	<itext id="lyrics_a" lang="zh" type="text/lrc" display="yes" src="/song/lrc/%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E4%BD%A0_edwardtoday.lrc" category="LRC"></itext>
	</audio>
	<h1 id="lyricsline"></h1>
	</div>
</div>

作曲：左安安 填词：李焯雄

编曲：周恒毅 监制：薛忠铭

配唱制作人：李偲菘 / 李伟菘

hey 　我真的好想你

现在窗外面又开始下着雨

眼睛干干的　有想哭的心情

不知道你现在到底在哪里

hey　我真的好想你

太多的情绪　没适当的表情

最想说的话我该从何说起

你是否也像我一样在想你

如果没有你　没有过去　我不会有伤心

但是有如果还是要爱你

如果没有你　我在哪里　又有甚么可惜

反正一切来不及　反正没有了自己

hey　我真的好想你

不知道你现在到底在哪里

hey　我真的好想你

现在窗外面又开始下着雨

眼睛干干的　有想哭的心情

不知道你现在到底在哪里

hey　我真的好想你

太多的情绪　没适当的表情

最想说的话我应该从何说起

你是否也像我一样在想你

如果没有你　没有过去　我不会有伤心

但是有如果还是要爱你

如果没有你　我在哪里　又有甚么可惜

反正一切来不及　反正没有了自己

hey 　我真的好想你

不知道你现在到底在哪里

你是否也像我一样在想你

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
