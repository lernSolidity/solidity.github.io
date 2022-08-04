// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        // Fallunterscheidung

        // Fall1: x ist kleiner 10 -> -> Tritt ein, wenn x den Wert 0 bis 9 annimmt.
        if (x < 10) {
            return 0;
        // Fall2: x ist kleiner 20 -> Tritt ein, wenn x den Wert 10 bis 19 annimmt.
        } else if (x < 20) {
            return 1;
        // Sonstiger Fall -> Tritt ein, wenn x werde den Wert 0 bis 19 annimmt.
        } else {
            return 2;
        }
    }

    function ternary(uint _x) public pure returns (uint) {
        // if (_x < 10) {
        //     return 1;
        // }
        // return 2;

        // Kurzform des oberen if / else statements.
        // Besonderheit ist das "?". Es handelt sich hierbei um den ternary Operator,
        // welcher es uns erlaubt, "kürzere" if / else statements zu schreiben.
        return _x < 10 ? 1 : 2;
    }
}
