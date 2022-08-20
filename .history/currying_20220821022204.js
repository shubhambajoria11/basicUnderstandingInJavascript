let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // This sets 2 in the value of x
multiplyByTwo(4); // this will set 4 as the value of y. This is the currying concept.
