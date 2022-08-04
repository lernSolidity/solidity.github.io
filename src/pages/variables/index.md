---
title: Variablen
version: 0.8.13
description: Wo ist der unterschied zwischen Local, state und global Variablen?
---

Es gibt 3 verschiedene Typen von Variablen in Solidity:

- **local**
  - Variable wird deklariert innerhalb einer Funktion
  - Variable wird __nicht__ auf der Blockchain gespeichert
- **state**
  - Variable wird deklariert außerhalb einer Funktion
  - Variable wird auf der Blockchain gespeichert
- **global** 
  - Variablen, welche es ermöglichen Informationen über die BLockchain zu erhalten, wie Zeit und Sender der Transaktion

```solidity
{{{Variables}}}
```
