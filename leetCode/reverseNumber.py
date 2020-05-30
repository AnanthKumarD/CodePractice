#class Solution(object):
import math
def reverse(x):
    val = str(x);
    flag = 0;
    if x < 0:
        flag = 1;
        val = val.split("-")[1];

    b = "";
    for n in range(len(val),0,-1):
        b += val[n-1];

    if flag == 1:
        b = '-'+b;
        if(int(b) <= -math.pow(2,31)):
            return 0;
        else:
            return int(b)
    else:
        return int(b) < (math.pow(2, 31) -1) and int(b) or 0;
        
print(reverse(-123));
print(reverse(1123));
print(reverse(1534236469));
print(reverse(-8463847412));