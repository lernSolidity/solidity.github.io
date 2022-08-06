// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract Fallback {
    event Log(uint gas);

    // Fallback Funktion muss als extern definiert werden.
    fallback() external payable {
        // send / transfer (leitet 2300 gas an diese Fallback Funktion weiter)
        // call (leitet alles der Gas an diese Fallback Funktion weiter)
        emit Log(gasleft());
    }

    // Helper-Funktion um den Kontostand dieses Contracts zu prüfen.
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

// Wie leitet man die Zahlung an die fallback Funktion weiter
// entweder als transfer oder als call
contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
