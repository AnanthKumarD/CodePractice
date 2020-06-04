class Solution():
    def twoCitySchedCost(self, costs):

        N = len(costs)//2
        ans = 0
        diffa, diffb = [], []

        for cost in costs:  #  , 
            if cost[0] < cost[1]:  # 
                ans += cost[0]     # Record total cost
                diffb.append(cost[1]-cost[0])  # and record if you go to B city, spend more money, save to diffb
            else:                 # ,Go to B city...
                ans += cost[1]
                diffa.append(cost[0]-cost[1])

        if len(diffa) < len(diffb):  # There are many people assigned to A city, then, from B, according to the best principle, choose a few people, go to B city
            diffb.sort()
            for j in range(len(diffb)-N):
                ans += diffb[j]

        if len(diffa) > len(diffb):  # , the people assigned to B city are many ...
            diffa.sort()
            print(len(diffa),'...',N,'....',len(diffa)-N)
            for i in range(len(diffa)-N):
                ans += diffa[i]

        return ans


if __name__ == '__main__':
    solu = Solution()
    costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
    print(solu.twoCitySchedCost(costs))