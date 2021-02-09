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
var polygon = /** @class */ (function () {
    function polygon(name, no_of_slides) {
        this.name = name;
        this.no_of_slides = no_of_slides;
    }
    polygon.prototype.area = function () {
        console.log("Calculate area of poligon");
    };
    return polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, ns, length, breadth) {
        var _this = _super.call(this, name, ns) || this;
        _this.length = length;
        _this.breadth = breadth;
        return _this;
    }
    Rectangle.prototype.area = function () {
        console.log("Area of rect =", this.length * this.breadth);
        //super.area()
    };
    return Rectangle;
}(polygon));
var r = new Rectangle("Rect", 4, 10, 12);
r.area();
