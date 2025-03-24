let decimal: number = 1;

// console.log(1);

let fullName: String = `Bob Bobbington`;

let sentence: String = `Hello, my name is ${fullName}.`

// console.log(sentence);

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// console.log(list);
// console.log(list2);

let tuple: [string, number];

tuple = ["hello", 10];

// console.log(tuple);
// console.log(tuple[0]); // hello

enum Color {RED, GREEN, BLUE}

let c : Color = Color.GREEN
let cString : string = Color[1];

// console.log(c);
// console.log(cString);

enum Color2 {RED = 1, GREEN, BLUE}

let c2 : Color2 = Color2.GREEN

// console.log(c2);          // 2

function warnUser(): void {
    // console.log("asdf");
}

warnUser();

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
// function infiniteLoop(): never {
    // while (true) {
    // }
// }

// error("asdf");
// infiniteLoop();

let nums1: number[] = [1,2,3,0,0,0];
let nums2: number[] = [2,3,4];

nums1.push(...nums2);
let result: number[] = [];

for(let item of nums1) {
    if (item === 0) continue;  // 0이면 건너뛰기
    result.push(item);
}

result = result.sort();

console.log(result);

function add(a: number, b: number) : number {
    return a + b;
}

const add2 = (a: number, b: number): number => a + b;
const add3 = (a: number, b: number) => a + b;

console.log(add(100, 200));
console.log(add2(100, 200));
console.log(add3(100, 200));

function introduce(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
      console.log(`tall : ${tall + 10}`);
    }
}
  
introduce("이정환");
introduce("이정환", 100)

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
};

console.log(getSum(1, 2, 3, 4, 5));
console.log(getSum2(1, 2, 3));

type Operation2 = {
    (a: number, b: number): number;
    name: string;
};
  
const add22: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
  
console.log(add22(1, 2));
console.log(add22.name);