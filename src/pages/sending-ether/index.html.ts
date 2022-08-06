// metadata
export const version = "0.8.13"
export const title = "Sending Ether (transfer, send, call)"
export const description = "An example of sending Ether in Solidity"

const html = `<h3 id="wie-wird-ether-versendet">Wie wird Ether versendet?</h3>
<p>Ether kann an andere contracts gesendet werden, per:</p>
<ul>
<li>transfer (2300 gas, wirft einen Fehler aus)</li>
<li>send (2300 gas, gibt einen bool zurück)</li>
<li>call (weitergabe des gesamten oder wahlweise nur ein Bruchteil des Gasses der Transaktio. Gibt im Anschluss einen bool zurück, ob Transfer geklappt hat)</li>
</ul>
<h3 id="wie-wird-ether-empfangen">Wie wird Ether empfangen?</h3>
<p>Ein Contract, welches Ether empfängt, muss mindestens eine der folgenden Funktionen haben:</p>
<ul>
<li><code>receive() external payable</code></li>
<li><code>fallback() external payable</code></li>
</ul>
<p><code>receive()</code> wird aufgerufen, wenn <code>msg.data</code> leer ist, andernfalls <code>fallback()</code> wird aufgerufen.</p>
<h3 id="welche-methode-sollte-man-verwenden">Welche Methode sollte man verwenden?</h3>
<p><code>call</code> in Kombination mit dem Schutz vor einer Reentrancy-Attacke ist die empfohlene Methode seit Dezember 2019</p>
<p>Schutz gegen re-entrancy mit</p>
<ul>
<li>alle Zustände ändern, bevor andere Contracts aufgerufen werden</li>
<li>Schutz vor Reentrancy-Attacken durch Modifier <code>nonReentrant</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReceiveEther</span> </span>{
    <span class="hljs-comment">/*
    Welche Funktion wird aufgerufen, fallback() oder receive()?

           send Ether
               |
         ist msg.data leer?
              /        \\
            ja         nein
            /            \\
exisitiert receive()?   fallback()
         /   \\
        ja   nein
        /      \\
    receive()   fallback()
    */</span>

    <span class="hljs-comment">// Funktion um Ether zu empfangen. msg.data muss leer sein</span>
    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-comment">// Fallback Funktion wird aufgerufen, wenn msg.data nicht leer ist</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendEther</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaTransfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// Diese Funktion wird nicht mehr empfohlen, um Ether zu senden.</span>
        _to.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaSend</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// Send gibt ein boolescher Wert zurück, der anzeigt, ob die Send-Funktion erfolgreich war.</span>
        <span class="hljs-comment">// Diese Funktion wird nicht mehr empfohlen, um Ether zu senden.</span>
        <span class="hljs-keyword">bool</span> sent <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">send</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// Call gibt ein boolescher Wert zurück, der anzeigt, ob die Call-Funktion erfolgreich war.</span>
        <span class="hljs-comment">// Die Funktion wird nicht mehr empfohlen, um Ether zu senden.</span>
        (<span class="hljs-keyword">bool</span> sent, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
