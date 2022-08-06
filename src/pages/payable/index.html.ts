// metadata
export const version = "0.8.13"
export const title = "Payable"
export const description = "Ein Bespiel für die Verwendung von payable in Solidity"

const html = `<p>Funktionen und Adressen, die als <code>payable</code> deklariert wurden, können <code>ether</code> als <code>msg.value</code> als "Zahlung" annehmen. </p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Payable</span> </span>{
    <span class="hljs-comment">// Payable Adressen können Ether empfangen</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-comment">//  Payable Konstruktoren können Ether empfangen</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-comment">// Funktion zum Einzahlen von Ether in diesem Contract.</span>
    <span class="hljs-comment">// Ruf diese Funktion mit etwas Ether auf.</span>
    <span class="hljs-comment">// Der Kontostand dieses Contracts wird automatisch, um den Betrag des gesendeten Ethers aktualisiert.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-comment">// Rufe diese Funktion mit etwas Ether auf</span>
    <span class="hljs-comment">// Wirft einen Fehler, da diese Funktion nicht payable ist.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">notPayable</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Funktion zum Abheben aller Ether aus dieses Contract.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// erhalte den Betrag von Ether in diesem Contract</span>
        <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;

        <span class="hljs-comment">// sende alles Ether an den Owner</span>
        <span class="hljs-comment">// Der Owner kann Ether empfangen, da die Adresse des Owners payable ist</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> owner.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-comment">// Function to transfer Ether from this contract to address from input</span>
    <span class="hljs-comment">// Funktion zum Übertragen aller Ether aus dieses Contract an die Adresse from. </span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// "to" ist als payable zu deklarieren</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
