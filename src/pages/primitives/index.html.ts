// metadata
export const version = "0.8.13"
export const title = "Welche primitiven Daten Typen gibt es?"
export const description = "Primitive Daten Typen in Solidity"

const html = `<p>In Solidity gibt es 4 primitive Datentypen: </p>
<ul>
<li><code>boolean</code> </li>
<li><code>uint</code> </li>
<li><code>int</code> </li>
<li><code>address</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Primitives</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> boo <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

    <span class="hljs-comment">/*
    uint stands for unsigned integer, meaning non negative integers
    uint sind unsigned integer, welche nicht negativ sein können
    Es gibt sind in verschiedenen Speichergrößen 
    uint8 benötigt 8-bit Speicherplatz und kann Werte im Bereich von 0 bis 255 annehmen
        uint8   im Wertebereich von 0 bis 2 ** 8 - 1
        uint16  im Wertebereich von 0 bis 2 ** 16 - 1
        ...
        uint256 im Wertebereich von 0 bis 2 ** 256 - 1
    */</span>
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> u8 <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u <span class="hljs-operator">=</span> <span class="hljs-number">123</span>; <span class="hljs-comment">// uint ist die kurze Variante für uint256</span>

    <span class="hljs-comment">/*
    Negative Nummern are nur erlaubt im Datentyp int.
    Ähnlich wie uint, gibt es auch hier verschiedene Wertebereiche
    Startet bei int8 und geht hoch bis int256
    int8 benötigt 8-bit Speicherplatz und kann Werte im Bereich von -128 bis 127 annehmen
    
    int128 im Wertebereich von -2 ** 127 bis 2 ** 127 - 1
    int256 im Wertebereich von -2 ** 255 bis 2 ** 255 - 1
    */</span>
    <span class="hljs-keyword">int8</span> <span class="hljs-keyword">public</span> i8 <span class="hljs-operator">=</span> <span class="hljs-number">-1</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">-123</span>; <span class="hljs-comment">// int ist die kurze Variante für int256</span>

    <span class="hljs-comment">// Minimum und Maximum von int</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> minInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">min</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> maxInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">max</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c</span>;

    <span class="hljs-comment">/*
    In Solidity wird der Datentypen byte repräsentiert als Bytesequenzen
    Vom Datentyp byte gibt es zwei Arten:
    
     - Byte arrays mit vordefinierter Größe
     - Byte arrays mit dynamischer/anwachsender Größe
     
     Der Begriff Bytes in Solidity meint immer ein dynamisches Array von Bytes.
     Die Kurzversion für diesen Datentype wird byte[] geschrieben
    */</span>
    <span class="hljs-keyword">bytes1</span> a <span class="hljs-operator">=</span> <span class="hljs-number">0xb5</span>; <span class="hljs-comment">//  [10110101]</span>
    <span class="hljs-keyword">bytes1</span> b <span class="hljs-operator">=</span> <span class="hljs-number">0x56</span>; <span class="hljs-comment">//  [01010110]</span>

    <span class="hljs-comment">// Default Werte, sofern die Variable nicht mit einem Wert initialisiert wird.</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> defaultBoo; <span class="hljs-comment">// false</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> defaultUint; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> defaultInt; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> defaultAddr; <span class="hljs-comment">// 0x0000000000000000000000000000000000000000</span>
}
</code></pre>
`

export default html
