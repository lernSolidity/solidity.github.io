// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Payable {
    // Payable Adressen können Ether empfangen
    address payable public owner;

    //  Payable Konstruktoren können Ether empfangen
    constructor() payable {
        owner = payable(msg.sender);
    }

    // Funktion zum Einzahlen von Ether in diesem Contract.
    // Ruf diese Funktion mit etwas Ether auf.
    // Der Kontostand dieses Contracts wird automatisch, um den Betrag des gesendeten Ethers aktualisiert.
    function deposit() public payable {}

    // Rufe diese Funktion mit etwas Ether auf
    // Wirft einen Fehler, da diese Funktion nicht payable ist.
    function notPayable() public {}

    // Funktion zum Abheben aller Ether aus dieses Contract.
    function withdraw() public {
        // erhalte den Betrag von Ether in diesem Contract
        uint amount = address(this).balance;

        // sende alles Ether an den Owner
        // Der Owner kann Ether empfangen, da die Adresse des Owners payable ist
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // Function to transfer Ether from this contract to address from input
    // Funktion zum Übertragen aller Ether aus dieses Contract an die Adresse from. 
    function transfer(address payable _to, uint _amount) public {
        // "to" ist als payable zu deklarieren
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
}
