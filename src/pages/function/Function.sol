// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Function {
    // Funktionen können mehrere Datentypen zurückgeben
    function returnMany()
        public
        pure
        returns (
            uint,
            bool,
            uint
        )
    {
        return (1, true, 2);
    }

    // Rückgabewerte können benannt werden
    function named()
        public
        pure
        returns (
            uint x,
            bool b,
            uint y
        )
    {
        return (1, true, 2);
    }

    // Rückgabewerte können bei der Definition der Funktion benannt werden.
    // In diesem Fall ist es nicht umbedingt notwendig das return-Statement anzugeben.
    function assigned()
        public
        pure
        returns (
            uint x,
            bool b,
            uint y
        )
    {
        x = 1;
        b = true;
        y = 2;
    }

    
    // Verwende das Destrukturierungs-Zuweisung wenn eine andere Funktion aufgerufen wird.
    // Funktionen können mehrere Datentypen zurückgeben.
    function destructuringAssignments()
        public
        pure
        returns (
            uint,
            bool,
            uint,
            uint,
            uint
        )
    {
        (uint i, bool b, uint j) = returnMany();

        // Werte können auch ausgelassen werden.
        (uint x, , uint y) = (4, 5, 6);

        return (i, b, j, x, y);
    }

    // Ein Mapping kann nicht verwendet werden, sei es als Input oder als Output einer Funktion.
    // Ein Array kann verwendet werden als Input einer Funktion.
    function arrayInput(uint[] memory _arr) public {}

    // Ein Array kann verwendet werden als Output einer Funktion.
    uint[] public arr;

    function arrayOutput() public view returns (uint[] memory) {
        return arr;
    }
}
