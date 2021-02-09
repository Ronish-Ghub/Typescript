var sample = /** @class */ (function () {
    function sample() {
        this.x = 10;
        this.x += 1;
        console.log(this.x);
        sample.y += 1;
        console.log(sample.y);
    }
    sample.y = 10;
    return sample;
}());
var s1 = new sample();
//console.log(s1.x/*instance variable*/)
// s1.x=20
var s2 = new sample();
// console.log(s2.x)
