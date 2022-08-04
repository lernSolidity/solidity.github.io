---
title: Was ist Ether und Wei?
version: 0.8.13
description: Ein Beispiel für Ether und Wei in Solidity
---

Die Gaskosten einer Transaktion werden mit `ether` bezahlt.

Ähnlich wie bei Euro gibt es einen Bruchteil eines Euros (Cent). Ein Euro sind 100 Cent. Bei Ether gibt es jedoch mehr "0". 

Um genau zu sein, es sind 10<sup>18</sup>. Der Wert wird dann als `wei` bezeichnet.

- `Euro` = `ether`
- `Cent` = `wei`

Beispiel: 

0.01 `ether` sind 10000000000000000 `wei`


```solidity
{{{EtherUnits}}}
```
