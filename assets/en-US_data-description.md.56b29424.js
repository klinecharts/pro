import{_ as s,c as n,o as a,O as l}from"./chunks/framework.fe655854.js";const A=JSON.parse('{"title":"Data Description","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/data-description.md","filePath":"en-US/data-description.md"}'),p={name:"en-US/data-description.md"},o=l(`<h1 id="data-description" tabindex="-1">Data Description <a class="header-anchor" href="#data-description" aria-label="Permalink to &quot;Data Description&quot;">​</a></h1><h2 id="period" tabindex="-1">Period <a class="header-anchor" href="#period" aria-label="Permalink to &quot;Period&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Period</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Time span multiplier, such as 1, 3, 5</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">multiplier</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Time span, such as &#39;year&#39;, &#39;month&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timespan</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Text for display, such as &#39;1H&#39;, &#39;5H&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Period</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Time span multiplier, such as 1, 3, 5</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">multiplier</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Time span, such as &#39;year&#39;, &#39;month&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">timespan</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Text for display, such as &#39;1H&#39;, &#39;5H&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="symbol-information" tabindex="-1">Symbol information <a class="header-anchor" href="#symbol-information" aria-label="Permalink to &quot;Symbol information&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SymbolInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Unique identification</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ticker</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Short name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shortName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Exchange</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">exchange</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Market classification</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">market</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Price precision</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pricePrecision</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Volume precision</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">volumePrecision</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Price currency</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">priceCurrency</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Type</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// logo url</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SymbolInfo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Unique identification</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">ticker</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Short name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">shortName</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Exchange</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">exchange</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Market classification</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">market</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Price precision</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">pricePrecision</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Volume precision</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">volumePrecision</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Price currency</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">priceCurrency</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Type</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// logo url</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">logo</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function c(t,r,i,y,D,C){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{A as __pageData,E as default};
