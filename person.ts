class person{
    name:string
    adress:string
    age:number
    constructor(name:string,age:number,adress:string){
        this.name=name
        this.adress=adress
        this.age=age
    }
}
class User extends person{
    username:string
    password:string
    account:Account
    constructor(name,age,address,username,password){
    super(name,age,address)
    this.username=username
    this.password=password
    }
    createAccount(actype,acname,acid){
    this.account=new Account(actype,acname,acid)
    }
}
class Account{
    accoundtype:string
    accountname:string
    id:string
    constructor(actype:string,acname:string,acid:string){
    this.accoundtype=actype
    this.accountname=acname
    this.id=acid
    }
}
let user1=new User("anna",12,"anything","anna12","anna")
user1.createAccount("basic","Ronish","123")
// let obj=new person("Ronish",["cheruvathoor House"],7025672535,21)
// console.log(obj)
console.log(user1)