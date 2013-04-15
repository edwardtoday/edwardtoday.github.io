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
(function(a){a.fn.dynamo=function(){return this.each(function(b,c){c=a(c);if(c.data("initialized")=="true")return;delay=parseInt(c.data("delay"))||3e3,speed=parseInt(c.data("speed"))||350,pause=c.data("pause")||!1,lines=c.data("lines").split(c.data("delimiter")||","),c.html(a("<span></span>").text(c.text())).data("initialized","true"),max=c.find("span:eq(0)").width();for(k in lines)span=a("<span></span>").text(lines[k]),c.append(span),max=Math.max(max,span.width());c.find("span").each(function(b,e){s=a(e).remove(),d=a("<div></div>").text(s.text()),d.width(max),c.append(d)}),height=c.find(">:first-child").height(),c.width(max).height(height).css({display:"inline-block",position:"relative",overflow:"hidden","vertical-align":"bottom","text-align":"left"}),c.data("center")&&c.css("text-align","center"),transition=function(){c.dynamo_trigger()},pause||setInterval(transition,delay)})},a.fn.dynamo_trigger=function(){return this.each(function(b,c){speed=parseInt(a(c).data("speed"))||350,a(c).find("div:first").slideUp(speed,function(){a(c).append(a(this).show())})})},a(".dynamo").dynamo()})(jQuery);