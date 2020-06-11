# Panagram should contain all letter present in aplhapets otherwise it is not panagram

def testPanagram(s):
    listArray = [];
    for i in range(26): 
        listArray.append(False) 
    for ch in s.lower():
        if not ch == " ":
            listArray[ord(ch)-ord('a')] = True;
    for h in listArray:
        if h == False:
            return False;
    return True;

print(testPanagram("The quick brown fox jumps over the little lazy dog"))
print(testPanagram("The quick brown fox jumps over the litt"))