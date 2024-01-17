from collections import deque

# sys.stdin 대신에 input.txt 파일을 열어서 읽기
with open("input.txt", "r") as f:
    n, m = map(int, f.readline().split())

    graph = [[] for _ in range(n+1)]
    inDegree = [0 for _ in range(n+1)]
    queue = deque()
    answer = []

    for i in range(m):
        a, b = map(int, f.readline().rstrip().split())
        graph[a].append(b)
        inDegree[b] += 1

    for i in range(1, n+1):
        if inDegree[i] == 0:
            queue.append(i)

    while queue:
        tmp = queue.popleft()
        answer.append(tmp)
        for i in graph[tmp]:
            inDegree[i] -= 1
            if inDegree[i] == 0:
                queue.append(i)

    print(*answer)
