let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // This sets 2 in the value of x
multiplyByTwo(4);
