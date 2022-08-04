// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Enum {
    // Enum repräsentiert den Versandstatus
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // Default value is the first element listed in
    // definition of the type, in this case "Pending"

    // Standardwerte ist das erste Element in der Definition des Datentyps
    // Der Standardwert für das Enum Status wäre der Zustand "Pending"
    Status public status;

    // Jeder Status wird mit einem uint verknüpft/repräsentiert
    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4
    function get() public view returns (Status) {
        return status;
    }

    // Der Status kann verändert werden, indem eine Zahl übergeben wird
    function set(Status _status) public {
        status = _status;
    }

    // Ein spezifischer Status kann folgendermaßen eingestellt werden
    function cancel() public {
        status = Status.Canceled;
    }

    // Zurücksetzen des Eums auf den Default-Wert mit der verknüpften Zahl 0
    function reset() public {
        delete status;
    }
}
