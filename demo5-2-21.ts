function receiveNumbers(/*res-argument*/...args:number[]){
    // for(let i of args){
    //     console.log(i)
    // }
    args.forEach((i)=>{console.log(i)})
}
receiveNumbers(16,94,59,49,4)