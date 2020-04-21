def main():
	test = int(input())
	for t in range(test):
		j = 0
		for i in range(9):
			s = list(input())
			if j >= 9:
				j = int(i/3)
			if j < 8:
				s[j] = s[j+1]
			else:
				s[j] = s[0]
			print("".join(s))
			j += 3

if __name__ == "__main__":
	main()