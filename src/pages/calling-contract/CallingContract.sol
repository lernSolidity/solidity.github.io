// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Contract der aufgerufen wird
contract Callee {
    uint public x;
    uint public value;

    // Setzen der Zustandsvariable x auf einen bestimmten Wert
    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    // Setzen der Zustandsvariable value und x auf einen bestimmten Wert
    // Dabei ist value gleich dem Wert an Ether, welcher bei dem Aufruf der Funktion mitgesendet wurde.
    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}

// Contract, welcher den oberen Contract aufruft
// Contract setzt die Zustandsvariable X des oberen Contract
// und versendet den Betrag an den oberen Contract
contract Caller {
    // Ruft die Funktion setX aus dem oberen Contract auf
    function setX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }

    // Initialisiert zuerst den oberen Contract
    // Ruft anschließend die Funktion setX aus dem oberen Contract auf
    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }
    // Ruft die Funktion setXandSendEther aus dem oberen Contract auf
    // Übersendet den Ether Betrag der Transaktion an den oberen Contract
    function setXandSendEther(Callee _callee, uint _x) public payable {
        (uint x, uint value) = _callee.setXandSendEther{value: msg.value}(_x);
    }
}
