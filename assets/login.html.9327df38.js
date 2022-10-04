import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d as e}from"./app.931e0ef7.js";const t={},o=e(`<h1 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> /login</h1><p>\u7528\u6237\u767B\u9646api\uFF0C\u8C03\u7528\u6B64api\u5B8C\u6210\u767B\u5F55\u52A8\u4F5C\u3002\u82E5\u767B\u5F55\u6210\u529F\uFF0C\u8FD4\u56DE\u7528\u6237token\u4EE5\u53CA\u7528\u6237\u76F8\u5173\u4FE1\u606F\uFF1B\u82E5\u5931\u8D25\uFF0C\u8FD4\u56DE\u76F8\u5E94\u7684\u539F\u56E0\u3002</p><h2 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /api/auth/login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="path-parameters" tabindex="-1"><a class="header-anchor" href="#path-parameters" aria-hidden="true">#</a> Path parameters</h2><table><thead><tr><th>Name</th><th>Value</th><th>Description</th><th>Additional</th></tr></thead><tbody><tr><td>demo</td><td>string</td><td>a demo for api</td><td>optional</td></tr><tr><td>test</td><td>number</td><td>a test for api</td><td>required</td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request body</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><h3 id="_200" tabindex="-1"><a class="header-anchor" href="#_200" aria-hidden="true">#</a> 200</h3><p>\u767B\u5F55\u6210\u529F\uFF0C\u8FD4\u56DEtoken\u4E0E\u7528\u6237\u4FE1\u606F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u767B\u5F55\u5931\u8D25\uFF0C\u8FD4\u56DE\u76F8\u5E94\u7684\u539F\u56E0</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[o];function i(d,p){return n(),a("div",null,r)}const u=s(t,[["render",i],["__file","login.html.vue"]]);export{u as default};