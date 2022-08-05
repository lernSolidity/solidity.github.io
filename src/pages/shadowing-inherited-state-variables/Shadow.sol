// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}


// Shadowing vererbter Zustandsvariablen ist seit der Version 0.6 in Solidity nicht mehr erlaubt
// Folgender Code wird nicht kompiliert und es wird eine Exception geworfen:
// contract B is A {
//     string public name = "Contract B"; <---- Nicht mehr erlaubt
// }

contract C is A {
    // Dies ist die korrekte Möglichkeit, um übergeordneten Statevariablen zu überschreiben.
    constructor() {
        name = "Contract C";
    }

    // Sofern C.getName aufgerufen wird, wird C.name mit dem Wert "Contract C" ausgegeben.
}
