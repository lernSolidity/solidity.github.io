---
title: Aufrufen von anderen Contracts in einem Contract
version: 0.8.13
description: In Solidity, gibt es mehrere Wege, um Funktionen anderer Contracts aufzurufen
---

Contracts können auch andere Contracts aufrufen.

Die einfachste Möglichkeit ist es, `A.foo(x, y, z)` aufzurufen.

Eine anderer Weg ist es, einen anderen Contract durch einen low-level `call` aufzurufen.

Diese Methode wird nicht empfohlen. Außer du weißt, was du tust.


```solidity
{{{CallingContract}}}
```
