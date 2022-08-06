// metadata
export const version = "0.8.13"
export const title = "Verifizierung von Signaturen in Solidity"
export const description = "Wie werden Signaturen in Solidity verifiziert"

const html = `<p>Messages can be signed off chain and then verified on chain using a smart contract.
Es können Nachrichten off-chain signiert werden, welche dann wiederum im Smart Contract verifiziert werden können</p>
<p><a href="https://github.com/t4sk/hello-erc20-permit/blob/main/test/verify-signature.js">Ein Bespiel für die das signieren off-chain mit ethers.js</a></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">/* Signature Verifikation

Wie wird signiert und verifiert?

# Signatur 
1. Erstelle eine Nachricht welche Signiert werden soll
2. Berechne den Hash die Nachricht
3. Signiere den Hash (off chain, um deinen privaten Schlüssel zu schützen)

# Verifikation
1. Erstelle einen Hash aus der originalen Nachricht
2. Wiederherstellen des Signers aus der Signatur und dem Hash
3. Vergleiche den wiederhergestellten Signer mit dem angegebenen Signer der ursprünglichen Nachricht
*/</span>
<span class="hljs-operator">*</span><span class="hljs-operator">/</span>
<span class="hljs-operator">*</span><span class="hljs-operator">/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">VerifySignature</span> </span>{
    <span class="hljs-comment">/* 1. Frontend Signer erhalten, welcher eine Nachricht signieren soll
    ethereum.enable()
    */</span>

    <span class="hljs-comment">/* 2. Aufrufen der getMessageHash-Funktion mit der Nachricht welche signiert werden soll 
    getMessageHash(
        0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C,
        123,
        "SimpleKI machts möglich",
        1
    )
    
    Der daraus resultierende Hash wird zurückgegeben:
    hash = "0xcf36ac4f97dc10d91fc2cbb20d718e94a8cbfe0f82eaedc6a4aa38946fb797cd"
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMessageHash</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_to, _amount, _message, _nonce));
    }

    <span class="hljs-comment">/* 3. Signieren der hash Nachricht
    # using browser
    # unter Verwendung des Browsers
    account = "kopiere und füge Account von Signer hier ein"
    ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)
    
    # using web3
    web3.personal.sign(hash, web3.eth.defaultAccount, console.log)


    Signature will be different for different accounts
    Die Signatur wird unterschiedlich für verschiedene Accounts! Das ist die Hauptfunktion eines Hashes
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getEthSignedMessageHash</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _messageHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-comment">/*
        Signatur wird erstellt durch eine Signierung eines keccak256-Hashes mit dem folgenden Format:
        "\\x19Ethereum Signed Message\\n" + len(msg) + msg
        */</span>
        <span class="hljs-keyword">return</span>
            <span class="hljs-built_in">keccak256</span>(
                <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-string">"\\x19Ethereum Signed Message:\\n32"</span>, _messageHash)
            );
    }

    <span class="hljs-comment">/* 4. Verify signature
    4. Verifikation der Signatur
    signer = 0xB273216C05A8c0D4F0a4Dd0d7Cae1D2EfFE636dd
    to = 0x14723A09BCff6D2A60DcdF7aA4AFf308FDDC160C
    amount = 123
    message = "SimpleKI machts möglich"
    nonce = 1
    signature =
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _signer,
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint</span> _nonce,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> signature
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> messageHash <span class="hljs-operator">=</span> getMessageHash(_to, _amount, _message, _nonce);
        <span class="hljs-keyword">bytes32</span> ethSignedMessageHash <span class="hljs-operator">=</span> getEthSignedMessageHash(messageHash);

        <span class="hljs-keyword">return</span> recoverSigner(ethSignedMessageHash, signature) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _signer;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recoverSigner</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _ethSignedMessageHash, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s, <span class="hljs-keyword">uint8</span> v) <span class="hljs-operator">=</span> splitSignature(_signature);

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">ecrecover</span>(_ethSignedMessageHash, v, r, s);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">splitSignature</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> sig</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">bytes32</span> r,
            <span class="hljs-keyword">bytes32</span> s,
            <span class="hljs-keyword">uint8</span> v
        </span>)
    </span>{
        <span class="hljs-built_in">require</span>(sig.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">65</span>, <span class="hljs-string">"invalid signature length"</span>);

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">/*
            Die ersten 32 Bytes speichern die Länge der Signatur
            
            add(sig, 32) = pointer of sig + 32
            effektiverweise springt der Pointer von sig um 32 Bytes weiter
            
            mload(p) lädt die nächsten 32 Bytes von der Speicheradresse p in die Speicher
            */</span>

            <span class="hljs-comment">// erste 32 Bytes, nach dem Präfix der Länge der Signatur </span>
            r <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">32</span>))
            <span class="hljs-comment">// die zweiten 32 bytes ist der s-Wert</span>
            s <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">64</span>))
            <span class="hljs-comment">// letzter Teil der Signatur ist der v-Wert</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">byte</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">96</span>)))
        }

        <span class="hljs-comment">// (r, s, v) werden implizit zurückgegeben, aufgrund des vordefinierten Rückgabetyps</span>
        <span class="hljs-comment">// in der Definition der Funktion</span>
    }
}
</code></pre>
`

export default html
