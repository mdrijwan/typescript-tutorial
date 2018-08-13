function cal1 (val1, val2){
  let total = val1 + val2;
  return total;
}
console.log(cal1(10,15));

function cal2(val1:number, val2:number):number {
  let total = val1 + val2;
  return total;
}
console.log(cal2(10, 15));

function cal3(val1: string, val2: number) {
  let total = val1 + val2;
  return total;
}
console.log(cal3("10", 15));

let calculator: (value1: number, value2: number) => number;

calculator = cal1;
console.log(calculator(10, 15));

// function plus (args1, args2){
//   return args1 + args2;
// }

let plus = (args1, args2) => (args1 + args2)
console.log(plus(1,2));