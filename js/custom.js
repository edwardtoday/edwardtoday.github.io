function onload() {
    // Your onload code goes here to initialize your page.
    // Finally, schedule a call for a second round of low-priority initialization.
    window.setTimeout(afterload, 1);
    prettyPrint();
  }

  function afterload() {
    // Called a few ms after the page has loaded.
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29345258-1']);
  _gaq.push(['_trackPageview']);

  // Reset dynamo span height
  $(window).resize(function() {

  });

  // Enable popovers
  $('.popover-test').popover()
  $("a[rel=popover]")
  .popover()
  .click(function(e) {
    e.preventDefault()
  })
