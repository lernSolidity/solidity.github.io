---
title: View und Pure Funktionen
version: 0.8.13
description: Ein Beispiel für View und Pure Funktionen in Solidity
---

`Getter`-Funktionen, dienen dazu den aktuellen Wert bestimmte Zustandsvariablen zu lesen. Diese Art von Funktionen können entweder als `view` or `pure` deklariert werden. Der Solidity-Compiler wird dich ebenfalls darauf hinweisen, sofern du unbeabsichtigst das Stichwort vergessen hast. 

`View` function declares that no state will be changed.
Funktionen werden mit dem Stichwort `View` deklariert, wenn **eine** Zustandvariable des Smart Contracts in der Funktion enthalten ist.


Funktionen werden mit dem Stichwort `Pure` deklariert, wenn **keine** Zustandvariable des Smart Contracts in der Funktion enthalten ist.
Eine Funktion, wo nur der `block.timestamp` ausgelesen wird, ist aufgrund der Unabhängigkeit zum Smart Contract mit einem `pure`zu versehen.

```solidity
{{{ViewAndPureFunctions}}}
```
