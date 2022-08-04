// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
    // State Variable, um eine Zahl zu speichern auf der Blockchain
    uint public num;

    // Funktion wird per Transaktion ausgeführt.
    // Funktion überschreibt den aktuellen Wert von num mit dem Wert von _num
    // num = 0 -> TX set(420) -> num = 420 
    function set(uint _num) public {
        num = _num;
    }

    // Funktion gibt den aktuellen Wert von num zurück. Keine Transaktion wird benötigt.
    function get() public view returns (uint) {
        return num;
    }
}
