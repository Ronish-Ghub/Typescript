class Account{
    branch:string
    date:Date
    ifsc_code:string
    constructor(Branch,Date,Ifsc_code){
        this.branch=Branch
        this.date=Date
        this.ifsc_code=Ifsc_code
    }
}
class Fixed_Account extends Account{
Intrest_rate:number=10;
minim_balance:number=1000;
constructor(Branch:string,date:Date,ifsc_code:string){
    super(Branch,date,ifsc_code)
}
}
class Savings_Account extends Account{
    Intrest_rate:number=20;
    minim_balance:number=1000;
    constructor(Branch,date,ifsc_code){
        super(Branch,date,ifsc_code)
    }
}
class Accountholder{
    account:any
    name:string
    age:number
    dob:Date
    balance:number
    type:string
    constructor(Name:string,age:number,dob:Date,Balance:number,Type){
        this.name=Name
        this.age=age
        this.dob=dob
        this.type=Type
        this.balance=Balance
        if(this.type=="savings"){
        this.account=new Savings_Account("Ekm",new Date(),"SG5363")
        }else{
        this.account=new Fixed_Account("EFD",new Date(),"egkd56")
        }
    }
}
let Accountholderlist=[]
function createaccount(name,age,dob,balance,type){
    Accountholderlist.push(new Accountholder(name,age,dob,balance,type))
}
let user1=new Accountholder("sajana",28,new Date(),1000,"savings")
console.log(user1)