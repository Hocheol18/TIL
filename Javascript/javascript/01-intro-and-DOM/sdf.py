n = int(input())
bx = [list(map(int, input().split())) for _ in range(n)]

# 크기 같은거는 못 먹고 지나갈 수만 O 크기 작은것만 먹을 수 잇음
# 가장 가까운 위치에 잇는 물고기 먹고 위에서 부터 먹고 왼쪽에서 부터 먹는다.
# 가장 처음에 크기는 2이다.
