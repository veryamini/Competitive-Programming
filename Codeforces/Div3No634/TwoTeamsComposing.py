def main():
	test = int(input())
	for t in range(test):
		n = int(input())
		N = list(map(int, input().split(" ")))
		N.sort()
		mapArray = [[N[0], 1]]
		maxSkillStudentNum = 1
		for i in range(1, n):
			if N[i] == mapArray[len(mapArray) -1][0]:
				mapArray[len(mapArray) -1][1] += 1
			else:
				mapArray.append([N[i], 1])
			if maxSkillStudentNum < mapArray[len(mapArray) -1][1]:
				maxSkillStudentNum = mapArray[len(mapArray) -1][1]
		if maxSkillStudentNum < len(mapArray):
			print(maxSkillStudentNum)
		elif maxSkillStudentNum == len(mapArray):
			print(maxSkillStudentNum - 1)
		else:
			print(len(mapArray))

if __name__ == "__main__":
	main()
