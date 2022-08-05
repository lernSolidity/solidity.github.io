// metadata
export const version = "0.8.13"
export const title = "Aufrufen von anderen Contracts in einem Contract"
export const description = "In Solidity, gibt es mehrere Wege, um Funktionen anderer Contracts aufzurufen"

const html = `<p>Contracts können auch andere Contracts aufrufen.</p>
<p>Die einfachste Möglichkeit ist es, <code>A.foo(x, y, z)</code> aufzurufen.</p>
<p>Eine anderer Weg ist es, einen anderen Contract durch einen low-level <code>call</code> aufzurufen.</p>
<p>Diese Methode wird nicht empfohlen. Außer du weißt, was du tust.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// Contract der aufgerufen wird</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Callee</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-comment">// Setzen der Zustandsvariable x auf einen bestimmten Wert</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        x <span class="hljs-operator">=</span> _x;
        <span class="hljs-keyword">return</span> x;
    }

    <span class="hljs-comment">// Setzen der Zustandsvariable value und x auf einen bestimmten Wert</span>
    <span class="hljs-comment">// Dabei ist value gleich dem Wert an Ether, welcher bei dem Aufruf der Funktion mitgesendet wurde.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span></span>) </span>{
        x <span class="hljs-operator">=</span> _x;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;

        <span class="hljs-keyword">return</span> (x, value);
    }
}

<span class="hljs-comment">// Contract, welcher den oberen Contract aufruft</span>
<span class="hljs-comment">// Contract setzt die Zustandsvariable X des oberen Contract</span>
<span class="hljs-comment">// und versendet den Betrag an den oberen Contract</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Caller</span> </span>{
    <span class="hljs-comment">// Ruft die Funktion setX aus dem oberen Contract auf</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> _callee.setX(_x);
    }

    <span class="hljs-comment">// Initialisiert zuerst den oberen Contract</span>
    <span class="hljs-comment">// Ruft anschließend die Funktion setX aus dem oberen Contract auf</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXFromAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Callee callee <span class="hljs-operator">=</span> Callee(_addr);
        callee.setX(_x);
    }
    <span class="hljs-comment">// Ruft die Funktion setXandSendEther aus dem oberen Contract auf</span>
    <span class="hljs-comment">// Übersendet den Ether Betrag der Transaktion an den oberen Contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> value) <span class="hljs-operator">=</span> _callee.setXandSendEther{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_x);
    }
}
</code></pre>
`

export default html
