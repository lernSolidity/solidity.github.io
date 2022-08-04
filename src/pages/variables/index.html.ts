// metadata
export const version = "0.8.13"
export const title = "Variablen"
export const description = "Wo ist der unterschied zwischen Local, state und global Variablen?"

const html = `<p>Es gibt 3 verschiedene Typen von Variablen in Solidity:</p>
<ul>
<li><strong>local</strong><ul>
<li>Variable wird deklariert innerhalb einer Funktion</li>
<li>Variable wird <strong>nicht</strong> auf der Blockchain gespeichert</li>
</ul>
</li>
<li><strong>state</strong><ul>
<li>Variable wird deklariert außerhalb einer Funktion</li>
<li>Variable wird auf der Blockchain gespeichert</li>
</ul>
</li>
<li><strong>global</strong> <ul>
<li>Variablen, welche es ermöglichen Informationen über die BLockchain zu erhalten, wie Zeit und Sender der Transaktion</li>
</ul>
</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Variables</span> </span>{
    <span class="hljs-comment">// State Variablen werden auf der Blockchain gespeichert </span>
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> text <span class="hljs-operator">=</span> <span class="hljs-string">"Hello"</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Local Variablen sind nur bei Ausführung dieser Funktion existet </span>
        <span class="hljs-comment">// und werden nicht auf der Blockchain gespeichert </span>
        <span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;

        <span class="hljs-comment">// Ein paar Beispiele für global Variablen</span>
        <span class="hljs-keyword">uint</span> timestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>; <span class="hljs-comment">// Aktueller Zeitstempel des letzten Blocks der Blockchain</span>
        <span class="hljs-keyword">address</span> sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>; <span class="hljs-comment">// Adresse von dem Caller/Ausführer der Funktion</span>
    }
}
</code></pre>
`

export default html
