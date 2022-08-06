// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ReceiveEther {
    /*
    Welche Funktion wird aufgerufen, fallback() oder receive()?

           send Ether
               |
         ist msg.data leer?
              /        \
            ja         nein
            /            \
exisitiert receive()?   fallback()
         /   \
        ja   nein
        /      \
    receive()   fallback()
    */

    // Funktion um Ether zu empfangen. msg.data muss leer sein
    receive() external payable {}

    // Fallback Funktion wird aufgerufen, wenn msg.data nicht leer ist
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // Diese Funktion wird nicht mehr empfohlen, um Ether zu senden.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send gibt ein boolescher Wert zurück, der anzeigt, ob die Send-Funktion erfolgreich war.
        // Diese Funktion wird nicht mehr empfohlen, um Ether zu senden.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // Call gibt ein boolescher Wert zurück, der anzeigt, ob die Call-Funktion erfolgreich war.
        // Die Funktion wird nicht mehr empfohlen, um Ether zu senden.
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
