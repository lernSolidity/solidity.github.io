// metadata
export const version = "0.8.13"
export const title = "Events"
export const description = "Beispiel, wie Events in Solidity verwendet werden können"

const html = `<p><code>Events</code> ermöglichen das Loggen von Ereignissen in Solidity. </p>
<p>Außerdem werden sie verwendet, um:</p>
<ul>
<li>Erwarten von Ereignissen und aktualisieren der Benutzeroberfläche</li>
<li>Einfache Form von Speicher</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Event</span> </span>{
    <span class="hljs-comment">// Deklarierung eines Events</span>
    <span class="hljs-comment">// Es können bis zu 3 Parameter indexiert werden.</span>
    <span class="hljs-comment">// Indexierte Parameter helfen dabei, die Logs einer Transaktion nach jeweiligen Parameter zu filtern.</span>
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">string</span> message</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">AnotherLog</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Emitiere/Ausgeben ein Event mit dem Sender und dem Nachrichtentext.</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"Hello World!"</span>);  
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"Hello EVM!"</span>);
        <span class="hljs-comment">// Emitiere/Ausgeben eines leeren Events.</span>
        <span class="hljs-keyword">emit</span> AnotherLog();
    }
}
</code></pre>
`

export default html
