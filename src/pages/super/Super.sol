// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


/* Graph der Vererbung
   A
 /  \
B   C
 \ /
  D
*/

contract A {
    // Dies ist ein Event.
    //  Du kannst Events aus deiner Funktion ausgeben und diese werden in das Protokoll der Transaktion geschrieben.
    // In unserem Fall wird dies in den Funktionsaufrufen nützlich sein.
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
    // Selbstversuch:
    // - Rufe D.foo aus und überprüfe die Transaktionsprotokolle.
    //   Obwohl D vererbt A, B und C, wurde nur C aufgerufen und anschließend dann A aufgerufen.


    function foo() public override(B, C) {
        super.foo();
    }

    // Selbstversuch:
    // - Rufe D.bar aus und überprüfe die Transaktionsprotokolle.
    //   Es wurde zuerst C aufgerufen, dann B, und dann wie im ersten Versuch A.
    //   Obwohl super wurde zwei Mal aufgerufen (von B und C), wurde es nur A einmal aufgerufen.
    function bar() public override(B, C) {
        super.bar();
    }
}
