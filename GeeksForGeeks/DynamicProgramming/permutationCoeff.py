# Q: https://www.geeksforgeeks.org/permutation-coefficient/

MAX = 100
fac = [0]*(MAX+1)
pCoeff = [[0 for i in range(MAX+1)] for j in range(MAX+1)]
pCoeff[0][0] = 1

def factorial(n):
	if n == 0:
		return 1
	if fac[n] != 0:
		return fac[n]
	else:
		fac[n] = n*factorial(n-1)

	return fac[n]

def permCoeff(n, k):
	return int(factorial(n)/factorial(n-k))


def main():
	n, k = list(map(int, input().split()))
	print(permCoeff(n, k))


if __name__ == "__main__":
	main()