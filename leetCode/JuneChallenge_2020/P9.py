# link:- https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3356/


def searchInsert(nums, target):
    for i in range(len(nums)):
        #print(i,'.....',len(nums))
        if nums[i] >= target:
            return i;
        if i == len(nums)-1:
            return i+1;


print(searchInsert([1,3,5,6],5))
print(searchInsert([1,3,5,6],2))
print(searchInsert([1,3,5,6],7))
print(searchInsert([1,3,5,6],0))
        