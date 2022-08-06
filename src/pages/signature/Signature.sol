// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* Signature Verifikation

Wie wird signiert und verifiert?

# Signatur 
1. Erstelle eine Nachricht welche Signiert werden soll
2. Berechne den Hash die Nachricht
3. Signiere den Hash (off chain, um deinen privaten Schlüssel zu schützen)

# Verifikation
1. Erstelle einen Hash aus der originalen Nachricht
2. Wiederherstellen des Signers aus der Signatur und dem Hash
3. Vergleiche den wiederhergestellten Signer mit dem angegebenen Signer der ursprünglichen Nachricht
*/
*/
*/

contract VerifySignature {
    /* 1. Frontend Signer erhalten, welcher eine Nachricht signieren soll
    ethereum.enable()
    */

    /* 2. Aufrufen der getMessageHash-Funktion mit der Nachricht welche signiert werden soll 
    getMessageHash(
        0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C,
        123,
        "SimpleKI machts möglich",
        1
    )
    
    Der daraus resultierende Hash wird zurückgegeben:
    hash = "0xcf36ac4f97dc10d91fc2cbb20d718e94a8cbfe0f82eaedc6a4aa38946fb797cd"
    */
    function getMessageHash(
        address _to,
        uint _amount,
        string memory _message,
        uint _nonce
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _amount, _message, _nonce));
    }

    /* 3. Signieren der hash Nachricht
    # using browser
    # unter Verwendung des Browsers
    account = "kopiere und füge Account von Signer hier ein"
    ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)
    
    # using web3
    web3.personal.sign(hash, web3.eth.defaultAccount, console.log)


    Signature will be different for different accounts
    Die Signatur wird unterschiedlich für verschiedene Accounts! Das ist die Hauptfunktion eines Hashes
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */
    function getEthSignedMessageHash(bytes32 _messageHash)
        public
        pure
        returns (bytes32)
    {
        /*
        Signatur wird erstellt durch eine Signierung eines keccak256-Hashes mit dem folgenden Format:
        "\x19Ethereum Signed Message\n" + len(msg) + msg
        */
        return
            keccak256(
                abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash)
            );
    }

    /* 4. Verify signature
    4. Verifikation der Signatur
    signer = 0xB273216C05A8c0D4F0a4Dd0d7Cae1D2EfFE636dd
    to = 0x14723A09BCff6D2A60DcdF7aA4AFf308FDDC160C
    amount = 123
    message = "SimpleKI machts möglich"
    nonce = 1
    signature =
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */
    function verify(
        address _signer,
        address _to,
        uint _amount,
        string memory _message,
        uint _nonce,
        bytes memory signature
    ) public pure returns (bool) {
        bytes32 messageHash = getMessageHash(_to, _amount, _message, _nonce);
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

        return recoverSigner(ethSignedMessageHash, signature) == _signer;
    }

    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature)
        public
        pure
        returns (address)
    {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);

        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory sig)
        public
        pure
        returns (
            bytes32 r,
            bytes32 s,
            uint8 v
        )
    {
        require(sig.length == 65, "invalid signature length");

        assembly {
            /*
            Die ersten 32 Bytes speichern die Länge der Signatur
            
            add(sig, 32) = pointer of sig + 32
            effektiverweise springt der Pointer von sig um 32 Bytes weiter
            
            mload(p) lädt die nächsten 32 Bytes von der Speicheradresse p in die Speicher
            */

            // erste 32 Bytes, nach dem Präfix der Länge der Signatur 
            r := mload(add(sig, 32))
            // die zweiten 32 bytes ist der s-Wert
            s := mload(add(sig, 64))
            // letzter Teil der Signatur ist der v-Wert
            v := byte(0, mload(add(sig, 96)))
        }

        // (r, s, v) werden implizit zurückgegeben, aufgrund des vordefinierten Rückgabetyps
        // in der Definition der Funktion
    }
}
