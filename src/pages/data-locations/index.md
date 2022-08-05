---
title: Speicherorte - Was ist Storage, Memory und Calldata?
version: 0.8.13
description: Speicherorte - Was ist Storage, Memory und Calldata? >
---

Variablen werden entweder deklariert als  `storage`, `memory` oder `calldata`, um explizit den Speicherort einer Variable zu definieren.

- `storage` - Variable ist eine Zustandsvariable (gespeichert auf der Blockchain)
- `memory` - Variable ist in `memory` und exsistiert nur solange eine Funktion ausgeführt wird
- `calldata` - Spezielle Speicherort, welcher genutzt wird für Eingabedaten einer Funktion 

```solidity
{{{DataLocations}}}
```
