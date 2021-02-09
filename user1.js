function user(username,password,phonenumber,email){
this.username=username
this.password=password
this.phonenumber=phonenumber
this.email=email
}
function add(){
    let username=document.getElementById("uname").value
    let password=document.getElementById("pass").value
    let number=document.getElementById("num").value
    let email=document.getElementById("em").value
    let user1=new user(username,password,number,email)
    console.log(user1)
}