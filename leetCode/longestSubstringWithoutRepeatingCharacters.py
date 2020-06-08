# Link:- https://leetcode.com/problems/longest-substring-without-repeating-characters/

def lengthOfLongestSubstring(s):
    max = 0
    if(len(s) == 1):
        return len(s);
    for i in range(len(s)):
        counter = 0;
        j = i;
        newVal = '';
        while(j != len(s)):
            print('came inside12312312 ', j,'.....',len(s)-1);
            if newVal.find(s[j]) != -1:
                print('came inside ', s[j]);
                break;
            else:
                #print('>>>>>>>',newVal)
                newVal = newVal + s[j];
                j = j+1;
                counter = counter + 1;
        #print('.................................', counter)
        if(counter > max):
            max = counter;        
    return max;

#print(lengthOfLongestSubstring("au"));
print(lengthOfLongestSubstring("abcabcbb"));
print(lengthOfLongestSubstring("bbbbb"));
print(lengthOfLongestSubstring("pwwkew"));