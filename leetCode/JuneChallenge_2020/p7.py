import math;
def isPowerOfTwo(n):
    i = 0;
    result = 0;
    if n == 0:
        return Fals;
    flag = True;
    while result != n and result <=n:
        result = int(math.pow(2,i));
        #print(result ,'>>>>',n);
        i = i+1;
        if result > n:
            flag = False
    return flag;

print(isPowerOfTwo(1));
print(isPowerOfTwo(16));
print(isPowerOfTwo(218));