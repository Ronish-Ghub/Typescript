function greetings(msg) {
    console.log("Hello", msg);
    return new Date();
}
greetings("Gays");
var s = greetings("Bro");
console.log(s);
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 + num2 + num3;
}
var result = add(10.3, 9.7);
console.log(result);
function test(/*union operater*/ x) {
    console.log(x);
    console.log(typeof x);
}
test(100);
test("Anna");
