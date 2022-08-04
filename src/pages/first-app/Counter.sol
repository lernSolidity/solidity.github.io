// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint public count;

    // Gibt die aktuelle Zähler zurück
    function get() public view returns (uint) {
        return count;
    }

    // Zähler +1 addiert  
    function inc() public {
        count += 1;
    }

    // Zähler -1 subtrahiert  
    function dec() public {
        // Funktion gibt einen Fehler zurück, sofern der Zähler auf 0 steht. 
        // Es ist nicht möglich negative Zahlen in Solidity zu erzeugen!
        count -= 1;
    }
}
