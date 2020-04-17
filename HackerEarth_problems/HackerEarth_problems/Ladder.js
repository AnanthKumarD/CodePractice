//constructing Ladder;
n = 4;
for (i = 0; i < 5; i++) {
    var a = '';
    for (j = 0; j < 5; j++) {
        if (i > 0 && i % 2 == 0 && (j == 0 || j == 4)) {
            a += '*';
        } else {
            a += ' ';
        }
    }
    console.log(a)
}
for (k = 0; k < n; k++) {

    console.log('\n');
    for (i = 0; i < 5; i++) {
        var a = '';
        for (j = 0; j < 5; j++) {
            if (i == 0) {
                a += '*';
            } else if (i > 0 && i % 2 == 0 && (j == 0 || j == 4)) {
                a += '*';
            } else {
                a += ' ';
            }
        }
        console.log(a)
    }
}