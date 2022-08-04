// metadata
export const version = "0.8.13"
export const title = "Immutable Variablen vs. Konstanten"
export const description = "Was sind Immutable Variablen?"

const html = `<p>Immutable Variablen sind ähnlich wie konstante Variable, jedoch können Immutable Variablen innerhalb der Konstrukturs (siehe Konstruktur) verändert werden. 
Da der Konstruktur nur einmalig aufgerufen wird, verhalten diese Variablen sich gleich/analog zu Konstanten. </p>
<p>In welchem Kontext werden Konstanten und Immutables verwenden?</p>
<p>Immtuble Variablen sind gut, wenn man ein NFT Template hat. Jede Kollektion möchte nicht zwangsweise ein Limit von 10.000 NFTs haben. </p>
<p>Um die Konstante aber nicht bei jedem Kunden anpassen zu müssen, könnte die maximale Anzahl an NFTs in den Konstruktur übergeben werden, wo dann eine Immutable Variable einmalig, bis zum Ende der Blockchain gespeichert wird. Daher gibt es die Unterscheidung zwischen Konstanten und Immutables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Immutable</span> </span>{
    <span class="hljs-comment">// Die Code-Konvetion der Konstanten gilt ebenfalls für Immutable Variablen </span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_ADDRESS;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_UINT;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _myUint</span>) </span>{
        MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        <span class="hljs-comment">// Hier wird der schlussendliche, der nicht veränderbare Werte einmalig gesetzt.</span>
        MY_UINT <span class="hljs-operator">=</span> _myUint;
    }
}
</code></pre>
`

export default html
