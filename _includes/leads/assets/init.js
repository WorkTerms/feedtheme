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
	$(document).ready(function()
	{
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
		var tag = function(url){return '<script src="{{ site.url }}/' + url + '"></script>';}
		window include = function(url){$('#₠Quantum').append(tag(url)); return false;}
		$('#₠Quantum').append('{{ skema | strip_newlines | split: " " | join: " " }}');

		// https://api.jqueryui.com/uniqueId/
		var myIdcounter = 0;
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
