// metadata
export const version = "0.8.13"
export const title = "Shadowing vererbter Zustandsvariablen"
export const description = "Ein Beispiel von Shadowing einer vererbter Zustandsvariablen  "

const html = `<p>Vererbung und das Überschreiben ist bei Funktionen möglich und nach klaren Regeln definiert. Wie werden jedoch Zustandsvariablen vererbt?</p>
<p>Zustandvariablen zu vererben und diese zu überschreiben ist nicht mehr einfach so möglich.</p>
<p>Wenn du eine vererbte Zustandsvariable in einem Kind-Kontrakt neu definiert möchtest, dann ist es wichtig zu wissen, wie der korrekte Weg ist. </p>
<p>Dies kann dir viele Kopfschmerzen ersparen, daher lies dir das Beispiel genau durch:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name <span class="hljs-operator">=</span> <span class="hljs-string">"Contract A"</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> name;
    }
}


<span class="hljs-comment">// Shadowing vererbter Zustandsvariablen ist seit der Version 0.6 in Solidity nicht mehr erlaubt</span>
<span class="hljs-comment">// Folgender Code wird nicht kompiliert und es wird eine Exception geworfen:</span>
<span class="hljs-comment">// contract B is A {</span>
<span class="hljs-comment">//     string public name = "Contract B"; &lt;---- Nicht mehr erlaubt</span>
<span class="hljs-comment">// }</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Dies ist die korrekte Möglichkeit, um übergeordneten Statevariablen zu überschreiben.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        name <span class="hljs-operator">=</span> <span class="hljs-string">"Contract C"</span>;
    }

    <span class="hljs-comment">// Sofern C.getName aufgerufen wird, wird C.name mit dem Wert "Contract C" ausgegeben.</span>
}
</code></pre>
`

export default html
