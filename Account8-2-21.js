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
var Account = /** @class */ (function () {
    function Account(Branch, Date, Ifsc_code) {
        this.branch = Branch;
        this.date = Date;
        this.ifsc_code = Ifsc_code;
    }
    return Account;
}());
var Fixed_Account = /** @class */ (function (_super) {
    __extends(Fixed_Account, _super);
    function Fixed_Account(Branch, date, ifsc_code) {
        var _this = _super.call(this, Branch, date, ifsc_code) || this;
        _this.Intrest_rate = 10;
        _this.minim_balance = 1000;
        return _this;
    }
    return Fixed_Account;
}(Account));
var Savings_Account = /** @class */ (function (_super) {
    __extends(Savings_Account, _super);
    function Savings_Account(Branch, date, ifsc_code) {
        var _this = _super.call(this, Branch, date, ifsc_code) || this;
        _this.Intrest_rate = 20;
        _this.minim_balance = 1000;
        return _this;
    }
    return Savings_Account;
}(Account));
var Accountholder = /** @class */ (function () {
    function Accountholder(Name, age, dob, Balance, Type) {
        this.name = Name;
        this.age = age;
        this.dob = dob;
        this.type = Type;
        this.balance = Balance;
        if (this.type == "savings") {
            this.account = new Savings_Account("Ekm", new Date(), "SG5363");
        }
    }
    return Accountholder;
}());
var Accountholderlist = [];
function createaccount(name, age, dob, balance, type) {
    Accountholderlist.push(new Accountholder(name, age, dob, balance, type));
}
var user1 = new Accountholder("sajana", 28, new Date(), 1000, "savings");
console.log(user1);
