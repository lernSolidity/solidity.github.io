// metadata
export const version = "0.8.13"
export const title = "Calling Parent Contracts"
export const description = "Ein Beispiel, wie Funktionen eines Parent-Contracts aufgerufen werden in Solidity"

const html = `<p>Parent contracts können direkt aufgerufen werden, oder durch Verwendung des Schlüssels <code>super</code>.</p>
<p>Wenn das Keyword <code>super</code> verwendet wird, werden alle direkten Elternkontrakte aufgerufen.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-comment">/* Graph der Vererbung
   A
 /  \\
B   C
 \\ /
  D
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Dies ist ein Event.</span>
    <span class="hljs-comment">// Du kannst Events aus deiner Funktion ausgeben und diese werden in das Protokoll der Transaktion geschrieben.</span>
    <span class="hljs-comment">// In unserem Fall wird dies in den Funktionsaufrufen nützlich sein.</span>
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.foo called"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.bar called"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.foo called"</span>);
        A.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.foo called"</span>);
        A.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// Selbstversuch:</span>
    <span class="hljs-comment">// - Rufe D.foo aus und überprüfe die Transaktionsprotokolle.</span>
    <span class="hljs-comment">//   Obwohl D vererbt A, B und C, wurde nur C aufgerufen und anschließend dann A aufgerufen.</span>


    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) </span>{
        <span class="hljs-built_in">super</span>.foo();
    }

    <span class="hljs-comment">// Selbstversuch:</span>
    <span class="hljs-comment">// - Rufe D.bar aus und überprüfe die Transaktionsprotokolle.</span>
    <span class="hljs-comment">//   Es wurde zuerst C aufgerufen, dann B, und dann wie im ersten Versuch A.</span>
    <span class="hljs-comment">//   Obwohl super wurde zwei Mal aufgerufen (von B und C), wurde es nur A einmal aufgerufen.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) </span>{
        <span class="hljs-built_in">super</span>.bar();
    }
}
</code></pre>
`

export default html
