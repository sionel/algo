def solution(money):
    tmp1 = [0 for _ in range(len(money))]
    tmp2 = [0 for _ in range(len(money))]
    m1=0
    m2=0
    
    for i in range(0, len(money)-1):
        if(i == 0):
            tmp1[i] = money[0]
        elif(i == 1):
            tmp1[i] = max(money[0], money[1])
        else:
            tmp1[i] = max(tmp1[i-1], money[i] + tmp1[i-2])
        m1=tmp1[i]
        
    for i in range(1, len(money)):
        if(i == 1):
            tmp2[i] = money[1]
        elif(i == 2):
            tmp2[i] = max(money[2], money[1])
        else:
            tmp2[i] = max(tmp2[i-1], money[i] + tmp2[i-2])
        m2=tmp2[i]
        
    return max(m1,m2)