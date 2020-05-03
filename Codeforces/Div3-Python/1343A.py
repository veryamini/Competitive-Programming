# Q: https://codeforces.com/contest/1343/problem/A


for _ in range(int(input())):
	n = int(input())
	m = 4
	while True:
		if n%(m - 1) == 0:
			break
		m *= 2
	print(int(n/(m-1)))