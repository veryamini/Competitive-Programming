# Question: https://practice.geeksforgeeks.org/problems/count-the-triplets/0

for _ in range(int(input())):
	n = int(input())
	N = list(map(int, input().split()))
	N.sort()
	print(N)
	num = 0
	for i in range(n-2):
		if N[i+2] == N[i] + N[i+1]:
			num += 1
	if num:
		print(num)
	else:
		print(-1)