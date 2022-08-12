---
title: Accessing Private Data
version: 0.8.13
description: An example of accessing private data from a Solidity smart contract
---

### Vulnerability

All data on a smart contract can be read.
Alle Daten auf einem Smart Contract können gelesen werden.

Let's see how we can read `private` data. In the process you will learn how Solidity stores state variables.
Wie können wir `private` Daten lesen.
In dem Prozeß lernen wir, wie Solidity Speichervariablen speichert.
Lass uns einmal sehen, wie wir private Daten aus einem Solidity Smart Contract lesen können. In dem Prozess lernst du, wie Solidity State Variablen speichert.
```solidity
{{{Vault}}}
```

### Preventative Techniques
### Preventative Techniken
- Don't store sensitive information on the blockchain.
- Vermeiden, dass Sensitive Information auf dem Blockchain gespeichert wird.
