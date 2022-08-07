// metadata
export const version = "0.8.13"
export const title = "Hello World"
export const description = "Hello World in Solidity"

const html = `<p>Das "Hello World" ist das klassiche Anfangsbeispiel für jede Programmiersprache. </p>
<p>Um mit dem Programmieren von Smart Contract zu starten, brauchst du erstmal keine große Entwicklungsumgebung installieren. Du kannst ganz einfach in deinem Browser <a href="https://remix.ethereum.org/">mit Remix</a> starten. </p>
<p>Mit dem Stichwort <code>pragma</code> wird die Verision des Solidity Compilers festgelegt. Aktuell verwenden wir die Solidity Version <em>0.8.13</em>.</p>
<p>Durch das <strong>^</strong> compiler version must be greater than or equal to 0.8.13 and less than 0.9.0</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-comment">// compiler version must be greater than or equal to 0.8.13 and less than 0.9.0</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HelloWorld</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> greet <span class="hljs-operator">=</span> <span class="hljs-string">"Hello World!"</span>;
}
</code></pre>
`

export default html
