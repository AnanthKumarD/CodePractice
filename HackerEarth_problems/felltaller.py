n = int(raw_input())
a = list(map(int, raw_input().split()))
# q = int(input())
for i in range(n):
    j = i + 1
    while j < n:
        if a[j] > a[i]:
            a[i] = j
            break
            j += 1
        else :
            a[i] = -1

print(a)
# for k in range(n):
#     l, r = map(int, input().split())
#     count = 0
#     while True:
#         if l < 0 or l > r:
#             break;
#         count += 1
#         l = a[l]

# print(count)