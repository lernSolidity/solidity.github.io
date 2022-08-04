---
title: Mapping
version: 0.8.13
description: Was sind Mappings und wie werden Mappings verwendet in Solidity? 
---

Maps werden mit folgender Grammatik/Syntax erstellt: `mapping(keyType => valueType)`.

Der `keyType` muss ein vordefinierte Type sein, wie zum Beispiel: bytes, string, uint, oder contract.

Der `valueType` kann jeder Datentyp sein. Auch ein weiteres Mapping oder ein Array können hinter dem `keyType` hinterlegt werden.

Mappings können nicht in `for` oder `while` Loops verwendet werden. Mappings sind nicht iterierbar.

```solidity
{{{Mapping}}}
```
