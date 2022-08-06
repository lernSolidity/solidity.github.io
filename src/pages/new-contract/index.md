---
title: Contract die neue Contracts erstellen können.
version: 0.8.13
description: Mit einem Contract einen neuen Contract erstellen.
---

Contracts können von anderen Contracts erstellt werden, unter Verwedung von `new`. Seit der Version 0.8.0 unterstützt das Kennwort `new` die neue Funktionalität `create2`, sofern ein `salt` als Option angegeben wird. Das `salt` Argument macht es möglich, dass kleine Veränderungen bei der Kompilierung mit eingebaut werden und jeder erstellt Contract mithilfe der Methode einen neue Adresse erhält.

[Lese dazu am besten die Dokumentation](https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2)

```solidity
{{{NewContract}}}
```
