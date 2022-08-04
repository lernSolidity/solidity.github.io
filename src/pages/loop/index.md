---
title: For und While Loop/schleife
version: 0.8.13
description: Beispiele für eine for und eine while loop/schleife in Solidity
---

Solidity supports `for`, `while`, and `do while` loops.
Solidity unterstützt `for`, `while`, und `do while` loops.

Don't write loops that are unbounded as this can hit the gas limit, causing your transaction to fail.
Es ist ratsam, keine Loops zu verwende, da es möglich ist, dass die Schleife/Loop niemals endet und der Nutzer seine gesamten Transaktionkosten verliert. 

Aus diesem Grund werden `while` und `do while` loops sehr selten verwendet. 

```solidity
{{{Loop}}}
```
