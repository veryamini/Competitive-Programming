# Q: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

def fib(n):

	a = 0
	b = 1

	if n < 0:
		print("Wrong Input!")
	elif n == 0:
		return a
	elif n == 1:
		return b
	else:
		for i in range(2, n+1):

			c = a + b
			a = b
			b = c

		return c

def main():
	n = int(input())

	print(fib(n))

if __name__ == "__main__":
	main()