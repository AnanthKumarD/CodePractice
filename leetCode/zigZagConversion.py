def convert(s, numRows):
    modifiedArray = [''] * numRows;
    i = 0;
    while i != len(s):
        
        for j in range(0 ,len(modifiedArray)):
            # print (j,'>>>>j',s[i]);
            modifiedArray[j] += s[i];
            i = i+1;
            if(i == len(s)):
                break;
            
            
        
        for k in range(len(modifiedArray)-2, 0, -1):
            if(i == len(s)):
                break;
            # print (k,'>>>>k',s[i]);
            modifiedArray[k] += s[i];
            i = i+1;
            
        if(i == len(s)):
            break;
        
    result= '';
    for element in modifiedArray:
        result += str(element)
    return result;

print(convert("PAYPALISHIRING", 1));
#convert("PAYPALISHIRING", 4);
