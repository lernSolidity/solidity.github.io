// metadata
export const version = "0.8.13"
export const title = "Was ist Ether und Wei?"
export const description = "Ein Beispiel für Ether und Wei in Solidity"

const html = `<p>Die Gaskosten einer Transaktion werden mit <code>ether</code> bezahlt.</p>
<p>Ähnlich wie bei Euro gibt es einen Bruchteil eines Euros (Cent). Ein Euro sind 100 Cent. Bei Ether gibt es jedoch mehr "0". </p>
<p>Um genau zu sein, es sind 10<sup>18</sup>. Der Wert wird dann als <code>wei</code> bezeichnet.</p>
<ul>
<li><code>Euro</code> = <code>ether</code></li>
<li><code>Cent</code> = <code>wei</code></li>
</ul>
<p>Beispiel: </p>
<p>0.01 <code>ether</code> sind 10000000000000000 <code>wei</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherUnits</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span>;
    <span class="hljs-comment">// 1 wei ist gleich 1</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-comment">// 1 ether ist gleich 10^18 wei</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
}
</code></pre>
`

export default html
