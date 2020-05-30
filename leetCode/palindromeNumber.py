def isPalindrome(x):
    d = str(x);
    i = 0;
    j = len(d)-1;
    
    while( i <= (len(d)-1) and j >= 0):
        flag = 1;
        #print(i ,'>' ,(len(d)-1) ,',and', j ,'<', 0)
        if(d[i] != d[j]):
            flag = 0;
            break;
        i = i+1;
        j = j-1;
    if(flag == 0):
        return False;
    else:
        return True;
    
print(isPalindrome(121));
print(isPalindrome(-121));
print(isPalindrome(10));