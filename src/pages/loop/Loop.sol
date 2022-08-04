// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Loop {
    function loop() public {
        // for loop
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // continue -> Falls i gleich 3 ist, dann springe zur nächsten Iteration der Schleife
                continue;
            }
            if (i == 5) {
                // break -> Falls i gleich 5 ist, dann gibt es keine weitere Iteration der Schleife. 
                // Diese Foor Loop wird es niemals schaffen bis zum Zähler i gleich 10 zu kommen. 
                break;
            }
        }

        // while loop
        uint j;
        while (j < 10) {
            j++;
        }
    }
}
