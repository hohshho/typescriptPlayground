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
function infiniteLoop(): never {
    while (true) {
    }
}

// error("asdf");
infiniteLoop();