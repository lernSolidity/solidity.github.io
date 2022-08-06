// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Note: Deploy diesen Contract zuerst
contract B {
    // Note: Das Storage layout muss genau gleich sein wie contract A
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // A's storage wird nicht geändert,
        // Auch der storage von B wird nicht geändert.
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}
