# Question: https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0

for _ in range(int(input())):
    n, s = list(map(int, input().split()))
    N = list(map(int, input().split()))
    startIdx = 0
    endIdx = 0
    sumVal = N[0]
    while endIdx < n and startIdx <= endIdx + 1 :
        if sumVal < s and endIdx < n-1:
            endIdx += 1
            sumVal += N[endIdx]
        elif sumVal > s:
            sumVal = sumVal - N[startIdx]
            startIdx += 1
        else:
            break
    if sumVal == s:
        print('{} {}'.format(startIdx+1, endIdx+1))
    else:
        print(-1)