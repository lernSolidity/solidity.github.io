// metadata
export const version = "0.8.13"
export const title = "Vererbung | Inheritance"
export const description = "Beispeiel für Vererbung in Solidity"

const html = `<p>Solidity unterstützt mehrfach Vererbung. Contracts können von anderen Contracts erben, wenn das <code>is</code>-Schlüsselwort verwendet wird.</p>
<p>Funktionen die von einem Kind-Contract überschrieben werden müssen als <code>virtual</code> deklariiert werden.</p>
<p>Funktionen die von einem übergeordneten Contract überschrieben werden müssen mit dem Schlüsselwort <code>override</code> deklariiert werden.</p>
<p>Die Reihenfolge der Vererbung ist wichtig.</p>
<p>Die Vererbungs-Contracts müssen in der Reihenfolge von “am häufigsten basiert” bis “am häufigsten abgeleitet” aufgeführt werden.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">/* Graph der Vererbung
    A
   / \\
  B   C
 / \\ /
F  D,E

*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"A"</span>;
    }
}

<span class="hljs-comment">// Contracts vererben andere Contracts durch das Schlüsselwort &#x27;is&#x27;.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"B"</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"C"</span>;
    }
}


<span class="hljs-comment">// Contracts können von mehreren übergeordneten Contracts erben.</span>
<span class="hljs-comment">// Wenn eine Funktion aufgerufen wird, die in mehreren Contracten definiert ist,</span>
<span class="hljs-comment">// werden übergeordnete Contracts von rechts nach links in Tiefen-Reihenfolge gesucht (siehe oben).</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// D.foo() gibt "C" zurück</span>
    <span class="hljs-comment">// weil C ist die Vererbungsklasse, welche im oberen Graphen rechts angeordnert ist mit der Funktion foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">C</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// E.foo() gibt "B" zurück</span>
    <span class="hljs-comment">// weil B ist die Vererbungsklasse, welche im oberen Graphen rechts angeordnert ist mit der Funktion foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">C, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-comment">// Vererbungsklassen müssen in der Reihenfolge von “am häufigsten basiert” bis “am häufigsten abgeleitet” aufgeführt werden.</span>
<span class="hljs-comment">// Verändern der Reihenfolge von A und B wird ein Compilerfehler auslösen.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">F</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">A, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}
</code></pre>
`

export default html
