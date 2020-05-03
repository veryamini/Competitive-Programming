# Q: https://codeforces.com/contest/1335/problem/B

def main():
	latin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	t = int(input())
	for i in range(t):
		inputNum = input().split(' ')
		n = int(inputNum[0])
		a = int(inputNum[1])
		b = int(inputNum[2])
		s = ['']*n
		distinctLetters = latin[0:b]
		if a == b:
			if n > len(latin):
				quo = int(n/len(latin))
				for i in range(0, (quo+1)*26, 26):
					s[i: i+26] = latin
				mod = n%len(latin)
				s[i:] = latin[0:mod]	
			else:
				s = latin[0:n]
		else:
			for i in range(n):
				s[i] = distinctLetters[(a-i)%b]
		print(''.join(s))

if __name__ == "__main__":
	main()