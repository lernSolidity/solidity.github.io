// metadata
export const version = "0.8.13"
export const title = "Fehler vermeiden mit Try / Catch"
export const description = "Ein Bespiel von try / catch in Solidity"

const html = `<p><code>try / catch</code> kann nur Fehler aufhalten, welche von externen Funktionen aufgerufen werden oder während der Contract erstellt wird. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// Externer Contract für die try / catch Beispiele</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Foo</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner</span>) </span>{
        <span class="hljs-built_in">require</span>(_owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"invalid address"</span>);
        <span class="hljs-built_in">assert</span>(_owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0x0000000000000000000000000000000000000001</span>);
        owner <span class="hljs-operator">=</span> _owner;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunc</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-built_in">require</span>(x <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"require failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-string">"my func was called"</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Bar</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">LogBytes</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> data</span>)</span>;

    Foo <span class="hljs-keyword">public</span> foo;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// Foo Contract wird erstellt</span>
        foo <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Foo(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-comment">// Bespiel für try / catch mit externer Call</span>
    <span class="hljs-comment">// tryCatchExternalCall(0) =&gt; Log("externer call fehlgeschlagen")</span>
    <span class="hljs-comment">// tryCatchExternalCall(1) =&gt; Log("myFunc wurde aufgerufen")</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryCatchExternalCall</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">try</span> foo.myFunc(_i) <span class="hljs-keyword">returns</span> (<span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> result) {
            <span class="hljs-keyword">emit</span> Log(result);
        } <span class="hljs-keyword">catch</span> {
            <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"external call failed"</span>);
        }
    }

    <span class="hljs-comment">// Bespiel für try / catch mit Contract Creation</span>
    <span class="hljs-comment">// tryCatchNewContract(0x0000000000000000000000000000000000000003) =&gt; Log("invalide adresse")</span>
    <span class="hljs-comment">// tryCatchNewContract(0x0000000000000000000000000000000000000004) =&gt; LogBytes("")</span>
    <span class="hljs-comment">// tryCatchNewContract(0x0000000000000000000000000000000000000005) =&gt; Log("Foo erstellt")</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryCatchNewContract</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">try</span> <span class="hljs-keyword">new</span> Foo(_owner) <span class="hljs-keyword">returns</span> (Foo foo) {
            <span class="hljs-comment">// foo kann hier als Variable verwendet werden</span>
            <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Foo created"</span>);
        } <span class="hljs-keyword">catch</span> <span class="hljs-built_in">Error</span>(<span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> reason) {
            <span class="hljs-comment">// catch eines fehlgeschlagenen Aufrufs von revert() und require() mit einer nicht definierten Error-Message</span>
            <span class="hljs-keyword">emit</span> Log(reason);
        } <span class="hljs-keyword">catch</span> (<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> reason) {
            <span class="hljs-comment">// catch eines fehlgeschlagenen Aufrufs von assert()mit einer nicht definierten Error-Message</span>
            <span class="hljs-keyword">emit</span> LogBytes(reason);
        }
    }
}
</code></pre>
`

export default html
