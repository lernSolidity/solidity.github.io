---
title: Vererbung | Inheritance
version: 0.8.13
description: Beispeiel für Vererbung in Solidity
---

Solidity unterstützt mehrfach Vererbung. Contracts können von anderen Contracts erben, wenn das `is`-Schlüsselwort verwendet wird.

Funktionen die von einem Kind-Contract überschrieben werden müssen als `virtual` deklariiert werden.

Funktionen die von einem übergeordneten Contract überschrieben werden müssen mit dem Schlüsselwort `override` deklariiert werden.

Die Reihenfolge der Vererbung ist wichtig.

Die Vererbungs-Contracts müssen in der Reihenfolge von “am häufigsten basiert” bis “am häufigsten abgeleitet” aufgeführt werden.


```solidity
{{{Inheritance}}}
```
