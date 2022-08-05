// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Basis contract X
contract X {
    string public name;

    // Initialisierung des Contracts mit einem Namen
    // Nach der Veröffentlichung kann der Name nicht mehr verändert werden.
    constructor(string memory _name) {
        name = _name;
    }
}

// Basis contract Y
contract Y {
    string public text;

    constructor(string memory _text) {
        text = _text;
    }
}

// Es gibt 2 Möglichkeiten, einen Parent Contract mit Parametern zu initialisieren.
// Gebe die Parameter der Vererbungsklasse als Liste an.
contract B is X("Input to X"), Y("Input to Y") {

}

contract C is X, Y {
    // Geben die Parameter der Vererbungsklasse als Liste an im Konstruktor an.
    // Ähnlich wie bei den Modifier Funktionen.
    constructor(string memory _name, string memory _text) X(_name) Y(_text) {}
}


// Die Konstruktoren der Parent-Contracts werden immer in der geschriebenen Reihenfolge der Vererbung aufgerufen.

// Reihenfolge der aufgerufenen Konstruktoren der Vererbungsklassen:
// 1. X
// 2. Y
// 3. D
contract D is X, Y {
    constructor() X("X was called") Y("Y was called") {}
}

// Reihenfolge der aufgerufenen Konstruktoren der Vererbungsklassen:
// 1. X
// 2. Y
// 3. E
contract E is X, Y {
    constructor() Y("Y was called") X("X was called") {}
}
