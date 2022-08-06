// metadata
export const version = "0.8.13"
export const title = "Visibility"
export const description = "Ein Beispiel für external, internal, private und public Funktionen in Solidity"

const html = `<p>Funktionen und Variablen müssen angeben, ob sie von anderen Contracts ausgelesen werden dürfen.</p>
<p>Funktionen und Zustandsvariablen können deklariert werden als:</p>
<ul>
<li><code>public</code> - jeder Ethereum Wallet/Account/Adresse und / oder Contract kann diese Funktion aufrufen</li>
<li><code>private</code> - nur innerhalb des Contracts, das die Funktion beinhaltet, kann diese Funktion aufrufen</li>
<li><code>internal</code> - nur innerhalb des Contracts, das eine <code>internal</code> Funktion vererbt werden</li>
<li><code>external</code> - nur andere Contracts und Ethereum Wallet/Account/Adresse können diese Funktion aufrufen</li>
</ul>
<p>Zustandsvariablen können als <code>public</code>, <code>private</code>, oder <code>internal</code> deklariert werden, nicht <code>external</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Base</span> </span>{
    <span class="hljs-comment">// Private Funktionen können nur in diesem Contract aufgerufen werden.</span>
    <span class="hljs-comment">// Contracts die dieses Contract erben können nicht diese Funktion aufrufen.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">privateFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"private function called"</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testPrivateFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> privateFunc();
    }

    <span class="hljs-comment">// Interne Funktionen können aufgerufen werden</span>
    <span class="hljs-comment">// - in diesem Contract</span>
    <span class="hljs-comment">// - in contracts, die dieses Contract erben</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"internal function called"</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testInternalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> internalFunc();
    }

    <span class="hljs-comment">// ÖFfentlich können Funktionen aufgerufen werden:</span>
    <span class="hljs-comment">// - in diesem Contract</span>
    <span class="hljs-comment">// - in contracts, die dieses Contract erben</span>
    <span class="hljs-comment">// - von anderen Contracts und Accounts</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">publicFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"public function called"</span>;
    }

    <span class="hljs-comment">// Externer Funktionen können aufgerufen werden:</span>
    <span class="hljs-comment">// - in diesem Contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">externalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"external function called"</span>;
    }

    <span class="hljs-comment">// This function will not compile since we&#x27;re trying to call</span>
    <span class="hljs-comment">// an external function here.</span>
    <span class="hljs-comment">// Diese Funktion wird nicht kompiliert, weil wir versuchen, eine externe Funktion aufzurufen.</span>
    <span class="hljs-comment">// function testExternalFunc() public pure returns (string memory) {</span>
    <span class="hljs-comment">//     return externalFunc();</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// Zustands Variablen</span>
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">private</span> privateVar <span class="hljs-operator">=</span> <span class="hljs-string">"meine private Variable"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">internal</span> internalVar <span class="hljs-operator">=</span> <span class="hljs-string">"meine internal Variable"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> publicVar <span class="hljs-operator">=</span> <span class="hljs-string">"meine public Variable"</span>;

    <span class="hljs-comment">// Zustandsvariablen können nicht extern sein, daher wird diese Anweisung nicht kompiliert.</span>
    <span class="hljs-comment">// string external externalVar = "meine external Variable";</span>
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Child</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Base</span> </span>{
    <span class="hljs-comment">// Vererbte Contracts haben keine Zugriff auf private Funktionen und Zustandsvariablen.</span>
    <span class="hljs-comment">// function testPrivateFunc() public pure returns (string memory) {</span>
    <span class="hljs-comment">//     return privateFunc();</span>
    <span class="hljs-comment">// }</span>


    <span class="hljs-comment">// Interner Funktionsaufruf kann innerhalb eines Kindkontracts aufgerufen werden.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testInternalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> internalFunc();
    }
}
</code></pre>
`

export default html
