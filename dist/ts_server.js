let decimal = 1;
// console.log(1);
let fullName = `Bob Bobbington`;
let sentence = `Hello, my name is ${fullName}.`;
// console.log(sentence);
let list = [1, 2, 3];
let list2 = [1, 2, 3];
// console.log(list);
// console.log(list2);
let tuple;
tuple = ["hello", 10];
// console.log(tuple);
// console.log(tuple[0]); // hello
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c = Color.GREEN;
let cString = Color[1];
// console.log(c);
// console.log(cString);
var Color2;
(function (Color2) {
    Color2[Color2["RED"] = 1] = "RED";
    Color2[Color2["GREEN"] = 2] = "GREEN";
    Color2[Color2["BLUE"] = 3] = "BLUE";
})(Color2 || (Color2 = {}));
let c2 = Color2.GREEN;
// console.log(c2);          // 2
function warnUser() {
    // console.log("asdf");
}
warnUser();
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message) {
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
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 3, 4];
nums1.push(...nums2);
let result = [];
for (let item of nums1) {
    if (item === 0)
        continue; // 0이면 건너뛰기
    result.push(item);
}
result = result.sort();
console.log(result);
export {};
