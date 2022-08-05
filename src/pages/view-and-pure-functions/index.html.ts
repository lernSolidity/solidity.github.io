// metadata
export const version = "0.8.13"
export const title = "View und Pure Funktionen"
export const description = "Ein Beispiel für View und Pure Funktionen in Solidity"

const html = `<p><code>Getter</code>-Funktionen, dienen dazu den aktuellen Wert bestimmte Zustandsvariablen zu lesen. Diese Art von Funktionen können entweder als <code>view</code> or <code>pure</code> deklariert werden. Der Solidity-Compiler wird dich ebenfalls darauf hinweisen, sofern du unbeabsichtigst das Stichwort vergessen hast. </p>
<p><code>View</code> function declares that no state will be changed.
Funktionen werden mit dem Stichwort <code>View</code> deklariert, wenn <strong>eine</strong> Zustandvariable des Smart Contracts in der Funktion enthalten ist.</p>
<p>Funktionen werden mit dem Stichwort <code>Pure</code> deklariert, wenn <strong>keine</strong> Zustandvariable des Smart Contracts in der Funktion enthalten ist.
Eine Funktion, wo nur der <code>block.timestamp</code> ausgelesen wird, ist aufgrund der Unabhängigkeit zum Smart Contract mit einem <code>pure</code>zu versehen.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ViewAndPure</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

    <span class="hljs-comment">// Funktion modifiziert nicht den State des Contracts</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addToX</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;
    }

    <span class="hljs-comment">// Funktion modifiziert oder liest nicht den State des Contracts</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">uint</span> j</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> i <span class="hljs-operator">+</span> j;
    }
}
</code></pre>
`

export default html
