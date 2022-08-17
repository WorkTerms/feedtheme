/* This Tag is fired using Custom HTML on Google Tag Manager
 * For more information please visit https://tagmanager.google.com/
 * 
 * ========================================================
 * <div id='₠Quantum'>
 * <script>document.write("<scr"+"ipt async>
 * (function(s,y,n,t,a,x){a=y.createElement(n);x=y.getElementsByTagName(n)[0];
 * a.async=1;a.src=t;a.dataset.QuantumId='172913910143';a.dataset.QuantumPlatform='gtm';
 * x.parentNode.insertBefore(a,x)})(window,document,'script','//eq19.com/grammar/init.js');
 * </scr"+"ipt>");</script>
 * </div>
 * ========================================================
 * you may use Container Injector point to GTM-PGWT4RS
 *
 * ₠Quantum Project https://www.eQ19.com
 * Copyright © 2022 All rights reserved.
 */
jQuery(function($)
{
	// jQuery document.ready will be executed just after html dom tree has been parsed out.
	// So it is far more earlier executed than window onload.
	$(document).ready(function()
	{
		// to stick navbar on top and hash
		top_menu_height = $('.top-menu').height();
		$('html,body').scrollspy({target: '#templatemo-nav-bar', offset: top_menu_height + 10});

		// do scroll and clear the hash anytime someone arrives with a hash tag
		// https://stackoverflow.com/a/50688363/4058484
		if( typeof(location.hash) !== 'undefined' && location.hash.length ) 
		{
			var location_hash = location.hash.split('?')[0];
			history.replaceState(null, null, location.pathname);
			scrollTo(location_hash);
		}

		// set links which point outside
		$('.external-link').unbind('click');
		$(document.links).filter(function() {
			return this.hostname != window.location.hostname;
		}).attr('target', '_blank'); 

		// scroll to top
		$('#btn-back-to-top').click(function(e)
		{
			e.preventDefault();
			scrollTo('#templatemo-top');
		});

		// scroll to specific id when click on link
		$('.internal-link, .carousel-inner a').click(function(e)
		{
			e.preventDefault(); 
			var linkId = $(this).attr('href');
			scrollTo(linkId);
			return false;
		});

		// scroll to specific id when click on menu
		$('.top-menu .navbar-nav a').click(function(e)
		{
			e.preventDefault(); 
			var linkId = $(this).attr('href');
			scrollTo(linkId);
			if($('.navbar-toggle').is(":visible") == true)
			{
				$('.navbar-collapse').collapse('toggle');
			}
			$(this).blur();
			return false;
		});

		// scrollspy to auto active the nav item
		$('.top-menu').stickUp(); 

		// gallery category
		$('.templatemo-gallery-category a').click(function(e)
		{
			e.preventDefault(); 
			$(this).parent().children('a').removeClass('active');
			$(this).addClass('active');
			var linkClass = $(this).attr('href');
			$('.gallery').each(function(){
				if($(this).is(":visible") == true){
				   $(this).hide();
				};
			});
			$(linkClass).fadeIn();  
		});

		// gallery colorbox
		$('a.colorbox').colorbox({
			rel: function(){
				return $(this).data('group');
			}
		});

		//portfolio
		$(".templatemo-project-gallery").simplyScroll();

	});

	// Draw #₠Quantum Skema
	// Window.onload event will be executed only when all page resources
	// ( images, audio, video etc ) has been downloaded in the page.
	// This API has been removed in jQuery 3.0; please use .on( "load", handler ) 
	// instead of .load( handler ) and .trigger( "load" ) instead of .load().
	// https://api.jquery.com/load-event/

	$(window).on('load', function()
	{
		// https://stackoverflow.com/q/15674733/4058484
		if (!$('#diagram').length) {
			{%- capture skema %}{% include feeds/skema.html -%}{% endcapture %}
			$('#₠Quantum').empty().append('{{ skema | strip }}');
		};

		// https://api.jqueryui.com/uniqueId/
		$('.theme').val('hand');
		$('.theme').each(function (i, e) {
			var id = uniqueId();
			var name = uniqueId();
			$(e).attr('name', name).attr('id', id);
		});

		// https://stackoverflow.com/a/10811687/4058484
		$.getScript($('#js')[0].href, function() {
			$.ajax({
				type: "GET",
				dataType: "xml",
				url: "/sitemap.xml",
				success: draw.getJSON(xml)
			});
		});  
	});

	// Scrollspy catch event
	$(window).on('activate.bs.scrollspy', function (event) {
		//if ($('#diagram svg').width() < $('#diagram').width()) draw.change();
	})

});

// init scrollTo 
var top_menu_height = 0;
function scrollTo(selectors)
{
	if(!$(selectors).length) return;
	var selector_top = $(selectors).offset().top - top_menu_height;
	$('html,body').animate({scrollTop: selector_top }, 'slow');
}

// filtering json object
function filterBy(data, filters = {}) {
	// Set up the specific defaults that will show everything:
	const defaults = {
		category: null,
		yearFrom: 1895,
		yearTo: 2100,
		gender: null
	}

	// Merge any filters with the defaults
	filters = Object.assign({}, defaults, filters);

	// Filter based on that filters object:
	return data.filter(laur => {
		return (laur.yearFrom >= filters.yearFrom) &&
		   (laur.yearTo <= filters.yearTo);
  });
}

// generate unique DOM ids
var myIdcounter = 0;
window.uniqueId = function(){
	return 'myid-' + myIdcounter++;
}
