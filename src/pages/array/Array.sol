// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Array {
    // Wege um ein dynamisches Array zu initialisieren
    uint[] public arr;
    uint[] public arr2 = [1, 2, 3];
    // Initalisierung eines statischen Arrays mit einer Länge von 10 Elementen.
    // Alle Elemente sind nach der Initalisierung 0
    uint[10] public myFixedSizeArr;

    function get(uint i) public view returns (uint) {
        return arr[i];
    }

    // Es gibt die Möglichkeit in Solidity ein komplettes Array zurückzugeben.
    // Solche Funktionen sollten vermieden werden, 
    // aufgrund der Tatsache, dass Arrays eine unendliche Größe annehmen können.
    function getArr() public view returns (uint[] memory) {
        return arr;
    }

    function push(uint i) public {
        // Element zu einem Array hinzufügen.
        // Die Länge des Arrays wird um 1 erhöht.
        arr.push(i);
    }

    function pop() public {
        // Löscht das letzte Elements in einem Array.
        // Die Länge des Arrays wird um 1 verringert.
        arr.pop();
    }

    function getLength() public view returns (uint) {
        // Länge des Arrays zurückgegeben
        return arr.length;
    }

    function remove(uint index) public {
        // Das Löschen eines Elements an der Stelle index verändert nicht die Länge des Arrays.
        // Das Element wird auf seinen "default"-Wert zurückgesetzt, je nach Datentyp.
        // In diesem Fall wäre es 0
        delete arr[index];
    }

    function examples() external {
        // Erstellt eine Array in Memory (flüchtiger Speicher).
        // Es ist dabei nur möglich Arrays mit einer vordefinierten Länge zu erstellen.
        uint[] memory a = new uint[](5);
    }
}
