# Q: https://codeforces.com/contest/1342/problem/A

t = int(input());
for _ in range(t):
    x, y = map(int, input().split(' '))
    a, b = map(int, input().split(' '))
    b = min(a+a, b)
    if (x < y) :
        x, y = y, x
    print(y*b + (x-y)*a)