// metadata
export const version = "0.8.13"
export const title = "Mapping"
export const description = "Was sind Mappings und wie werden Mappings verwendet in Solidity? "

const html = `<p>Maps werden mit folgender Grammatik/Syntax erstellt: <code>mapping(keyType =&gt; valueType)</code>.</p>
<p>Der <code>keyType</code> muss ein vordefinierte Type sein, wie zum Beispiel: bytes, string, uint, oder contract.</p>
<p>Der <code>valueType</code> kann jeder Datentyp sein. Auch ein weiteres Mapping oder ein Array können hinter dem <code>keyType</code> hinterlegt werden.</p>
<p>Mappings können nicht in <code>for</code> oder <code>while</code> Loops verwendet werden. Mappings sind nicht iterierbar.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mapping</span> </span>{
    <span class="hljs-comment">// Mapping einer Adress zu einem uint mit dem Variablen-Namen myMap</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> myMap;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Mapping geben immer einen Wert zurück.</span>
        <span class="hljs-comment">// Wenn ein Mapping nicht initialisiert worden ist, wird es den default-Wert zurückgeben. </span>
        <span class="hljs-keyword">return</span> myMap[_addr];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Überschreibt den uint-Wert, welcher hinter der _addr-Adresse im Mapping hierlegt worden ist.  </span>
        myMap[_addr] <span class="hljs-operator">=</span> _i;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Zurücksetzen der Wertes der  _addr-Adresse im Mapping auf den Default-Wert.</span>
        <span class="hljs-keyword">delete</span> myMap[_addr];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NestedMapping</span> </span>{
    <span class="hljs-comment">// Verschachteltes mapping = Mapping einer Adresse auf ein weiteres Mapping</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> nested;

    <span class="hljs-comment">// Wert des verschachtelten Mappings erhalten/auslesen</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> nested[_addr1][_i];
    }

    <span class="hljs-comment">// Wert des verschachtelten Mappings überschreiben</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _addr1,
        <span class="hljs-keyword">uint</span> _i,
        <span class="hljs-keyword">bool</span> _boo
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        nested[_addr1][_i] <span class="hljs-operator">=</span> _boo;
    }

    <span class="hljs-comment">// Wert des verschachtelten Mappings auf den Default-Wert zurücksetzen</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">delete</span> nested[_addr1][_i];
    }
}
</code></pre>
`

export default html
