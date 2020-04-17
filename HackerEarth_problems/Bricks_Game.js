// var _totalBricks = 13;
// var _totalBricks = 3694 // printing motu instead of patlu
var _totalBricks = 4321 // printing motu instead of patlu
var person = ["Patlu", "Motu"];

var i = 1;
var lastPerson;
while (_totalBricks >= 1) {
    console.log("START", _totalBricks, ' i-----', i);
    if (_totalBricks - i < 0) {
        lastPerson = "Patlu";
        break;
    }
    _totalBricks = _totalBricks - i;

    console.log("MIddel", _totalBricks, ' i-----', i * 2);
    if (_totalBricks - (i * 2) < 0) {
        lastPerson = "Motu";
        break;
    }
    _totalBricks = _totalBricks - (i * 2);
    // console.log("END", _totalBricks, ' i-----', i * 2);
    i++;
}

console.log(lastPerson)