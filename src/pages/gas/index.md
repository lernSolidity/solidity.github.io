---
title: Was ist Gas und Gas Preis?
version: 0.8.13
description: Beispiel von Gas und dem Gas limit in Solidity
---

### Wie viel `ether` muss ich für diese Transaktion bezahlen?

Du bezahlst `gas verbrauch * gas preis` amount of `ether`, where


- `gas` ist eine Einheit einer einzelnen Berechnung auf der EVM (Ethereum Virtual Machine)
- `gas verbrauch` ist die gesamte Menge an Berechnungen, wie viel `gas` bei einer Transaktion verbraucht worden ist
- `gas preis` ist wie viel `ether` du gewillst bist für eine Einheit `gas` zu bezahlen

Transaktionen mit höherem `gas preis` haben höhere Priorität und werden schneller durchgeführt.


Gas, welches nicht verwendet worden ist, wird dir zurück erstattet.

### Gas Limit

Es gibt 2 Limits, welche bestimmen, wie viel du für Gas ausgibst. 

- `gas limit` = maximale Menge, wie viele Berechnungen deine Transaktionen verbrauchen soll 
- `block gas limit` = maximale Menge, welche erlaubt ist in einem neu erstellten Block der Blockchain 

```solidity
{{{Gas}}}
```
