// metadata
export const version = "0.8.13"
export const title = "Contract die neue Contracts erstellen können."
export const description = "Mit einem Contract einen neuen Contract erstellen."

const html = `<p>Contracts können von anderen Contracts erstellt werden, unter Verwedung von <code>new</code>. Seit der Version 0.8.0 unterstützt das Kennwort <code>new</code> die neue Funktionalität <code>create2</code>, sofern ein <code>salt</code> als Option angegeben wird. Das <code>salt</code> Argument macht es möglich, dass kleine Veränderungen bei der Kompilierung mit eingebaut werden und jeder erstellt Contract mithilfe der Methode einen neue Adresse erhält.</p>
<p><a href="https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2">Lese dazu am besten die Dokumentation</a></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Car</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> model;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> carAddr;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> _owner;
        model <span class="hljs-operator">=</span> _model;
        carAddr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CarFactory</span> </span>{
    Car[] <span class="hljs-keyword">public</span> cars;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Car car <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Car(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createAndSendEther</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create2</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _owner,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model,
        <span class="hljs-keyword">bytes32</span> _salt
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">salt</span>: _salt}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create2AndSendEther</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _owner,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model,
        <span class="hljs-keyword">bytes32</span> _salt
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-built_in">salt</span>: _salt}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCar</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">address</span> owner,
            <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> model,
            <span class="hljs-keyword">address</span> carAddr,
            <span class="hljs-keyword">uint</span> balance
        </span>)
    </span>{
        Car car <span class="hljs-operator">=</span> cars[_index];

        <span class="hljs-keyword">return</span> (car.owner(), car.model(), car.carAddr(), <span class="hljs-keyword">address</span>(car).<span class="hljs-built_in">balance</span>);
    }
}
</code></pre>
`

export default html
