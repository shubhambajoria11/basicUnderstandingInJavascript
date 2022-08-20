let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // This sets 2 in the value of x
multiplyByTwo(4); // this will set 4 as the value of y. The output will be 8. This is the currying concept.

// Similarly we can set the another object as :

let multiplyByThree = multiply.bind(this, 3);

multiplyByThree(5); // output is 15

// Currying concept can also be done with closures instead of bind function:
let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo1 = multiply1(2);
