var args = process.argv;
var length = args.length;
var sumElements = args.slice(2, length);
var sum = sumElements.reduce(add, 0);
console.log(sum);

function add(a, b) {
  a = +a;
  b = +b;
 return a + b;
}
