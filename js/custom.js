function onload() {
	// Your onload code goes here to initialize your page.
	// Finally, schedule a call for a second round of low-priority initialization.
	window.setTimeout(afterload, 1);
}

function afterload() {
	// Called a few ms after the page has loaded.
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29345258-1']);
_gaq.push(['_trackPageview']);

// Reset dynamo span height
$(window)
	.resize(function() {

});

// Enable popovers
$('.popover-test')
	.popover()
$("a[rel=popover]")
	.popover()
	.click(function(e) {
	e.preventDefault()
})
$('html')
	.click(function(e) {
	$('.popover-test')
		.popover('hide');
});

$('.popover-test')
	.popover({
	html: true,
	trigger: 'manual'
})
	.click(function(e) {
	$(this)
		.popover('toggle');
	e.stopPropagation();
});

$('audio,video')
	.mediaelementplayer({
	success: function(player, node) {
		$('#' + node.id + '-mode')
			.html('mode: ' + player.pluginType);
	}
});

var audio = document.getElementsByTagName("audio")[0];
// parse itexts and create an invisible menu for them
var itexts = new ItextCollection(jQuery(audio), "lyricsline");
// set callback for audio
audio.addEventListener("timeupdate", function() {
	if (audio.paused || audio.ended) {
		return;
	}
	itexts.show(self.audio.currentTime);
}, false);
