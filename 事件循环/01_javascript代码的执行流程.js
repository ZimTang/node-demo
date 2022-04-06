const msg = "hello";

console.log(msg);

function sum(num1, num2) {
  return num1 + num2;
}

function foo() {
  const result = sum(20, 30);
  console.log(result);
}

foo();
