class polygon{
    name:string
no_of_slides:number
constructor(name,no_of_slides){
    this.name=name
    this.no_of_slides=no_of_slides
}
area():void
{
    console.log("Calculate area of poligon")
}
}
class Rectangle extends polygon{
length:number
breadth:number
constructor(name:string,ns:number,length:number,breadth:number){
    super(name,ns)
    this.length=length
    this.breadth=breadth
}
area():void
{
    console.log("Area of rect =",this.length*this.breadth)
    //super.area()
}}
let r=new Rectangle("Rect",4,10,12)
r.area()