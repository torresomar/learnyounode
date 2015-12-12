var args = process.argv;
var length = args.length;
var sumElements = args.slice(2, length);
var sum = sumElements.reduce(add, 0);

function add(a, b) {
  a = +a;
  b = +b;
 return a + b;
}
