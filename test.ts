class student{
    // name:string="Ronish"
    // age:number=12
    // rollno:number=1
    Name:string
    age:number
    roll_no:number
    mark:number[]
    constructor(name:string,age:number,rollno=1,mark:number[]){
        this.Name=name
        this.age=age
        this.roll_no=rollno
        this.mark=mark
    }
    average():void{
        var i=0;
        var sum=0
        var a=this.mark.length
        for(i=0;i<a;i++){
            sum+=this.mark[i]
        }
        var avg=sum/a
        console.log("Average=",avg)
        }
}
let obj=new student("Ronish",21,3,[1,2,3])
console.log(obj)
obj.average()
