---
layout: post
title: Way Back Into Love
description:
keywords: 
date: 2012-12-09 15:34:40
tags:
- Song
---

<!-- <br></br> -->

<div class="audiocontainer">
	<div class="mc" style="margin-bottom: 2em;">
	<audio src="http://files.qingpei.me/a/WayBackIntoLove_edwardtoday.mp3" type="audio/mp3" controls="controls">
	<itext id="lyrics_a" lang="zh" type="text/lrc" display="yes" src="/song/lrc/WayBackIntoLove_edwardtoday.lrc" category="LRC"></itext>
	</audio>
	<h1 id="lyricsline"></h1>
	</div>
</div>

Songwriters: SCHLESINGER, ADAM L.

<br/>
[Verse 1]
(Drew Barrymore)

I've been living with a shadow overhead, 

I've been sleeping with a cloud above my bed, 

I've been lonely for so long, 

Trapped in the past, 

I just can't seem to move on! 

<br/>
(Hugh Grant)

I've been hiding all my hopes and dreams away, 

Just in case I ever need 'em again someday, 

I've been setting aside time, 

To clear a little space in the corners of my mind! 

<br/>
[Chorus]
(Both)

All I wanna do is find a way back into love. 

I can't make it through without a way back into love.

Ooo hooow 

<br/>
[Verse 2]
(Drew Barrymore)

I've been watching but the stars refuse to shine, 

I've been searching but I just don't see the signs, 

I know that it's out there, 

There's gotta be something for my soul somewhere! 

<br/>
(Hugh Grant)

I've been looking for someone to she'd some light, 

Not somebody just to get me through the night, 

I could use some direction, 

And I'm open to your suggestions. 

<br/>
[Chorus]
(Both)

All I wanna do is find a way back into love. 

I can't make it through without a way back into love. 

And if I open my heart again, 

I guess I'm hoping you'll be there for me in the end! 

<br/>
[Middle-eight]
(Drew Barrymore)

There are moments when I don't know if it's real 

Or if anybody feels the way I feel 

I need inspiration 

Not just another negotiation 

<br/>
[Chorus]
(Both)

All I wanna do is find a way back into love, 

I can't make it through without a way back into love, 

And if I open my heart to you, 

I'm hoping you'll show me what to do, 

And if you help me to start again, 

You know that I'll be there for you in the end!

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
