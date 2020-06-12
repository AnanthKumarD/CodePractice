#Link:- https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3357/https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3357/Ss

def sortColors(nums):
    for i in range(len(nums)):
        notSorted = False;
        for j in range(len(nums)-1):
            if nums[j] > nums[j+1]:
                nums[j],nums[j+1] = nums[j+1],nums[j];
                notSorted = True;
        if notSorted == False:
            break;
    return nums;

print(sortColors([2,0,2,1,1,0]));
        