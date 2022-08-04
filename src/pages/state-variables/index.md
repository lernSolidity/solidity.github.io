---
title: Wie lese oder schreibt man in Zustandsvariablen?
version: 0.8.13
description: Lesen and Schreiben von State Variablen / Zustandsvariablen
---

`State Variable = Zustandsvariable`

To write or update a state variable you need to send a transaction.
Um eine Zustandvariable zu verändern, muss eine Transaktion gesendet werden, zu einer Funktion, die den Zustand/Wert der State Variable verändert.

Für das Lesen wird allerdings keine Transaktion benötigt. Das Lesen ist frei/gratis von jeglichen Transaktionsgebühren. 

```solidity
{{{SimpleStorage}}}
```
