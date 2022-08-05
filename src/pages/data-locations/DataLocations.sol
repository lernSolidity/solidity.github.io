// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract DataLocations {
    uint[] public arr;
    mapping(uint => address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint => MyStruct) myStructs;

    function f() public {

        // Aufruf der Funktion _f mit den State Variablen als Input
        _f(arr, map, myStructs[1]);

        // Speicher das myStructs Element in storage
        MyStruct storage myStruct = myStructs[1];
        // speicher das Mystruct Element in memory  
        MyStruct memory myMemStruct = MyStruct(0);
    }

    function _f(
        uint[] storage _arr,
        mapping(uint => address) storage _map,
        MyStruct storage _myStruct
    ) internal {
        // mach was mit den storage-Variablen
    }

    // Zurückgeben von memory Variablen
    function g(uint[] memory _arr) public returns (uint[] memory) {
        // mach was mit den array in memory
    }

    function h(uint[] calldata _arr) external {
        // mach was mit den calldata array 
    }
}

