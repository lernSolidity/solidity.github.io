---
title: Error
version: 0.8.13
description: Beispiel, wie Error in Solidity funktionieren 
---

Sofern ein Fehler auftritt, dann werden alle Änderungen an dem Status des Contracts rückgängig gemacht.

Du kannst einen Fehler mit `require`, `revert` oder `assert` selbst auslösen.

- `require` wird verwendet, um Eingaben und Bedingungen zu validieren, bevor die Funktion vollständig ausgeführt wird.
- `revert` ist ähnlich `require`. Weitere Informationen findest du unten im Code.
- `assert` wird verwendet, um Code zu überprüfen, welcher niemals `false` sein darf. Falls der Assertion-Fehler auftritt, ist es möglicherweise ein Fehler in den Eingabedaten.

Verwende benutzerdefinierte Fehlermeldung, um Gas zu sparen.


```solidity
{{{Error}}}
```

Hier ein weiteres Beispiel:

```solidity
{{{Account}}}
```
