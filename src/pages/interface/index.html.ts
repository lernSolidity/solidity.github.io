// metadata
export const version = "0.8.13"
export const title = "Interface"
export const description = "Beispiel ein Interfaces in Solidity"

const html = `<p>Du kannst ein Interface definieren, um mit anderen Contracten zu interagieren.</p>
<p>Interface</p>
<ul>
<li>ein Interface hat keine Funktionen implementiert</li>
<li>ein Interface kann von anderen Interfaces erben</li>
<li>alle deklarierten Funktionen müssen extern sein</li>
<li>es ist keine Konstruktor deklariert</li>
<li>keine Zustandsvariablen deklarier</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ICounter</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">count</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyContract</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">incrementCounter</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _counter</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        ICounter(_counter).increment();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCount</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _counter</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> ICounter(_counter).count();
    }
}

<span class="hljs-comment">// Uniswap Beispiel</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">UniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> tokenA, <span class="hljs-keyword">address</span> tokenB</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pair</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">UniswapV2Pair</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReserves</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint112</span> reserve0,
            <span class="hljs-keyword">uint112</span> reserve1,
            <span class="hljs-keyword">uint32</span> blockTimestampLast
        </span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapExample</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> factory <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTokenReserves</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> UniswapV2Factory(factory).getPair(dai, weth);
        (<span class="hljs-keyword">uint</span> reserve0, <span class="hljs-keyword">uint</span> reserve1, ) <span class="hljs-operator">=</span> UniswapV2Pair(pair).getReserves();
        <span class="hljs-keyword">return</span> (reserve0, reserve1);
    }
}
</code></pre>
`

export default html
