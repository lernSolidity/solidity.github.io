// metadata
export const version = "0.8.13"
export const title = "Erster App"
export const description = "Beispiel eines Zählers in Form eines Smart Contracts, geschrieben in Solidity "

const html = `<p>Das folgende Beispiel ist ein einfacher Contract, welcher ein Zähler gespeichert hat. 
Der Zähler kann entweder zurückgegeben, erhöht (+1) oder verringert (-1) werden. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-comment">// Gibt die aktuelle Zähler zurück</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> count;
    }

    <span class="hljs-comment">// Zähler +1 addiert  </span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-comment">// Zähler -1 subtrahiert  </span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Funktion gibt einen Fehler zurück, sofern der Zähler auf 0 steht. </span>
        <span class="hljs-comment">// Es ist nicht möglich negative Zahlen in Solidity zu erzeugen!</span>
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}
</code></pre>
`

export default html
