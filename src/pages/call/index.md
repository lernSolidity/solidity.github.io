---
title: Call
version: 0.8.13
description: Wie nutze ich die Call Funktion in Solidity?
---

`call` ist eine low level Funktion um mit anderen Contracts zu interagieren.

Dies ist die **empfohlene Methode**, um Ether über die `fallback` Funktion zu senden.

Es wird nicht empfohlen, die Funktionen zu aufrufen, die bereits existieren.


```solidity
{{{Call}}}
```
