// metadata
export const version = "0.8.13"
export const title = "Funktions Modifier"
export const description = "Beispiel, wie Modifier geschrieben und verwendet werden"

const html = `<p>Modifiers ist Code, welcher vor und / oder nach einem Funktionsaufruf ausgeführt werden kann.</p>
<p>Modifiers können verwendet werden:</p>
<ul>
<li>Zugriff beschränken</li>
<li>Eingaben validieren</li>
<li>Reentrantes Hack zu verhindern</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FunctionModifier</span> </span>{
    <span class="hljs-comment">// Wir verwenden diese Variablen um zu zeigen, wie modifiers verwendet werden.</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// Setze den Sender des Transaktions als Besitzer des Contracts.</span>
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-comment">// Modifier checken, ob der Aufrufer der Besitzer des Contracts ist.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"Not owner"</span>);
        <span class="hljs-comment">// Unterstrich ist ein speziales Zeichen, das nur innerhalb einer Funktion verwendet wird.</span>
        <span class="hljs-comment">// Es dient dazu, dass Solidity den Rest des Codes ausführt.</span>
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-comment">// Modifiers können Eingabedaten akzeptieren. Dieser Modifier überprüft, ob die Adresse</span>
    <span class="hljs-comment">// nicht der Zero-Adresse (0x000000..00) entspricht.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">validAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) </span>{
        <span class="hljs-built_in">require</span>(_addr <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"Not valid address"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeOwner</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _newOwner</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">onlyOwner</span> <span class="hljs-title">validAddress</span>(<span class="hljs-params">_newOwner</span>) </span>{
        owner <span class="hljs-operator">=</span> _newOwner;
    }

    <span class="hljs-comment">// Modifiers können vor und nach einer Funktion aufgerufen werden.</span>
    <span class="hljs-comment">// Dieser Modifier verhindert, dass eine Funktion ausgeführt wird,</span>
    <span class="hljs-comment">// während sie noch ausgeführt wird.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">noReentrancy</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>locked, <span class="hljs-string">"No reentrancy"</span>);

        locked <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decrement</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">noReentrancy</span> </span>{
        x <span class="hljs-operator">-</span><span class="hljs-operator">=</span> i;

        <span class="hljs-keyword">if</span> (i <span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>) {
            decrement(i <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);
        }
    }
}
</code></pre>
`

export default html
