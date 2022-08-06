---
title: Sending Ether (transfer, send, call)
version: 0.8.13
description: An example of sending Ether in Solidity
---

### Wie wird Ether versendet?

Ether kann an andere contracts gesendet werden, per:

- transfer (2300 gas, wirft einen Fehler aus)
- send (2300 gas, gibt einen bool zurück)
- call (weitergabe des gesamten oder wahlweise nur ein Bruchteil des Gasses der Transaktio. Gibt im Anschluss einen bool zurück, ob Transfer geklappt hat)



### Wie wird Ether empfangen?

Ein Contract, welches Ether empfängt, muss mindestens eine der folgenden Funktionen haben:

- `receive() external payable`
- `fallback() external payable`

`receive()` wird aufgerufen, wenn `msg.data` leer ist, andernfalls `fallback()` wird aufgerufen.

### Welche Methode sollte man verwenden?

`call` in Kombination mit dem Schutz vor einer Reentrancy-Attacke ist die empfohlene Methode seit Dezember 2019

Schutz gegen re-entrancy mit

- alle Zustände ändern, bevor andere Contracts aufgerufen werden
- Schutz vor Reentrancy-Attacken durch Modifier `nonReentrant`


```solidity
{{{SendingEther}}}
```
