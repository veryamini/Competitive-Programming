# Q: https://www.geeksforgeeks.org/binomial-coefficient-dp-9/

MAX = 100
binCoeff = [[0 for i in range(MAX+1)] for j in range(MAX+1)]
binCoeff[0][0] = 1

def binomialCoeff(n, k):
	if k == 0 or k == n:
		binCoeff[n][k] = 1

	if len(binCoeff) <= n:
		binCoeff.extend([[0 for i in range(MAX+1)] for j in range(MAX+1)])

	if binCoeff[n][k] != 0:
		return binCoeff[n][k]
	else:
		
		binCoeff[n][k] = binomialCoeff(n-1, k-1) + binomialCoeff(n-1, k)
	return binCoeff[n][k]


def main():
	n, k = list(map(int, input().split()))
	print(binomialCoeff(n, k))


if __name__ == "__main__":
	main()