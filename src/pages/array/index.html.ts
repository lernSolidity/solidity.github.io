// metadata
export const version = "0.8.13"
export const title = "Array"
export const description = "Lerne wie Arrays in Solidity funktionieren"

const html = `<p>Arrays sind dynamische Datenstrukturen. Trotzdem gibt es die Möglichkeit, die Länge eines Arrays zu begrenzen. Dies kann Gaskosten reduzieren.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Array</span> </span>{
    <span class="hljs-comment">// Wege um ein dynamisches Array zu initialisieren</span>
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr2 <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
    <span class="hljs-comment">// Initalisierung eines statischen Arrays mit einer Länge von 10 Elementen.</span>
    <span class="hljs-comment">// Alle Elemente sind nach der Initalisierung 0</span>
    <span class="hljs-keyword">uint</span>[<span class="hljs-number">10</span>] <span class="hljs-keyword">public</span> myFixedSizeArr;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> arr[i];
    }

    <span class="hljs-comment">// Es gibt die Möglichkeit in Solidity ein komplettes Array zurückzugeben.</span>
    <span class="hljs-comment">// Solche Funktionen sollten vermieden werden, </span>
    <span class="hljs-comment">// aufgrund der Tatsache, dass Arrays eine unendliche Größe annehmen können.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> arr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">push</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Element zu einem Array hinzufügen.</span>
        <span class="hljs-comment">// Die Länge des Arrays wird um 1 erhöht.</span>
        arr.<span class="hljs-built_in">push</span>(i);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">pop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Löscht das letzte Elements in einem Array.</span>
        <span class="hljs-comment">// Die Länge des Arrays wird um 1 verringert.</span>
        arr.<span class="hljs-built_in">pop</span>();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLength</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Länge des Arrays zurückgegeben</span>
        <span class="hljs-keyword">return</span> arr.<span class="hljs-built_in">length</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Das Löschen eines Elements an der Stelle index verändert nicht die Länge des Arrays.</span>
        <span class="hljs-comment">// Das Element wird auf seinen "default"-Wert zurückgesetzt, je nach Datentyp.</span>
        <span class="hljs-comment">// In diesem Fall wäre es 0</span>
        <span class="hljs-keyword">delete</span> arr[index];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">examples</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Erstellt eine Array in Memory (flüchtiger Speicher).</span>
        <span class="hljs-comment">// Es ist dabei nur möglich Arrays mit einer vordefinierten Länge zu erstellen.</span>
        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> a <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint</span>[](<span class="hljs-number">5</span>);
    }
}
</code></pre>
<h3 id="wie-wird-ein-element-aus-dem-array-entfernt">Wie wird ein Element aus dem Array entfernt?</h3>
<p>Remove array element by shifting elements from right to left
Tricks, wie in dynamischen Arrays ein Element löschen kannst, ohne das ein "default"-Wert.</p>
<p>Entweder verschiebt man die Elemente mit einer For-Loop:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ArrayRemoveByShifting</span> </span>{
    <span class="hljs-comment">// [1, 2, 3] -- remove(1) --&gt; [1, 3, 3] --&gt; [1, 3]</span>
    <span class="hljs-comment">// [1, 2, 3, 4, 5, 6] -- remove(2) --&gt; [1, 2, 4, 5, 6, 6] --&gt; [1, 2, 4, 5, 6]</span>
    <span class="hljs-comment">// [1, 2, 3, 4, 5, 6] -- remove(0) --&gt; [2, 3, 4, 5, 6, 6] --&gt; [2, 3, 4, 5, 6]</span>
    <span class="hljs-comment">// [1] -- remove(0) --&gt; [1] --&gt; []</span>

    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(_index <span class="hljs-operator">&lt;</span> arr.<span class="hljs-built_in">length</span>, <span class="hljs-string">"index out of bound"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> _index; i <span class="hljs-operator">&lt;</span> arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            arr[i] <span class="hljs-operator">=</span> arr[i <span class="hljs-operator">+</span> <span class="hljs-number">1</span>];
        }
        arr.<span class="hljs-built_in">pop</span>();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        arr <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
        remove(<span class="hljs-number">2</span>);
        <span class="hljs-comment">// [1, 2, 4, 5]</span>
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">3</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">5</span>);
        <span class="hljs-built_in">assert</span>(arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>);

        arr <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>];
        remove(<span class="hljs-number">0</span>);
        <span class="hljs-comment">// []</span>
        <span class="hljs-built_in">assert</span>(arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>);
    }
}
</code></pre>
<p>Oder das Element wird an das Ende des Arrays kopiert und dann gelöscht:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ArrayReplaceFromEnd</span> </span>{
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;

    <span class="hljs-comment">// Löschen eines Elementes führt zu einer "Lücke"/"default"-Wert im Array.</span>
    <span class="hljs-comment">// Um das Array kompakt zu halten, gibt es einen Trick.</span>
    <span class="hljs-comment">// Das Element an der Stelle index wird an das Ende des Arrays gesetzt</span>
    <span class="hljs-comment">// und anschliesend die Remove Operation durchgeführt.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        arr[index] <span class="hljs-operator">=</span> arr[arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>];
        arr.<span class="hljs-built_in">pop</span>();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        arr <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];

        remove(<span class="hljs-number">1</span>);
        <span class="hljs-comment">// [1, 4, 3]</span>
        <span class="hljs-built_in">assert</span>(arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>);

        remove(<span class="hljs-number">2</span>);
        <span class="hljs-comment">// [1, 4]</span>
        <span class="hljs-built_in">assert</span>(arr.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>);
        <span class="hljs-built_in">assert</span>(arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>);
    }
}
</code></pre>
`

export default html
