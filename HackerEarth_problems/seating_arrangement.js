var totalSeatsInTrain = 108;
var inEachCompartment = 12;
var EachBlock = [];
var seatinArrangeMents = ["WS", "MS", "AS", "AS", "MS", "WS", "WS", "MS", "AS", "AS", "MS", "WS"];
var seatToFind = 108;
var oppositeSeat;
var seatType;

for (i = 0; i < 108 / 12; i++) {
    EachBlock[i] = {
        startingSeat: i == 0 ? i + 1 : EachBlock[i - 1].endingSeat + 1,
        endingSeat: i == 0 ? i + 12 : EachBlock[i - 1].endingSeat + 12
    };
    if (seatToFind >= EachBlock[i].startingSeat && seatToFind <= EachBlock[i].endingSeat) {
        oppositeSeat = inEachCompartment * (i) + (inEachCompartment * (i + 1)) + 1 - seatToFind;
        var where = oppositeSeat < 12 ? 0 : 12 * i;
        seatType = seatinArrangeMents[Math.abs(oppositeSeat - where) - 1];
        break;
    }
}
console.log(oppositeSeat, '  ', seatType);