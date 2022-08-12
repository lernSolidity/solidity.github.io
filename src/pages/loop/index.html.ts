// metadata
export const version = "0.8.13"
export const title = "For und While Loop/schleife"
export const description = "Beispiele für eine for und eine while loop/schleife in Solidity"

const html = `<p>Solidity unterstützt <code>for</code>, <code>while</code>, und <code>do while</code> loops.</p>
<p>Es ist ratsam, keine Loops zu verwenden, da es möglich ist, dass die Schleife/Loop niemals endet und der Nutzer seine gesamten Transaktionkosten verliert. </p>
<p>Aus diesem Grund werden <code>while</code> und <code>do while</code> loops sehr selten verwendet. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Loop</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// for loop</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>) {
                <span class="hljs-comment">// continue -&gt; Falls i gleich 3 ist, dann springe zur nächsten Iteration der Schleife</span>
                <span class="hljs-keyword">continue</span>;
            }
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">5</span>) {
                <span class="hljs-comment">// break -&gt; Falls i gleich 5 ist, dann gibt es keine weitere Iteration der Schleife. </span>
                <span class="hljs-comment">// Diese Foor Loop wird es niemals schaffen bis zum Zähler i gleich 10 zu kommen. </span>
                <span class="hljs-keyword">break</span>;
            }
        }

        <span class="hljs-comment">// while loop</span>
        <span class="hljs-keyword">uint</span> j;
        <span class="hljs-keyword">while</span> (j <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            j<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        }
    }
}
</code></pre>
`

export default html
