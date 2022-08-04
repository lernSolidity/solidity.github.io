// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // State Variablen werden auf der Blockchain gespeichert 
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local Variablen sind nur bei Ausführung dieser Funktion existet 
        // und werden nicht auf der Blockchain gespeichert 
        uint i = 456;

        // Ein paar Beispiele für global Variablen
        uint timestamp = block.timestamp; // Aktueller Zeitstempel des letzten Blocks der Blockchain
        address sender = msg.sender; // Adresse von dem Caller/Ausführer der Funktion
    }
}
