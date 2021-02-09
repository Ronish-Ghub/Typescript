function greetings(msg:string):Date{
    console.log("Hello",msg)
    return new Date()
}
greetings("Gays")
let s=greetings("Bro")
console.log(s)
function add(num1:number,num2:number,num3:number=10):number{
    return num1+num2+num3
}
let result=add(10.3,9.7)
console.log(result)
function test(/*union operater*/ x:number|string|string[],y?:number){
console.log(x)
console.log(typeof x)
}
test(100)
test("Anna")