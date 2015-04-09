// Find sum of multiples of 3 and 5
// http://projecteuler.net/problem=1

/*
This is my solution for task from The Odin Project. 
Problem wasn't really complex and you can simply 
change it into a function which take a parameter
of loop length (in this case it is a static 1000).
In my opinion it should be as simple as it can
so my algorithm checks the divisibility by 3 and 5
and if condition is met it adds number to sum 
viariable. 
*/

var sum = 0, i;

for (i = 1; i < 1000; i++) {
  if (i%3===0 || i%5===0) {
    sum += i;
  } 
}

console.log(sum);
