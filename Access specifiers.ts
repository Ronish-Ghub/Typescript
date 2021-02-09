class a{
    x=100
    //private
    #y=40
    protected z=90
    constructor(){
        console.log(this.#y)
}
let obj=new a()
console.log(obj.x)
//console.log(obj.y)
//console.log(obj.z)
class B extends a{
    constructor(){
        super()
        console.log(this.z)
    }
}
class c extends B{
    constructor(){
        super()
        console.log(this.z)
        //console.log(this.y)
        console.log(this.x)
    }
}