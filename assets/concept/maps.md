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

## Jekyll - How to build a [REST API](https://gist.github.com/MichaelCurrin/f8d908596276bdbb2044f04c352cb7c7)
{% gist f8d908596276bdbb2044f04c352cb7c7 %}

## Site Metadata

{% for item in site | sort -%}
	{%- if site[item].first -%}
		{%- if site[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ site[item] }}
	{%- endif -%}
{%- endfor %}

## Github Metadata

{% assign github = site.github -%}
{%- for item in github | sort -%}
	{%- if github[item].first -%}
		{%- if github[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ github[item] }}
	{%- endif -%}
{%- endfor %}

## Source Metadata

{% assign source = github.source -%}
{%- for item in source | sort -%}
	{%- if source[item].first -%}
		{%- if source[item].first.first -%}
			{%- include tabs.liquid %}- {{ item }}: hash
		{%- else -%}
			{%- include tabs.liquid %}- {{ item }}: array
		{%- endif -%}
	{%- else -%}
		{%- include tabs.liquid %}- {{ item }}: {{ source[item] }}
	{%- endif -%}
{%- endfor -%}

## Recommendations AI

- [Create models](https://cloud.google.com/retail/docs/create-models)
