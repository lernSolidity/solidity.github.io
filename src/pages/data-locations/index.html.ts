// metadata
export const version = "0.8.13"
export const title = "Speicherorte - Was ist Storage, Memory und Calldata?"
export const description = "Speicherorte - Was ist Storage, Memory und Calldata? >"

const html = `<p>Variablen werden entweder deklariert als  <code>storage</code>, <code>memory</code> oder <code>calldata</code>, um explizit den Speicherort einer Variable zu definieren.</p>
<ul>
<li><code>storage</code> - Variable ist eine Zustandsvariable (gespeichert auf der Blockchain)</li>
<li><code>memory</code> - Variable ist in <code>memory</code> und exsistiert nur solange eine Funktion ausgeführt wird</li>
<li><code>calldata</code> - Spezielle Speicherort, welcher genutzt wird für Eingabedaten einer Funktion</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DataLocations</span> </span>{
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) map;
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MyStruct</span> {
        <span class="hljs-keyword">uint</span> foo;
    }
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> MyStruct) myStructs;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{

        <span class="hljs-comment">// Aufruf der Funktion _f mit den State Variablen als Input</span>
        _f(arr, map, myStructs[<span class="hljs-number">1</span>]);

        <span class="hljs-comment">// Speicher das myStructs Element in storage</span>
        MyStruct <span class="hljs-keyword">storage</span> myStruct <span class="hljs-operator">=</span> myStructs[<span class="hljs-number">1</span>];
        <span class="hljs-comment">// speicher das Mystruct Element in memory  </span>
        MyStruct <span class="hljs-keyword">memory</span> myMemStruct <span class="hljs-operator">=</span> MyStruct(<span class="hljs-number">0</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">storage</span> _arr,
        <span class="hljs-keyword">mapping</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> =&gt; <span class="hljs-keyword">address</span></span>) <span class="hljs-keyword">storage</span> _map,
        MyStruct <span class="hljs-keyword">storage</span> _myStruct
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-comment">// mach was mit den storage-Variablen</span>
    }

    <span class="hljs-comment">// Zurückgeben von memory Variablen</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">g</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// mach was mit den array in memory</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">h</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">calldata</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// mach was mit den calldata array </span>
    }
}
</code></pre>
`

export default html
