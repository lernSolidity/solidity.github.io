// metadata
export const version = "0.8.13"
export const title = "Wie lese oder schreibt man in Zustandsvariablen?"
export const description = "Lesen and Schreiben von State Variablen / Zustandsvariablen"

const html = `<p><code>State Variable = Zustandsvariable</code></p>
<p>To write or update a state variable you need to send a transaction.
Um eine Zustandvariable zu verändern, muss eine Transaktion gesendet werden, zu einer Funktion, die den Zustand/Wert der State Variable verändert.</p>
<p>Für das Lesen wird allerdings keine Transaktion benötigt. Das Lesen ist frei/gratis von jeglichen Transaktionsgebühren. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SimpleStorage</span> </span>{
    <span class="hljs-comment">// State Variable, um eine Zahl zu speichern auf der Blockchain</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-comment">// Funktion wird per Transaktion ausgeführt.</span>
    <span class="hljs-comment">// Funktion überschreibt den aktuellen Wert von num mit dem Wert von _num</span>
    <span class="hljs-comment">// num = 0 -&gt; TX set(420) -&gt; num = 420 </span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        num <span class="hljs-operator">=</span> _num;
    }

    <span class="hljs-comment">// Funktion gibt den aktuellen Wert von num zurück. Keine Transaktion wird benötigt.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> num;
    }
}
</code></pre>
`

export default html
