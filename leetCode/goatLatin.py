# Link:- https://leetcode.com/problems/goat-latin/

def toGoatLatin(S):
    vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    
    S = S.split(" ")
    newVal = [];
    for i in range(len(S)):
        try:
            if(vowels.index(S[i][0]) >= 0):
                newVal.append(S[i] + 'ma' + 'a'*i + 'a');
        except ValueError:
            newVal.append(S[i][1:None] + S[i][0] + 'ma' + 'a'*i + 'a')
    
    s = " ";
    s = s.join(newVal);
    return s;

print(toGoatLatin("Each word consists of lowercase and uppercase letters only") );
print(toGoatLatin("The quick brown fox jumped over the lazy dog"));