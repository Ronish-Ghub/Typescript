var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age, adress) {
        this.name = name;
        this.adress = adress;
        this.age = age;
    }
    return person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age, address, username, password) {
        var _this = _super.call(this, name, age, address) || this;
        _this.username = username;
        _this.password = password;
        return _this;
    }
    User.prototype.createAccount = function (actype, acname, acid) {
        this.account = new Account(actype, acname, acid);
    };
    return User;
}(person));
var Account = /** @class */ (function () {
    function Account(actype, acname, acid) {
        this.accoundtype = actype;
        this.accountname = acname;
        this.id = acid;
    }
    return Account;
}());
var user1 = new User("anna", 12, "anything", "anna12", "anna");
user1.createAccount("basic", "Ronish", "123");
// let obj=new person("Ronish",["cheruvathoor House"],7025672535,21)
// console.log(obj)
console.log(user1);
