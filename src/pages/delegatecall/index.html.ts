// metadata
export const version = "0.8.13"
export const title = "Delegatecall"
export const description = "Wie nutze ich die Delegatecall Funktion in Solidity?"

const html = `<p><code>delegatecall</code> ist ebenfalls eine low level Funktiion, ähnlich wie <code>call</code>.</p>
<p>Wenn Contract <code>A</code> einen <code>delegatecall</code> ausführt zu Contract <code>B</code>, dann wird der Code von <code>B</code> ausgeführt.</p>
<p>Die Besonderheit ist jedoch, dass die Funktion ausgeführt wird, mit dem Storage von Contract <code>A</code>. </p>
<p>Dessweiteren werden <code>msg.sender</code> und <code>msg.value</code> ebenfalls weitergegeben.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// Note: Deploy diesen Contract zuerst</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// Note: Das Storage layout muss genau gleich sein wie contract A</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVars</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        num <span class="hljs-operator">=</span> _num;
        sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVars</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// A&#x27;s storage wird nicht geändert,</span>
        <span class="hljs-comment">// Auch der storage von B wird nicht geändert.</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">delegatecall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"setVars(uint256)"</span>, _num)
        );
    }
}
</code></pre>
`

export default html
