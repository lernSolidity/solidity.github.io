// metadata
export const version = "0.8.13"
export const title = "Konstanten"
export const description = "Was sind konstante Variablen?"

const html = `<p>Konstanten sind nicht veränderbare Variablen. </p>
<p>Der Wert wird einmalig auf die Blockchain gebrannt bzw. ge-"hard coded".
Konstanten sind eine Möglichkeit seien Smart contract Gas effizienter zu machen. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Constants</span> </span>{
    <span class="hljs-comment">// Beides sind Konstanten </span>
    <span class="hljs-comment">// Als Konvetion gilt, dass Konstanten immer GROß geschrieben werden müssen.</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-number">0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_UINT <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
}
</code></pre>
`

export default html
