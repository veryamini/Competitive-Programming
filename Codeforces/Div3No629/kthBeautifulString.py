import math

for _ in range(int(input())):
	n, k = list(map(int, input().split()))
	N = int(n*(n-1)/2)
	if k == N:
		print('bb'+'a'*(n-2))
	else:
		n_temp = int((1+math.sqrt(1+8*k))/2)
		string = 'a'*(n-n_temp) + 'bb' + 'a'*(n_temp-2)
		string = list(string)
		N_temp = int(n_temp*(n_temp-1)/2)
		times = k - N_temp

		for i in range(0, times):
			if string[n-n_temp-i] == string[n-n_temp-i+1] and string[n-n_temp-i] == 'b':
				string[n-n_temp-i-1] = 'b'
				string[n-n_temp-i] = 'a'
				if n-1 != n-n_temp+1:
					string[n-1] = 'b'
					string[n-n_temp-i+1] = 'a'
			else:
				string[n-1-i] = 'b'
				string[n-1-i+1] = 'a'

			

		print("".join(string))	