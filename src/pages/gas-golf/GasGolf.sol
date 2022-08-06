// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// gas golf
contract GasGolf {
    // start - 50908 gas
    // verwende calldata - 49163 gas
    // lade Zustandsvariablen in memory - 48952 gas
    // loop inkrementierungen - 48244 gas
    // cachen der array länge - 48209 gas
    // laden eines array elements in memory - 48047 gas
    // unchecked/unüberprüfte gegen overflow/underflow berechnung von i - 47309 gas

    uint public total;

    // Ausgangspunkt für die Gas optimiert
    function start_sumIfEvenAndLessThan99(uint[] memory nums) external {
        for (uint i = 0; i < nums.length; i += 1) {
            bool isEven = nums[i] % 2 == 0;
            bool isLessThan99 = nums[i] < 99;
            if (isEven && isLessThan99) {
                total += nums[i];
            }
        }
    }

    // Version die Gas optimiert ist
    // [1, 2, 3, 4, 5, 100]
    function sumIfEvenAndLessThan99(uint[] calldata nums) external {
        uint _total = total;
        uint len = nums.length;

        for (uint i = 0; i < len; ) {
            uint num = nums[i];
            if (num % 2 == 0 && num < 99) {
                _total += num;
            }
            unchecked {
                ++i;
            }
        }

        total = _total;
    }
}
