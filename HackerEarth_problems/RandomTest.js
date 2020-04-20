var a = [3, 4, 6, 7]
for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        console.log(a[i], a[j], '.....', a[i] + a[j])
    }
}