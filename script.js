// This is the Collatz Sequence. It divides an even number in half and multiplies an odd number by 3 and adds 1. 
// It repeats this cycle until it inevitably reaches 1.

function collatz(number) {
    if (number === 1) {
        console.log ("Pretty neat, huh?");
    } else if (number % 2 === 0) {
        number = number / 2;
        console.log(number);
        collatz(number);
    } else {
        number = number * 3 + 1;
        console.log(number);
        collatz(number);
    };
};

collatz(47);