---
title: Fallback
version: 0.8.13
description: Beispiel, wie die `fallback`-Funktion verwendet wird in Solidity
---

`fallback` ist eine Funktion, die keine Argumente nimmt und keine Rückgabewerte gibt.

Die `fallback` Funktion wird ausgeführt, wenn
- eine Funktion, die nicht existiert ist aufgerufen wird oder
- Ether direkt an ein Contract gesendet wird, aber `receive()` nicht existiert oder `msg.data` nicht leer ist.

`fallback` hat eine 2300-Gas-Limit, wenn es bei einer `transfer` oder `send` Transkation aufgerufen wird.

```solidity
{{{Fallback}}}
```
