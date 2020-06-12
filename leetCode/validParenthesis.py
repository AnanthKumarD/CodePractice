#Link:- https://leetcode.com/problems/valid-parentheses/
def isValid(s):
    newString = [];
    toOpen = ['[','{','('];
    toClose = [']','}',')'];
    for i in range(len(s)):
        #print(s[i] in toOpen,'/////toOpen');
        #print(s[i] in toClose,'/////toClose');
        if s[i] in toOpen:
            newString.append(s[i]);
        if s[i] in toClose:
            if s[i] == "]" and "[" in newString:
                print(newString.index("["));
            if s[i] == "}" and "{" in newString:
                print(newString.index("{"));
            if s[i] == ")" and "(" in newString:
                print(newString.index("("));
    return True;

print(isValid("()"));
print(isValid("()[]{}"));
print(isValid("(]"));
print(isValid("([)]"));