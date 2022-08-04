// metadata
export const version = "0.8.13"
export const title = "If / Else oder Wenn / Dann"
export const description = "Konditionale Statements in in Solidity"

const html = `<p>Solidity unterstützt folgende konditionale statements <code>if</code>, <code>else if</code> and <code>else</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">IfElse</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Fallunterscheidung</span>

        <span class="hljs-comment">// Fall1: x ist kleiner 10 -&gt; -&gt; Tritt ein, wenn x den Wert 0 bis 9 annimmt.</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
        <span class="hljs-comment">// Fall2: x ist kleiner 20 -&gt; Tritt ein, wenn x den Wert 10 bis 19 annimmt.</span>
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">20</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        <span class="hljs-comment">// Sonstiger Fall -&gt; Tritt ein, wenn x werde den Wert 0 bis 19 annimmt.</span>
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ternary</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// if (_x &lt; 10) {</span>
        <span class="hljs-comment">//     return 1;</span>
        <span class="hljs-comment">// }</span>
        <span class="hljs-comment">// return 2;</span>

        <span class="hljs-comment">// Kurzform des oberen if / else statements.</span>
        <span class="hljs-comment">// Besonderheit ist das "?". Es handelt sich hierbei um den ternary Operator,</span>
        <span class="hljs-comment">// welcher es uns erlaubt, "kürzere" if / else statements zu schreiben.</span>
        <span class="hljs-keyword">return</span> _x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span> ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
    }
}
</code></pre>
`

export default html
