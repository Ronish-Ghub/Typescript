class sample{
    x=10
    static y=10
    constructor(){
        this.x+=1
        console.log(this.x)
        sample.y+=1
        console.log(sample.y)
    }
}
let s1=new sample()
//console.log(s1.x/*instance variable*/)
// s1.x=20
let s2=new sample()
// console.log(s2.x)