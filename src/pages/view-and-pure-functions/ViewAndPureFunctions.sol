// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ViewAndPure {
    uint public x = 1;

    // Funktion modifiziert nicht den State des Contracts
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Funktion modifiziert oder liest nicht den State des Contracts
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
