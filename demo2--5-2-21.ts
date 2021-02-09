class num{
    arr:number[]=[10,20,30,50,70,80,90,87]
    constructor(){
        let result=this.arr.filter((item)=>{if(item % 5==0){ return item}})
        console.log(result)
    }
}
let obj=new num()