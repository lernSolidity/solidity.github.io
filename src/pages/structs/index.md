---
title: Structs
version: 0.8.13
description: Ein Beispiel wie structs in Solidity verwendet werden können
---

Mit `struct` können eigene Datentypen anlegt werden.

`Struct` sind sinnvoll, wenn primtive Datentypen in einer bestimmten Beziehung stehen.

`Struct` können ähnlich wie Enums außerhalb eines Contracts deklariert werden, um sie dann anschließend in seinen eigentlichen Contract zu importieren. 

Trotzdem ist es möglich `structs` innerhalb eines Contracts zu deklarieren und zu verwenden. 


```solidity
{{{Structs}}}
```

### Deklarieren und Importieren eines Structs

Datei, wo das `Struct` deklariert wird:

```solidity
{{{StructDeclaration}}}
```

Datei, welche das `Struct` importiert:

```solidity
{{{StructImport}}}
```
