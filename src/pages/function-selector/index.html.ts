// metadata
export const version = "0.8.13"
export const title = "Funktions-Selector"
export const description = "Example of how function selectors are computed"

const html = `<p>Wenn eine Funktion aufgerufen wird, dann geben die ersten 4 Bytes von <code>calldata</code> an, welche Funktion aufgerufen werden soll.
Diese 4 bytes nennen wir Funktions-Selector.
Schau dir das untere Bespiel an. Es verwendet <code>call</code> um die Funktion <code>transfer</code> in einem Contract auszuführen, mit der Adresse <code>addr</code> als Eingabedaten.</p>
<pre><code class="language-solidity">addr.<span class="hljs-built_in">call</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"transfer(address,uint256)"</span>, 0xSomeAddress, <span class="hljs-number">123</span>))
</code></pre>
<p>Die ersten 4 Bytes werden zurückgegeben von <code>abi.encodeWithSignature(....)</code>.
Es handelt sich um den Funktions-Selector.
Potenziell kann Gas eingespart werden, wenn der Funktions-Selector vorher berechnest und fest reingeschrieben wird.</p>
<p>Hier ist wie der Funktions-Selector berechnet wird.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FunctionSelector</span> </span>{
    <span class="hljs-comment">/*
    "transfer(address,uint256)"
    0xa9059cbb
    "transferFrom(address,address,uint256)"
    0x23b872dd
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSelector</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">bytes4</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-keyword">bytes</span>(_func)));
    }
}
</code></pre>
`

export default html
