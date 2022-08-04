// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Primitives {
    bool public boo = true;

    /*
    uint stands for unsigned integer, meaning non negative integers
    uint sind unsigned integer, welche nicht negativ sein können
    Es gibt sind in verschiedenen Speichergrößen 
    uint8 benötigt 8-bit Speicherplatz und kann Werte im Bereich von 0 bis 255 annehmen
        uint8   im Wertebereich von 0 bis 2 ** 8 - 1
        uint16  im Wertebereich von 0 bis 2 ** 16 - 1
        ...
        uint256 im Wertebereich von 0 bis 2 ** 256 - 1
    */
    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint ist die kurze Variante für uint256

    /*
    Negative Nummern are nur erlaubt im Datentyp int.
    Ähnlich wie uint, gibt es auch hier verschiedene Wertebereiche
    Startet bei int8 und geht hoch bis int256
    int8 benötigt 8-bit Speicherplatz und kann Werte im Bereich von -128 bis 127 annehmen
    
    int128 im Wertebereich von -2 ** 127 bis 2 ** 127 - 1
    int256 im Wertebereich von -2 ** 255 bis 2 ** 255 - 1
    */
    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int ist die kurze Variante für int256

    // Minimum und Maximum von int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    /*
    In Solidity wird der Datentypen byte repräsentiert als Bytesequenzen
    Vom Datentyp byte gibt es zwei Arten:
    
     - Byte arrays mit vordefinierter Größe
     - Byte arrays mit dynamischer/anwachsender Größe
     
     Der Begriff Bytes in Solidity meint immer ein dynamisches Array von Bytes.
     Die Kurzversion für diesen Datentype wird byte[] geschrieben
    */
    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // Default Werte, sofern die Variable nicht mit einem Wert initialisiert wird.
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
