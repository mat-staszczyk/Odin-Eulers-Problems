// Even Fibonacci numbers
// https://projecteuler.net/problem=2

/*
My another solution for task from The Odin Project. 
Problem wasn't really complex and you can simply 
change it into a function which take a parameter
of loop length (in this case it is a static 4000000).
In my opinion it should be as simple as it can
so my algorithm create another Fibonacci sequence 
value and checks if it is a even number. 
If the condition is true it will add value 
to the sum variable.
*/

var sum=0, num1=1, num2=2, temp;

while (num2<4000000) {
	temp = num1 + num2;
	num1=num2;
	num2=temp;

	if (temp%2===0) {
		sum += temp;
	}
}

console.log(sum);
