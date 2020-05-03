
# Q: https://www.geeksforgeeks.org/tiling-problem/
# count(n) = count(n-1) + count(n-2)
# count(n) = n if n = 1, n = 2
# converts in fibbonacci series with different starting numbers
def fib(n):

	a = 1
	b = 2

	if n == 0:
		print("WRONG INPUT!")
	elif n == 1 or n == 2:
		return n
	else:
		for i in range(2, n):

			c = a + b
			a = b
			b = c

		return c

def main():
	n = int(input())

	print(fib(n))

if __name__ == "__main__":
	main()