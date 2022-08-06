---
title: Delegatecall
version: 0.8.13
description: Wie nutze ich die Delegatecall Funktion in Solidity?
---

`delegatecall` ist ebenfalls eine low level Funktiion, ähnlich wie `call`.

Wenn Contract `A` einen `delegatecall` ausführt zu Contract `B`, dann wird der Code von `B` ausgeführt.

Die Besonderheit ist jedoch, dass die Funktion ausgeführt wird, mit dem Storage von Contract `A`. 

Dessweiteren werden `msg.sender` und `msg.value` ebenfalls weitergegeben.

```solidity
{{{Delegatecall}}}
```
