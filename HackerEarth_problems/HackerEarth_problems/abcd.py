# Python3 implementation of the approach  
  
# Function that returns true if c is a vowel  
def isVowel(c) :  
  
    return (c == 'a' or c == 'e' or c == 'i'
            or c == 'o' or c == 'u');  
  
  
# Function to return the count of sub-strings  
# that contain every vowel at least  
# once and no consonant  
def countSubstringsUtil(s) :  
  
    count = 0;  
  
    # Map is used to store count of each vowel  
    mp = dict.fromkeys(s,0);  
  
    n = len(s);  
  
    # Start index is set to 0 initially  
    start = 0;  
  
    for i in range(n) : 
        mp[s[i]] += 1;  
  
        # If substring till now have all vowels  
        # atleast once increment start index until  
        # there are all vowels present between  
        # (start, i) and add n - i each time  
        while (mp['a'] > 0 and mp['e'] > 0
            and mp['i'] > 0 and mp['o'] > 0
            and mp['u'] > 0) : 
            count += n - i;  
            mp[s[start]] -= 1;  
            start += 1;  
  
    return count;  
  
# Function to extract all maximum length  
# sub-strings in s that contain only vowels  
# and then calls the countSubstringsUtil() to find  
# the count of valid sub-strings in that string  
def countSubstrings(s) :  
  
    count = 0;  
    temp = "";  
  
    for i in range(len(s)) : 
  
        # If current character is a vowel then  
        # append it to the temp string  
        if (isVowel(s[i])) : 
            temp += s[i];  
  
        # The sub-string containing all vowels ends here  
        else : 
  
            # If there was a valid sub-string  
            if (len(temp) > 0) : 
                count += countSubstringsUtil(temp);  
  
            # Reset temp string  
            temp = "";  
  
    # For the last valid sub-string  
    if (len(temp) > 0) : 
        count += countSubstringsUtil(temp);  
  
    return count;  
  
# Driver code  
if __name__ == "__main__" :  
  
    s = "eAvPASAQpMphwebLkYijusOoRnSOHCrnEpcHhCZwRofPsIAfHJQDbEtvuljbqcoUrSBzXAxqqDfJNGquRg";  
  
    print(countSubstrings(s));  
  
# This code is contributed by AnkitRai01 