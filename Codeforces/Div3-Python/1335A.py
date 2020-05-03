#  Q: https://codeforces.com/contest/1335/problem/A

def main():
	t = int(input())
	for i in range(t):
		n = int(input())
		if n%2 == 0:
			print(int(n/2) - 1)
		else:
			print(int(n/2))

if __name__ == "__main__":
	main()