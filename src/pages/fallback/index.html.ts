// metadata
export const version = "0.8.13"
export const title = "Fallback"
export const description = "Beispiel, wie die `fallback`-Funktion verwendet wird in Solidity"

const html = `<p><code>fallback</code> ist eine Funktion, die keine Argumente nimmt und keine Rückgabewerte gibt.</p>
<p>Die <code>fallback</code> Funktion wird ausgeführt, wenn</p>
<ul>
<li>eine Funktion, die nicht existiert ist aufgerufen wird oder</li>
<li>Ether direkt an ein Contract gesendet wird, aber <code>receive()</code> nicht existiert oder <code>msg.data</code> nicht leer ist.</li>
</ul>
<p><code>fallback</code> hat eine 2300-Gas-Limit, wenn es bei einer <code>transfer</code> oder <code>send</code> Transkation aufgerufen wird.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Fallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> gas</span>)</span>;

    <span class="hljs-comment">// Fallback Funktion muss als extern definiert werden.</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// send / transfer (leitet 2300 gas an diese Fallback Funktion weiter)</span>
        <span class="hljs-comment">// call (leitet alles der Gas an diese Fallback Funktion weiter)</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">gasleft</span>());
    }

    <span class="hljs-comment">// Helper-Funktion um den Kontostand dieses Contracts zu prüfen.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-comment">// Wie leitet man die Zahlung an die fallback Funktion weiter</span>
<span class="hljs-comment">// entweder als transfer oder als call</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendToFallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferToFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _to.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
