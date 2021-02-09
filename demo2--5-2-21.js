var num = /** @class */ (function () {
    function num() {
        this.arr = [10, 20, 30, 50, 70, 80, 90, 87];
        var result = this.arr.filter(function (item) { if (item % 5 == 0) {
            return item;
        } });
        console.log(result);
    }
    return num;
}());
var obj = new num();
