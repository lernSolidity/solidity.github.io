// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract Event {
    // Deklarierung eines Events
    // Es können bis zu 3 Parameter indexiert werden.
    // Indexierte Parameter helfen dabei, die Logs einer Transaktion nach jeweiligen Parameter zu filtern.
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        // Emitiere/Ausgeben ein Event mit dem Sender und dem Nachrichtentext.
        emit Log(msg.sender, "Hello World!");  
        emit Log(msg.sender, "Hello EVM!");
        // Emitiere/Ausgeben eines leeren Events.
        emit AnotherLog();
    }
}
