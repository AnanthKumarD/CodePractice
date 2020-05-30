def searchInsert(nums, target):
    val = 0;
    for i in range(len(nums)):
        if nums[i] == target:
            val = i;
            break;
        else:
            print(nums[i],' >', target)
            if nums[i] > target:
                val = i;
                break
    return val;

print(searchInsert([1,3,5,6],2));