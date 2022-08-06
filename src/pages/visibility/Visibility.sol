// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract Base {
    // Private Funktionen können nur in diesem Contract aufgerufen werden.
    // Contracts die dieses Contract erben können nicht diese Funktion aufrufen.
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Interne Funktionen können aufgerufen werden
    // - in diesem Contract
    // - in contracts, die dieses Contract erben
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure virtual returns (string memory) {
        return internalFunc();
    }

    // ÖFfentlich können Funktionen aufgerufen werden:
    // - in diesem Contract
    // - in contracts, die dieses Contract erben
    // - von anderen Contracts und Accounts
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // Externer Funktionen können aufgerufen werden:
    // - in diesem Contract
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // This function will not compile since we're trying to call
    // an external function here.
    // Diese Funktion wird nicht kompiliert, weil wir versuchen, eine externe Funktion aufzurufen.
    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // Zustands Variablen
    string private privateVar = "meine private Variable";
    string internal internalVar = "meine internal Variable";
    string public publicVar = "meine public Variable";

    // Zustandsvariablen können nicht extern sein, daher wird diese Anweisung nicht kompiliert.
    // string external externalVar = "meine external Variable";
}

contract Child is Base {
    // Vererbte Contracts haben keine Zugriff auf private Funktionen und Zustandsvariablen.
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }


    // Interner Funktionsaufruf kann innerhalb eines Kindkontracts aufgerufen werden.
    function testInternalFunc() public pure override returns (string memory) {
        return internalFunc();
    }
}
