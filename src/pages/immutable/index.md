---
title: Immutable Variablen vs. Konstanten
version: 0.8.13
description: Was sind Immutable Variablen?
---

Immutable Variablen sind ähnlich wie konstante Variable, jedoch können Immutable Variablen innerhalb der Konstrukturs (siehe Konstruktur) verändert werden. 
Da der Konstruktur nur einmalig aufgerufen wird, verhalten diese Variablen sich gleich/analog zu Konstanten. 

In welchem Kontext werden Konstanten und Immutables verwenden?

Immtuble Variablen sind gut, wenn man ein NFT Template hat. Jede Kollektion möchte nicht zwangsweise ein Limit von 10.000 NFTs haben. 

Um die Konstante aber nicht bei jedem Kunden anpassen zu müssen, könnte die maximale Anzahl an NFTs in den Konstruktur übergeben werden, wo dann eine Immutable Variable einmalig, bis zum Ende der Blockchain gespeichert wird. Daher gibt es die Unterscheidung zwischen Konstanten und Immutables.

```solidity
{{{Immutable}}}
```
