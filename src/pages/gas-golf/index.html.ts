// metadata
export const version = "0.8.13"
export const title = "Spare Gas für den User"
export const description = "Wie optimiere ich Gas in Solidity?"

const html = `<p>Ein paar Techniken, wie du dem Nutzer deines Smart Contracts Gaskosten ersparen kannst</p>
<ul>
<li><code>memory</code> in den Eingabedaten einer Funktion durch <code>calldata</code> ersetzen</li>
<li>Laden der Zustandsvariablen in memory </li>
<li><code>i++</code> mit <code>++i</code> ersetzen in for loops</li>
<li>Cachen der Array-Elemente</li>
<li>Kürzeren Loop Schleifen</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// gas golf</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GasGolf</span> </span>{
    <span class="hljs-comment">// start - 50908 gas</span>
    <span class="hljs-comment">// verwende calldata - 49163 gas</span>
    <span class="hljs-comment">// lade Zustandsvariablen in memory - 48952 gas</span>
    <span class="hljs-comment">// loop inkrementierungen - 48244 gas</span>
    <span class="hljs-comment">// cachen der array länge - 48209 gas</span>
    <span class="hljs-comment">// laden eines array elements in memory - 48047 gas</span>
    <span class="hljs-comment">// unchecked/unüberprüfte gegen overflow/underflow berechnung von i - 47309 gas</span>

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> total;

    <span class="hljs-comment">// Ausgangspunkt für die Gas optimiert</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">start_sumIfEvenAndLessThan99</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> nums</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> nums.<span class="hljs-built_in">length</span>; i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
            <span class="hljs-keyword">bool</span> isEven <span class="hljs-operator">=</span> nums[i] <span class="hljs-operator">%</span> <span class="hljs-number">2</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
            <span class="hljs-keyword">bool</span> isLessThan99 <span class="hljs-operator">=</span> nums[i] <span class="hljs-operator">&lt;</span> <span class="hljs-number">99</span>;
            <span class="hljs-keyword">if</span> (isEven <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> isLessThan99) {
                total <span class="hljs-operator">+</span><span class="hljs-operator">=</span> nums[i];
            }
        }
    }

    <span class="hljs-comment">// Version die Gas optimiert ist</span>
    <span class="hljs-comment">// [1, 2, 3, 4, 5, 100]</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sumIfEvenAndLessThan99</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">calldata</span> nums</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint</span> _total <span class="hljs-operator">=</span> total;
        <span class="hljs-keyword">uint</span> len <span class="hljs-operator">=</span> nums.<span class="hljs-built_in">length</span>;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> len; ) {
            <span class="hljs-keyword">uint</span> num <span class="hljs-operator">=</span> nums[i];
            <span class="hljs-keyword">if</span> (num <span class="hljs-operator">%</span> <span class="hljs-number">2</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> num <span class="hljs-operator">&lt;</span> <span class="hljs-number">99</span>) {
                _total <span class="hljs-operator">+</span><span class="hljs-operator">=</span> num;
            }
            <span class="hljs-keyword">unchecked</span> {
                <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
            }
        }

        total <span class="hljs-operator">=</span> _total;
    }
}
</code></pre>
`

export default html
