# Q: https://www.geeksforgeeks.org/program-nth-catalan-number/

def catalanNum(n):
	if n == 0 or n==1:
		return 1

	cn = [0]*(n)
	cn[0] = 1
	cn[1] = 1

	for i in range(2, n):
		cn[i] = 0
		for j in range(i):
			cn[i] = cn[i] + cn[j]*cn[i-j-1]

	return cn[n-1]

def main():
	n = int(input())
	print(catalanNum(n))


if __name__ == "__main__":
	main()
