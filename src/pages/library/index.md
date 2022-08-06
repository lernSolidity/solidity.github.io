---
title: Library
version: 0.8.13
description: Was ist eine Library und wie werden sie verwendet in deinem Solidity code?
---

Libraries sind ähnlich zu Contracts, aber diese können keine statische Variablen und auch keine Ether senden.

Eine Library ist "eingebettet" in den Contract, sofern alle Library Funktionen intern sind.

Ein direktes Aufrufen der Library von externen Quellen ist somit nicht möglich.

Andernfalls muss die Library zuerst bereitgestellt/veröffentlich werden und anschließend vom Contract initialisiert werden als externer Contract.


```solidity
{{{Library}}}
```
