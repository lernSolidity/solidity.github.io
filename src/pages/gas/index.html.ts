// metadata
export const version = "0.8.13"
export const title = "Was ist Gas und Gas Preis?"
export const description = "Beispiel von Gas und dem Gas limit in Solidity"

const html = `<h3 id="wie-viel-ether-muss-ich-für-diese-transaktion-bezahlen">Wie viel <code>ether</code> muss ich für diese Transaktion bezahlen?</h3>
<p>Du bezahlst <code>gas verbrauch * gas preis</code> amount of <code>ether</code>, where</p>
<ul>
<li><code>gas</code> ist eine Einheit einer einzelnen Berechnung auf der EVM (Ethereum Virtual Machine)</li>
<li><code>gas verbrauch</code> ist die gesamte Menge an Berechnungen, wie viel <code>gas</code> bei einer Transaktion verbraucht worden ist</li>
<li><code>gas preis</code> ist wie viel <code>ether</code> du gewillst bist für eine Einheit <code>gas</code> zu bezahlen</li>
</ul>
<p>Transaktionen mit höherem <code>gas preis</code> haben höhere Priorität und werden schneller durchgeführt.</p>
<p>Gas, welches nicht verwendet worden ist, wird dir zurück erstattet.</p>
<h3 id="gas-limit">Gas Limit</h3>
<p>Es gibt 2 Limits, welche bestimmen, wie viel du für Gas ausgibst. </p>
<ul>
<li><code>gas limit</code> = maximale Menge, wie viele Berechnungen deine Transaktionen verbrauchen soll </li>
<li><code>block gas limit</code> = maximale Menge, welche erlaubt ist in einem neu erstellten Block der Blockchain</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Gas</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

    <span class="hljs-comment">// Diese Funktion würde das komplette gas kontigent aufbrauchen, welches du gesetzt hast. </span>
    <span class="hljs-comment">// Es handelt sich hierbei um eine niemals endende Schleife.</span>

    <span class="hljs-comment">// Die Anzahl der Berechnungen gehen ins Unendliche und die Transaktion wird niemals durchgeführt.</span>
    <span class="hljs-comment">// Nachdem deine Gas aufgebraucht worden ist, wird die Ausführung annuliert. </span>

    <span class="hljs-comment">// Das bedeutet, dass auch wenn der Wert von i verändert wird, </span>
    <span class="hljs-comment">// der Zustand von i gleich dem Zustand ist, wie vor der Transaktion. </span>
    
    <span class="hljs-comment">// Kurz gesagt: Die Transkation wird zurückgerollt auf den Ursprungszustand vor der Transaktion. </span>
    <span class="hljs-comment">// Gas welches bei einer Ausführung verbraucht worden ist, wird nicht wieder zurückerstattet.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">forever</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Loop läuft solange bis das komplette Gas der Transaktion aufgebraucht ist.</span>
        <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
            i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }
}
</code></pre>
`

export default html
