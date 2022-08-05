---
title: Visibility
version: 0.8.13
description: Ein Beispiel für external, internal, private und public Funktionen in Solidity
---

Funktionen und Variablen müssen angeben, ob sie von anderen Contracts ausgelesen werden dürfen.

Funktionen und Zustandsvariablen können deklariert werden als:

- `public` - jeder Ethereum Wallet/Account/Adresse und / oder Contract kann diese Funktion aufrufen
- `private` - nur innerhalb des Contracts, das die Funktion beinhaltet, kann diese Funktion aufrufen
- `internal` - nur innerhalb des Contracts, das eine `internal` Funktion vererbt werden
- `external` - nur andere Contracts und Ethereum Wallet/Account/Adresse können diese Funktion aufrufen

Zustandsvariablen können als `public`, `private`, oder `internal` deklariert werden, nicht `external`.

```solidity
{{{Visibility}}}
```
