---
images:
  - https://user-images.githubusercontent.com/68011645/89026666-ad3a8680-d35b-11ea-9f4b-d3fe26ae12ed.png
  - https://user-images.githubusercontent.com/68011645/88376699-87980500-cdd0-11ea-8900-7bab8c811bc9.png
---

# Mapping System
 
The Chronological Order:
{% gist d2336e28e79702acf38edd182003d5e0 prime.txt %}

## Rich Results Test

Google Rich Results [documents is here](https://developers.google.com/search/reference/overview), You can check the [Google Rich Results Test Tool](https://search.google.com/test/rich-results?url={{ page.url | absolute_url | xml_escape }}) or [Search this document](https://www.google.com/search?q={{ page.url | absolute_url | xml_escape }}) to see what it looks like (beta)

{% for image in page.images %}
### test image {{ forloop.index }}
![test image {{ forloop.index }}]({{ image }}){: .shadow-box }
{% endfor %}

## Jekyll - how to build a [REST API](https://gist.github.com/MichaelCurrin/f8d908596276bdbb2044f04c352cb7c7)
{% gist f8d908596276bdbb2044f04c352cb7c7 %}

## Github metadata Test
{% for item in site | sort: item %}
	{% if site.item.first %}
		{% if site.item.first.first %}
			{{ item }}: hash
		{% else %}
			{{ item }}: array
		{% endif %}
	{% else %}
		{{ item }}
	{% endif %}
{% endfor %}
