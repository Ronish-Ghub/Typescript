var student = /** @class */ (function () {
    function student(name, age, rollno, mark) {
        if (rollno === void 0) { rollno = 1; }
        this.Name = name;
        this.age = age;
        this.roll_no = rollno;
        this.mark = mark;
    }
    student.prototype.average = function () {
        var i = 0;
        var sum = 0;
        var a = this.mark.length;
        for (i = 0; i < a; i++) {
            sum += this.mark[i];
        }
        var avg = sum / a;
        console.log("Average=", avg);
    };
    student.prototype.display = function () {
        console.log(this.Name);
        console.log(this.age);
        console.log(this.roll_no);
    };
    return student;
}());
var obj = new student("Ronish", 21, 3, [1, 2, 3]);
console.log(obj);
obj.average();
