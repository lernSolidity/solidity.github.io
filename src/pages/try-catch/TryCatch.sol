// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Externer Contract für die try / catch Beispiele
contract Foo {
    address public owner;

    constructor(address _owner) {
        require(_owner != address(0), "invalid address");
        assert(_owner != 0x0000000000000000000000000000000000000001);
        owner = _owner;
    }

    function myFunc(uint x) public pure returns (string memory) {
        require(x != 0, "require failed");
        return "my func was called";
    }
}

contract Bar {
    event Log(string message);
    event LogBytes(bytes data);

    Foo public foo;

    constructor() {
        // Foo Contract wird erstellt
        foo = new Foo(msg.sender);
    }

    // Bespiel für try / catch mit externer Call
    // tryCatchExternalCall(0) => Log("externer call fehlgeschlagen")
    // tryCatchExternalCall(1) => Log("myFunc wurde aufgerufen")
    function tryCatchExternalCall(uint _i) public {
        try foo.myFunc(_i) returns (string memory result) {
            emit Log(result);
        } catch {
            emit Log("external call failed");
        }
    }

    // Bespiel für try / catch mit Contract Creation
    // tryCatchNewContract(0x0000000000000000000000000000000000000003) => Log("invalide adresse")
    // tryCatchNewContract(0x0000000000000000000000000000000000000004) => LogBytes("")
    // tryCatchNewContract(0x0000000000000000000000000000000000000005) => Log("Foo erstellt")
    function tryCatchNewContract(address _owner) public {
        try new Foo(_owner) returns (Foo foo) {
            // foo kann hier als Variable verwendet werden
            emit Log("Foo created");
        } catch Error(string memory reason) {
            // catch eines fehlgeschlagenen Aufrufs von revert() und require() mit einer nicht definierten Error-Message
            emit Log(reason);
        } catch (bytes memory reason) {
            // catch eines fehlgeschlagenen Aufrufs von assert()mit einer nicht definierten Error-Message
            emit LogBytes(reason);
        }
    }
}
