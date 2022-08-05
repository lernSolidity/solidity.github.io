---
title: Funktionen
version: 0.8.13
description: Wie werden Funktionen in Solidity geschrieben?
---

**Was sind Funktionen?**

Ein Smart Contract kann `keine`, `eine` oder `mehrere` Funktionen enthalten. Funktionen sind ausführbare hintereinander geschaltete Codezeilen. Man könnte Funktionen auch als in sich gekapselte Codebausteine verstehen. 

Eine Funktion sollte immer nur eine Funktionalität abbilden! Es ist möglich mehrere Funktionalitäten in einer Funktion zu kombinieren, aber durch eine weitumfassende universelle Funktion wird der Code schlechter lesbar und Fehler oder Sicherheitslücken werden dadurch erst möglich.  

**Was braucht die Funktion?**

Eine Funktion ***kann*** Eingabedaten entgegennehmen. Eine Funktion benötigt nicht zwingend oder umbedingt Eingabedaten. Es können Funktionen ohne jegliche Eingaben definiert werden.  


```solidity
{{{Function}}}
```
