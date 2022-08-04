// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Mapping {
    // Mapping einer Adress zu einem uint mit dem Variablen-Namen myMap
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        // Mapping geben immer einen Wert zurück.
        // Wenn ein Mapping nicht initialisiert worden ist, wird es den default-Wert zurückgeben. 
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        // Überschreibt den uint-Wert, welcher hinter der _addr-Adresse im Mapping hierlegt worden ist.  
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Zurücksetzen der Wertes der  _addr-Adresse im Mapping auf den Default-Wert.
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // Verschachteltes mapping = Mapping einer Adresse auf ein weiteres Mapping
    mapping(address => mapping(uint => bool)) public nested;

    // Wert des verschachtelten Mappings erhalten/auslesen
    function get(address _addr1, uint _i) public view returns (bool) {
        return nested[_addr1][_i];
    }

    // Wert des verschachtelten Mappings überschreiben
    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nested[_addr1][_i] = _boo;
    }

    // Wert des verschachtelten Mappings auf den Default-Wert zurücksetzen
    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}
