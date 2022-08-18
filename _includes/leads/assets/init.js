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

		// https://stackoverflow.com/q/15674733/4058484
		$('#₠Quantum').empty();
		if (!$('#diagram').length) {
			{%- capture skema -%}
				{%- assign sections = site.feeds | where_exp:"item", "item.category == 'section'" -%}
				{%- for section in sections -%}
					{%- if section.output contains '<div id="diagram" class="diagram">' -%}
						{{- section.output -}}
					{%- endif -%}
				{%- endfor -%}
			{%- endcapture %}
			$('#₠Quantum').append('{{ skema | strip_newlines | split: " " | join: " " }}');
		};  
		{%- capture skema -%}{%- include extra/rest/script.liquid -%}{%- endcapture %}
		$('#₠Quantum').append('{{ skema | strip_newlines | split: " " | join: " " }}');

		// https://api.jqueryui.com/uniqueId/
		window.uniqueId = function(){return 'myid-' + myIdcounter++;}
		$('.theme').each(function (i, e) {
			var id = uniqueId();
			var name = uniqueId();
			$(e).attr('name', name).attr('id', id);
		});

		// https://stackoverflow.com/a/10811687/4058484
		$('.theme').val('hand');
		$.getScript($('#js')[0].href, function() {
			if (!editor) draw.editor();
			$.ajax({
				type: "GET",
				dataType: "xml",
				url: "/sitemap.xml",
				success: draw.getJSON(xml)
			});
		});  
	});

});
