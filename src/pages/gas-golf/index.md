---
title: Spare Gas für den User
version: 0.8.13
description: Wie optimiere ich Gas in Solidity?
---

Ein paar Techniken, wie du dem Nutzer deines Smart Contracts Gaskosten ersparen kannst

- `memory` in den Eingabedaten einer Funktion durch `calldata` ersetzen
- Laden der Zustandsvariablen in memory 
- `i++` mit `++i` ersetzen in for loops
- Cachen der Array-Elemente
- Kürzeren Loop Schleifen

```solidity
{{{GasGolf}}}
```
