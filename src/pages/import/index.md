---
title: Importiere externe Dateien
version: 0.8.13
description: Wie werden Dateien importiert in Solidity? 
---

You can import local and external files in Solidity.
Du kannst lokale als auch externe Dateien in Solidity importieren:

### Lokal

Hier ist unsere Ordnerstruktur

```
├── Import.sol
└── Foo.sol
```

Foo.sol

```solidity
{{{Foo}}}
```

Import.sol

```solidity
{{{Import}}}
```

### Importieren einer externen Datei

Du kannst ebenfalls von [GitHub](https://github.com) importieren. Man muss nur eine valide URL eines Contracts angeben.

```solidity
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Bespiel: Importieren des ECDSA.sol Contracts von Openzepplins Repository mit der Version/Branch release-v4.5
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";

```
