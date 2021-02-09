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
var company = /** @class */ (function () {
    function company() {
        this.code = 101;
        console.log("Parent class constructer invoke");
    }
    company.prototype.displaycode = function () {
        console.log("company code " + this.code);
    };
    return company;
}());
var department = /** @class */ (function (_super) {
    __extends(department, _super);
    function department() {
        var _this = _super.call(this) || this;
        _this.name = "IIT";
        _this.dcode = "IT101";
        return _this;
    }
    department.prototype.view = function () {
        console.log("company code =" + this.code);
        console.log("department code =" + this.dcode);
    };
    return department;
}(company));
var d = new department();
d.displaycode();
console.log(d.code);
d.view();
