// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // Ein array mit mehreren 'Todo' structs
    Todo[] public todos;

    function create(string calldata _text) public {
        // 3 Wege um ein struct zu initialisieren
        // - Struct aufrufen, wie eine Funktion
        todos.push(Todo(_text, false));

        // Alternative 1
        todos.push(Todo({text: _text, completed: false}));

        // Initialisere ein leeres Struct und dann überschreibe die einzelnen Variablen innerhalb des Structs
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialisiert mit dem Default-Wert false

        todos.push(todo);
    }

    // Solidity erstellt automatisch eine "getter"-/Rückgabe-Funktion um die Werte zu erhalten.
    // Diese Funktion muss daher nicht selbst geschrieben werden
    function get(uint _index) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update den text in einem struct, in dem Struct-Array
    function updateText(uint _index, string calldata _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    // update den completd-Zustand in einem struct, in dem Struct-Array
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
