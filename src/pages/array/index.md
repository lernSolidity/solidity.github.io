---
title: Array
version: 0.8.13
description: Lerne wie Arrays in Solidity funktionieren
---

Arrays sind dynamische Datenstrukturen. Trotzdem gibt es die Möglichkeit, die Länge eines Arrays zu begrenzen. Dies kann Gaskosten reduzieren.

```solidity
{{{Array}}}
```

### Wie wird ein Element aus dem Array entfernt?

Remove array element by shifting elements from right to left
Tricks, wie in dynamischen Arrays ein Element löschen kannst, ohne das ein "default"-Wert.

Entweder verschiebt man die Elemente mit einer For-Loop:

```solidity
{{{ArrayRemoveByShifting}}}
```

Oder das Element wird an das Ende des Arrays kopiert und dann gelöscht:

```solidity
{{{ArrayReplaceFromEnd}}}
```
