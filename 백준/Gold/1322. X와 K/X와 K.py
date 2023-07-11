x, k = map(int, input().split())

bx, bk = list('0' * 100 + bin(x)[2:]), bin(k)[2:]
ans = ''
n, m = len(bx) - 1, len(bk) - 1
while m >= 0:
    if bx[n] == '0':
        ans = bk[m] + ans
        m -= 1
    else:
        ans = '0' + ans
    n -= 1
print(int(ans, 2))