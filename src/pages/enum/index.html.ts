// metadata
export const version = "0.8.13"
export const title = "Enum"
export const description = "Beispiele für den Einsatz von enums in Solidity"

const html = `<p>Solidity unterstützt <code>enums</code> bzw. <code>enumerables</code> und sie sind nützlich, um einen Zustand zu verfolgen</p>
<p><code>Enums</code> müssen außerhalb eines Contracts deklariert werden. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Enum</span> </span>{
    <span class="hljs-comment">// Enum repräsentiert den Versandstatus</span>
    <span class="hljs-keyword">enum</span> <span class="hljs-title">Status</span> {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    <span class="hljs-comment">// Default value is the first element listed in</span>
    <span class="hljs-comment">// definition of the type, in this case "Pending"</span>

    <span class="hljs-comment">// Standardwerte ist das erste Element in der Definition des Datentyps</span>
    <span class="hljs-comment">// Der Standardwert für das Enum Status wäre der Zustand "Pending"</span>
    Status <span class="hljs-keyword">public</span> status;

    <span class="hljs-comment">// Jeder Status wird mit einem uint verknüpft/repräsentiert</span>
    <span class="hljs-comment">// Pending  - 0</span>
    <span class="hljs-comment">// Shipped  - 1</span>
    <span class="hljs-comment">// Accepted - 2</span>
    <span class="hljs-comment">// Rejected - 3</span>
    <span class="hljs-comment">// Canceled - 4</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Status</span>) </span>{
        <span class="hljs-keyword">return</span> status;
    }

    <span class="hljs-comment">// Der Status kann verändert werden, indem eine Zahl übergeben wird</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params">Status _status</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        status <span class="hljs-operator">=</span> _status;
    }

    <span class="hljs-comment">// Ein spezifischer Status kann folgendermaßen eingestellt werden</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancel</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        status <span class="hljs-operator">=</span> Status.Canceled;
    }

    <span class="hljs-comment">// Zurücksetzen des Eums auf den Default-Wert mit der verknüpften Zahl 0</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reset</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">delete</span> status;
    }
}
</code></pre>
<h3 id="deklarieren-und-importieren-eines-enum">Deklarieren und Importieren eines Enum</h3>
<p>Datei, wo das <code>Enum</code> deklariert wird:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>
<span class="hljs-comment">// Datei wird abgespeichert mit dem Namen &#x27;EnumDeclaration.sol&#x27;</span>

<span class="hljs-keyword">enum</span> <span class="hljs-title">Status</span> {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}
</code></pre>
<p>Datei, welche das <code>Enum</code> importiert:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./EnumDeclaration.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Enum</span> </span>{
    Status <span class="hljs-keyword">public</span> status;
}
</code></pre>
`

export default html
