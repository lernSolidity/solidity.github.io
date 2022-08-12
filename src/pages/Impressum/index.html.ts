// metadata
export const version = "0.8.13"
export const title = "Impressum | Lern Solidity"
export const description = "Impressum | Lern Solidity"

const html = `<p><strong>Impressum</strong></p>
<p>Angaben gemäß § 5 TMG</p>
<ul>
<li><p>SimpleKI GmbH</p>
</li>
<li><p>Appellandstrasse 6</p>
</li>
<li><p>26419 Schortens</p>
</li>
</ul>
<p><strong>Vertreten durch:</strong></p>
<ul>
<li>Lennard Gerdes</li>
</ul>
<p><strong>Telefon:</strong></p>
<ul>
<li>+49 (0) 4461 986200</li>
</ul>
<p><strong>E-Mail:</strong></p>
<ul>
<li><a href="mailto:&#x73;&#117;&#x70;&#112;&#111;&#114;&#116;&#64;&#115;&#105;&#x6d;&#112;&#108;&#x65;&#x6b;&#x69;&#46;&#x64;&#x65;">&#x73;&#117;&#x70;&#112;&#111;&#114;&#116;&#64;&#115;&#105;&#x6d;&#112;&#108;&#x65;&#x6b;&#x69;&#46;&#x64;&#x65;</a></li>
</ul>
<p><strong>Verbraucherstreitbeilegung / Universalschlichtungsstelle</strong></p>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Impressum</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name <span class="hljs-operator">=</span> <span class="hljs-string">"Impressum"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> danke <span class="hljs-operator">=</span> <span class="hljs-string">"Danke fuer dein Interesse"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> frage <span class="hljs-operator">=</span> <span class="hljs-string">"Du hast eine Frage oder eine Verbesserungsvorschlag?"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> contact <span class="hljs-operator">=</span> <span class="hljs-string">"Dann schreib mir eine Email an"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> email <span class="hljs-operator">=</span> <span class="hljs-string">"support@simpleki.de"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> homepage <span class="hljs-operator">=</span> <span class="hljs-string">"www.simpleki.de"</span>;
}
</code></pre>
`

export default html
