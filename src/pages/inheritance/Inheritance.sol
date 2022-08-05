// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* Graph der Vererbung
    A
   / \
  B   C
 / \ /
F  D,E

*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// Contracts vererben andere Contracts durch das Schlüsselwort 'is'.
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}


// Contracts können von mehreren übergeordneten Contracts erben.
// Wenn eine Funktion aufgerufen wird, die in mehreren Contracten definiert ist,
// werden übergeordnete Contracts von rechts nach links in Tiefen-Reihenfolge gesucht (siehe oben).

contract D is B, C {
    // D.foo() gibt "C" zurück
    // weil C ist die Vererbungsklasse, welche im oberen Graphen rechts angeordnert ist mit der Funktion foo()
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() gibt "B" zurück
    // weil B ist die Vererbungsklasse, welche im oberen Graphen rechts angeordnert ist mit der Funktion foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Vererbungsklassen müssen in der Reihenfolge von “am häufigsten basiert” bis “am häufigsten abgeleitet” aufgeführt werden.
// Verändern der Reihenfolge von A und B wird ein Compilerfehler auslösen.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
