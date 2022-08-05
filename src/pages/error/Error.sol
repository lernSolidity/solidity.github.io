// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Error {
    function testRequire(uint _i) public pure {
        // Require kann verwendet werden um Bedingungen zu validieren, z.B.:
        // - Inputs
        // - Bedingungen vor der Ausführung
        // - Rückgabewerte von Aufrufen von anderen Funktionen
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public pure {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above

        // Revert ist nützlich, wenn eine Ausführung nicht gestattet sein 
        // z.B. wenn jemanden nicht das NFT hat, um eine Funktion in deinem Contract auszuführen.
        // Dieser Code führt exakt dasselbe wie oben.
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public view {
        // Assert ist nur für internen Fehler zu verwenden.
        // Hier wird geprüft, ob num immer 0 ist.

        // Hier wird geprüft, ob num immer 0 ist.
        // weil num nicht geändert werden kann.
        assert(num == 0);
    }

    // defineren eines custom errors 
    error InsufficientBalance(uint balance, uint withdrawAmount);

    function testCustomError(uint _withdrawAmount) public view {
        uint bal = address(this).balance;
        if (bal < _withdrawAmount) {
            revert InsufficientBalance({balance: bal, withdrawAmount: _withdrawAmount});
        }
    }
}
