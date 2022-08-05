// metadata
export const version = "0.8.13"
export const title = "Funktionen"
export const description = "Wie werden Funktionen in Solidity geschrieben?"

const html = `<p><strong>Was sind Funktionen?</strong></p>
<p>Ein Smart Contract kann <code>keine</code>, <code>eine</code> oder <code>mehrere</code> Funktionen enthalten. Funktionen sind ausführbare hintereinander geschaltete Codezeilen. Man könnte Funktionen auch als in sich gekapselte Codebausteine verstehen. </p>
<p>Eine Funktion sollte immer nur eine Funktionalität abbilden! Es ist möglich mehrere Funktionalitäten in einer Funktion zu kombinieren, aber durch eine weitumfassende universelle Funktion wird der Code schlechter lesbar und Fehler oder Sicherheitslücken werden dadurch erst möglich.  </p>
<p><strong>Was braucht die Funktion?</strong></p>
<p>Eine Funktion <em><strong>kann</strong></em> Eingabedaten entgegennehmen. Eine Funktion benötigt nicht zwingend oder umbedingt Eingabedaten. Es können Funktionen ohne jegliche Eingaben definiert werden.  </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Function</span> </span>{
    <span class="hljs-comment">// Funktionen können mehrere Datentypen zurückgeben</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">returnMany</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">bool</span>,
            <span class="hljs-keyword">uint</span>
        </span>)
    </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Rückgabewerte können benannt werden</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">named</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> x,
            <span class="hljs-keyword">bool</span> b,
            <span class="hljs-keyword">uint</span> y
        </span>)
    </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Rückgabewerte können bei der Definition der Funktion benannt werden.</span>
    <span class="hljs-comment">// In diesem Fall ist es nicht umbedingt notwendig das return-Statement anzugeben.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">assigned</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> x,
            <span class="hljs-keyword">bool</span> b,
            <span class="hljs-keyword">uint</span> y
        </span>)
    </span>{
        x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        b <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        y <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
    }

    
    <span class="hljs-comment">// Verwende das Destrukturierungs-Zuweisung wenn eine andere Funktion aufgerufen wird.</span>
    <span class="hljs-comment">// Funktionen können mehrere Datentypen zurückgeben.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">destructuringAssignments</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">bool</span>,
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">uint</span>
        </span>)
    </span>{
        (<span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">bool</span> b, <span class="hljs-keyword">uint</span> j) <span class="hljs-operator">=</span> returnMany();

        <span class="hljs-comment">// Werte können auch ausgelassen werden.</span>
        (<span class="hljs-keyword">uint</span> x, , <span class="hljs-keyword">uint</span> y) <span class="hljs-operator">=</span> (<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);

        <span class="hljs-keyword">return</span> (i, b, j, x, y);
    }

    <span class="hljs-comment">// Ein Mapping kann nicht verwendet werden, sei es als Input oder als Output einer Funktion.</span>
    <span class="hljs-comment">// Ein Array kann verwendet werden als Input einer Funktion.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayInput</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Ein Array kann verwendet werden als Output einer Funktion.</span>
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayOutput</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> arr;
    }
}
</code></pre>
`

export default html
