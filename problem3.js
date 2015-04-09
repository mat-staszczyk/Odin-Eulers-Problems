// Largest prime factor
// https://projecteuler.net/problem=3

/*
Below 'isPrime' function checks that argument
is a prime number. It is crucial for maxPrimeFactor
function magic.
*/

var isPrime = function (ar) {
    var i;

	for (i = 2; i < ar; i++) {
		if (ar%i===0) {
			return false;
		}
	}
	return true;
};

/*
Thanks to isPrime function we only need to 
check which number is a factor of passed data.
If it also a prime number we've got our answer.
We need to check dividers in descending order
because function gave us for an answer first 
data which meets both conditions.
*/

var maxPrimeFactor = function (ar) {
	var d = ar-1;

	while (d > 1) {
		if (ar%d===0 && isPrime(d)) {
			return d;
		}
		d--;
	}
	return ar;
};

/*
In original Eulers problem we have to check
factor of the number 600851475143, but in this 
case there is no need for that long wait time. 
*/

maxPrimeFactor(1000);
