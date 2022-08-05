// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract FunctionModifier {
    // Wir verwenden diese Variablen um zu zeigen, wie modifiers verwendet werden.
    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() {
        // Setze den Sender des Transaktions als Besitzer des Contracts.
        owner = msg.sender;
    }

    // Modifier checken, ob der Aufrufer der Besitzer des Contracts ist.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Unterstrich ist ein speziales Zeichen, das nur innerhalb einer Funktion verwendet wird.
        // Es dient dazu, dass Solidity den Rest des Codes ausführt.
        _;
    }

    // Modifiers können Eingabedaten akzeptieren. Dieser Modifier überprüft, ob die Adresse
    // nicht der Zero-Adresse (0x000000..00) entspricht.
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    // Modifiers können vor und nach einer Funktion aufgerufen werden.
    // Dieser Modifier verhindert, dass eine Funktion ausgeführt wird,
    // während sie noch ausgeführt wird.
    modifier noReentrancy() {
        require(!locked, "No reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function decrement(uint i) public noReentrancy {
        x -= i;

        if (i > 1) {
            decrement(i - 1);
        }
    }
}
