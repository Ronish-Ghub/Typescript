class company{
    code=101
    constructor(){
        console.log("Parent class constructer invoke")
    }
     displaycode(){
        console.log(`company code ${this.code}`)
    }
}
class department extends company{

    name:string="IIT"
    dcode="IT101"
    constructor(){
        super()
    }
    view(){
        console.log(`company code =${this.code}`)
        console.log(`department code =${this.dcode}`)
    }
}
let d=new department()
d.displaycode()
console.log(d.code)
d.view()