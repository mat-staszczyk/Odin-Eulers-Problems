firstNum = 0
scndNum = 1
sum = 0
fibo = 0

while scndNum < 4000000 do 
	fibo = firstNum + scndNum
	firstNum = scndNum
	scndNum = fibo

	if scndNum.even?
		sum += scndNum
	end 
end

print sum