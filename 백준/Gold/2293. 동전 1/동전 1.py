import sys

n, k = map(int, sys.stdin.readline().split())
coin = [int(sys.stdin.readline()) for _ in range(n)]
dp = [1]+[0]*k
for value in coin:
    for i in range(1, k+1):
        if i < value: continue
        dp[i] += dp[i-value]

print(dp[k])