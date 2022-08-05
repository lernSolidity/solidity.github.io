// metadata
export const version = "0.8.13"
export const title = "Konstruktur"
export const description = "Lerne, wie Smart Contracts in Solidity einen Konstruktor initialisieren."

const html = `<p>Ein <code>constructor</code> ist eine optionale Funktion, die beim Erstellen/Veröffentlichen eines Contracts auf der Blockchain ausgeführt wird.</p>
<p>Hier sind Beispiele für die Initialisierung von <code>constructors</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// Basis contract X</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">X</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;

    <span class="hljs-comment">// Initialisierung des Contracts mit einem Namen</span>
    <span class="hljs-comment">// Nach der Veröffentlichung kann der Name nicht mehr verändert werden.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
    }
}

<span class="hljs-comment">// Basis contract Y</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Y</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> text;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) </span>{
        text <span class="hljs-operator">=</span> _text;
    }
}

<span class="hljs-comment">// Es gibt 2 Möglichkeiten, einen Parent Contract mit Parametern zu initialisieren.</span>
<span class="hljs-comment">// Gebe die Parameter der Vererbungsklasse als Liste an.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"Input to X"</span></span>), <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Input to Y"</span></span>) </span>{

}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-comment">// Geben die Parameter der Vererbungsklasse als Liste an im Konstruktor an.</span>
    <span class="hljs-comment">// Ähnlich wie bei den Modifier Funktionen.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) <span class="hljs-title">X</span>(<span class="hljs-params">_name</span>) <span class="hljs-title">Y</span>(<span class="hljs-params">_text</span>) </span>{}
}


<span class="hljs-comment">// Die Konstruktoren der Parent-Contracts werden immer in der geschriebenen Reihenfolge der Vererbung aufgerufen.</span>

<span class="hljs-comment">// Reihenfolge der aufgerufenen Konstruktoren der Vererbungsklassen:</span>
<span class="hljs-comment">// 1. X</span>
<span class="hljs-comment">// 2. Y</span>
<span class="hljs-comment">// 3. D</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) </span>{}
}

<span class="hljs-comment">// Reihenfolge der aufgerufenen Konstruktoren der Vererbungsklassen:</span>
<span class="hljs-comment">// 1. X</span>
<span class="hljs-comment">// 2. Y</span>
<span class="hljs-comment">// 3. E</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) </span>{}
}
</code></pre>
`

export default html
