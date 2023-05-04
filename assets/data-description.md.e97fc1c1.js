import{_ as s,c as n,o as a,O as l}from"./chunks/framework.fe655854.js";const A=JSON.parse('{"title":"数据说明","description":"","frontmatter":{},"headers":[],"relativePath":"data-description.md","filePath":"data-description.md"}'),p={name:"data-description.md"},o=l(`<h1 id="数据说明" tabindex="-1">数据说明 <a class="header-anchor" href="#数据说明" aria-label="Permalink to &quot;数据说明&quot;">​</a></h1><h2 id="周期" tabindex="-1">周期 <a class="header-anchor" href="#周期" aria-label="Permalink to &quot;周期&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Period</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 时间跨度乘数，如1，3，5</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">multiplier</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 时间跨度，如&#39;year&#39;，&#39;month&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timespan</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 文字，用于显示，如&#39;1H&#39;，&#39;5H&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Period</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时间跨度乘数，如1，3，5</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">multiplier</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时间跨度，如&#39;year&#39;，&#39;month&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">timespan</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文字，用于显示，如&#39;1H&#39;，&#39;5H&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="标的信息" tabindex="-1">标的信息 <a class="header-anchor" href="#标的信息" aria-label="Permalink to &quot;标的信息&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SymbolInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 唯一标识</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ticker</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 标的名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 标的简短名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shortName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 交易所</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">exchange</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 市场分类</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">market</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 价格精度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pricePrecision</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 数量精度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">volumePrecision</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 价格币种</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">priceCurrency</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// logo url</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SymbolInfo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 唯一标识</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">ticker</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 标的名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 标的简短名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">shortName</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 交易所</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">exchange</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 市场分类</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">market</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 价格精度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">pricePrecision</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 数量精度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">volumePrecision</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 价格币种</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">priceCurrency</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 类型</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// logo url</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">logo</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function c(t,r,y,i,D,C){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{A as __pageData,E as default};
