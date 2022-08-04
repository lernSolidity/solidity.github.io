// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Immutable {
    // Die Code-Konvetion der Konstanten gilt ebenfalls für Immutable Variablen 
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        // Hier wird der schlussendliche, der nicht veränderbare Werte einmalig gesetzt.
        MY_UINT = _myUint;
    }
}
