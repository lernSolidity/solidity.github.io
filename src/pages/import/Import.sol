// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Importieren von Foo.sol aus dem aktuellen Verzeichnis
import "./Foo.sol";
// Der import folgt der folgenden Syntax:
// import {symbol1 as alias, symbol2} from "filename";
import {Unauthorized, add as func, Point} from "./Foo.sol";

contract Import {
    // Initialisiere Foo.sol
    Foo public foo = new Foo();

    // Teste Foo.sol durch die Abfrage des Namens.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}
