// metadata
export const version = "0.8.13"
export const title = "Error"
export const description = "Beispiel, wie Error in Solidity funktionieren "

const html = `<p>Sofern ein Fehler auftritt, dann werden alle Änderungen an dem Status des Contracts rückgängig gemacht.</p>
<p>Du kannst einen Fehler mit <code>require</code>, <code>revert</code> oder <code>assert</code> selbst auslösen.</p>
<ul>
<li><code>require</code> wird verwendet, um Eingaben und Bedingungen zu validieren, bevor die Funktion vollständig ausgeführt wird.</li>
<li><code>revert</code> ist ähnlich <code>require</code>. Weitere Informationen findest du unten im Code.</li>
<li><code>assert</code> wird verwendet, um Code zu überprüfen, welcher niemals <code>false</code> sein darf. Falls der Assertion-Fehler auftritt, ist es möglicherweise ein Fehler in den Eingabedaten.</li>
</ul>
<p>Verwende benutzerdefinierte Fehlermeldung, um Gas zu sparen.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title"><span class="hljs-built_in">Error</span></span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRequire</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// Require kann verwendet werden um Bedingungen zu validieren, z.B.:</span>
        <span class="hljs-comment">// - Inputs</span>
        <span class="hljs-comment">// - Bedingungen vor der Ausführung</span>
        <span class="hljs-comment">// - Rückgabewerte von Aufrufen von anderen Funktionen</span>
        <span class="hljs-built_in">require</span>(_i <span class="hljs-operator">&gt;</span> <span class="hljs-number">10</span>, <span class="hljs-string">"Input must be greater than 10"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRevert</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// Revert is useful when the condition to check is complex.</span>
        <span class="hljs-comment">// This code does the exact same thing as the example above</span>

        <span class="hljs-comment">// Revert ist nützlich, wenn eine Ausführung nicht gestattet sein </span>
        <span class="hljs-comment">// z.B. wenn jemanden nicht das NFT hat, um eine Funktion in deinem Contract auszuführen.</span>
        <span class="hljs-comment">// Dieser Code führt exakt dasselbe wie oben.</span>
        <span class="hljs-keyword">if</span> (_i <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">10</span>) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Input must be greater than 10"</span>);
        }
    }

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testAssert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-comment">// Assert ist nur für internen Fehler zu verwenden.</span>
        <span class="hljs-comment">// Hier wird geprüft, ob num immer 0 ist.</span>

        <span class="hljs-comment">// Hier wird geprüft, ob num immer 0 ist.</span>
        <span class="hljs-comment">// weil num nicht geändert werden kann.</span>
        <span class="hljs-built_in">assert</span>(num <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">// defineren eines custom errors </span>
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">InsufficientBalance</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> balance, <span class="hljs-keyword">uint</span> withdrawAmount</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCustomError</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _withdrawAmount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-keyword">uint</span> bal <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
        <span class="hljs-keyword">if</span> (bal <span class="hljs-operator">&lt;</span> _withdrawAmount) {
            <span class="hljs-keyword">revert</span> InsufficientBalance({balance: bal, withdrawAmount: _withdrawAmount});
        }
    }
}
</code></pre>
<p>Hier ein weiteres Beispiel:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Account</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_UINT <span class="hljs-operator">=</span> <span class="hljs-number">2</span><span class="hljs-operator">*</span><span class="hljs-operator">*</span><span class="hljs-number">256</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;

    <span class="hljs-comment">// Funktionen um einen bestimmten Betrag einzuzahlen</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance <span class="hljs-operator">=</span> balance;
        <span class="hljs-keyword">uint</span> newBalance <span class="hljs-operator">=</span> balance <span class="hljs-operator">+</span> _amount;

        <span class="hljs-comment">// balance + _amount wird nicht überschritten wenn balance + _amount &gt;= balance</span>
        <span class="hljs-built_in">require</span>(newBalance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> oldBalance, <span class="hljs-string">"Overflow"</span>);

        balance <span class="hljs-operator">=</span> newBalance;

        <span class="hljs-built_in">assert</span>(balance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> oldBalance);
    }

    <span class="hljs-comment">// Funktionen um einen bestimmten Betrag auszuzahlen</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance <span class="hljs-operator">=</span> balance;

        <span class="hljs-comment">// balance - _amount does not underflow if balance &gt;= _amount</span>
        <span class="hljs-comment">// balance - _amount wird nicht unterschritten wenn balance &gt;= _amount</span>
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _amount, <span class="hljs-string">"Underflow"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">&lt;</span> _amount) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Underflow"</span>);
        }

        balance <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;

        <span class="hljs-built_in">assert</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> oldBalance);
    }
}
</code></pre>
`

export default html
