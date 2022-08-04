// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Gas {
    uint public i = 0;

    // Diese Funktion würde das komplette gas kontigent aufbrauchen, welches du gesetzt hast. 
    // Es handelt sich hierbei um eine niemals endende Schleife.

    // Die Anzahl der Berechnungen gehen ins Unendliche und die Transaktion wird niemals durchgeführt.
    // Nachdem deine Gas aufgebraucht worden ist, wird die Ausführung annuliert. 

    // Das bedeutet, dass auch wenn der Wert von i verändert wird, 
    // der Zustand von i gleich dem Zustand ist, wie vor der Transaktion. 
    
    // Kurz gesagt: Die Transkation wird zurückgerollt auf den Ursprungszustand vor der Transaktion. 
    // Gas welches bei einer Ausführung verbraucht worden ist, wird nicht wieder zurückerstattet.
    function forever() public {
        // Loop läuft solange bis das komplette Gas der Transaktion aufgebraucht ist.
        while (true) {
            i += 1;
        }
    }
}
