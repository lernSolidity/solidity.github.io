// metadata
export const version = "0.8.13"
export const title = "Hashing mit Keccak256"
export const description = "Beispiel für das Hashing mithilfe der Keccak256 Funktion in Solidity"

const html = `<p><code>keccak256</code> berechnet den cryptografischen Keccak-256 hash des jeweiligen Inputs.</p>
<p>Verwendet wird diese Methode um:</p>
<ul>
<li>Erstellen einer determinitischen und einzigartigen ID zu einem Input </li>
<li>Kompakter cryptografische Signatur für größere Eingabedaten</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HashFunction</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hash</span>(<span class="hljs-params">
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text,
        <span class="hljs-keyword">uint</span> _num,
        <span class="hljs-keyword">address</span> _addr
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_text, _num, _addr));
    }

    <span class="hljs-comment">// Beispiel für eine Hash-Kollision:</span>
    <span class="hljs-comment">// Eine Hash-Kollision kann auftreten, wenn mehr als ein dynamischer Datentyp</span>
    <span class="hljs-comment">// an abi.encodePacked übergeben wird. In diesem Fall sollten abi.encode verwendet werden.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collision</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _anotherText</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-comment">// encodePacked(AAA, BBB) -&gt; AAABBB</span>
        <span class="hljs-comment">// encodePacked(AA, ABBB) -&gt; AAABBB</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_text, _anotherText));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GuessTheMagicWord</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> answer <span class="hljs-operator">=</span>
        <span class="hljs-number">0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00</span>;

    <span class="hljs-comment">// Magisches Wort ist "Solidity" ;)</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">guess</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _word</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_word)) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> answer;
    }
}
</code></pre>
`

export default html
