#Q: https://www.geeksforgeeks.org/bell-numbers-number-of-ways-to-partition-a-set/ 

def bellNum(n):
	bellNumber = [[0 for i in range(n+1)] for j in range(n+1)]
	bellNumber[0][0] = 1

	for i in range(1, n+1):
		bellNumber[i][0] = bellNumber[i-1][i-1]

		for j in range(1, i+1):
			bellNumber[i][j] = bellNumber[i-1][j-1] + bellNumber[i][j-1]

	return bellNumber[n][0]


def main():
	n = int(input())
	print(bellNum(n))

if __name__ == "__main__":
	main()