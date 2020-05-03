# Q: https://codeforces.com/contest/1343/problem/C

for _ in range(int(input())):
	n = int(input())
	N = list(map(int, input().split()))
	sumIdx = [0]
	sumVal = 0
	i = 1
	while i < n:
		if N[i]*N[sumIdx[-1]] < 0:
			sumIdx.append(i)
		else:
			if N[i] > N[sumIdx[-1]]:
				sumIdx.pop()
				sumIdx.append(i)
		i += 1

	for i in range(len(sumIdx)):
		sumVal += N[sumIdx[i]]
	print(sumVal)