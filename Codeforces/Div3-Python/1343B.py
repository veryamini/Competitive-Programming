# Q: https://codeforces.com/contest/1343/problem/B

for _ in range(int(input())):
	n = int(input())
	if n%4 == 0:
		print('YES')
		a = [0]*n
		for i in range(n):
			if i < int(n/2):
				a[i] = (i+1)*2
				a[int(n/2)+i] = a[i] - 1
		a[n-1] = 3* int(n/2) - 1
		string = ''
		for i in range(n):
			string += str(a[i]) + ' '
		print(string)
	else:
		print('NO')