---
title: Funktions-Selector
version: 0.8.13
description: Example of how function selectors are computed
---
Wenn eine Funktion aufgerufen wird, dann geben die ersten 4 Bytes von `calldata` an, welche Funktion aufgerufen werden soll.
Diese 4 bytes nennen wir Funktions-Selector.
Schau dir das untere Bespiel an. Es verwendet `call` um die Funktion `transfer` in einem Contract auszuführen, mit der Adresse `addr` als Eingabedaten.

```solidity
addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))
```

Die ersten 4 Bytes werden zurückgegeben von `abi.encodeWithSignature(....)`.
Es handelt sich um den Funktions-Selector.
Potenziell kann Gas eingespart werden, wenn der Funktions-Selector vorher berechnest und fest reingeschrieben wird.

Hier ist wie der Funktions-Selector berechnet wird.

```solidity
{{{FunctionSelector}}}
```
