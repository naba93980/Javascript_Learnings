//class
//extends
//constructor
//super
//get
//set
//static

//defining a classes in js basically means building the prototype
class Vehicle{
    constructor(wheels)
    {   
        this.numberofWheels = wheels;
    }
    get whls()
    {
        return this.numberofWheels;
    }
    set whls(wheels)
    {
        return this.numberofWheels=wheels;
    }
    static accelarate() //shared by all objects of class
    {
        console.log( "go faster" );        
    }
    justAMethod() {
        //write code, no need to put function keyword before justAMethod()
    }
}
//all the methods defined in a class lies inside the prototype, only the properties lies with the object, and with one step ahead static method lies with the constructor.

let car = new Vehicle(4);
console.log( car.numberofWheels );
car.wheel = 7;
console.log( car.wheel );
Vehicle.accelarate(); //Vehicle here is constructor


//Vehicle is __proto__ of Car
class Car extends Vehicle{
    constructor(parentWheels,_make,_model,_year) {
        super(parentWheels);
        this.make = _make;
        this.model = _model;
        this.year = _year;
    }
    info()
    {        
        console.log(`The ${this.make}, ${this.model} was made in ${this.year} and has ${this.whls} wheels`);        
    }
}

let ferrari = new Car(4, 'Ferrari', 'Testarossa', 1985);
ferrari.info();
ferrari.numberofWheels = 7;
ferrari.info();
ferrari.__proto__.constructor.accelarate();
//OR
Car.accelarate();  //Car here is constructor -> i.e ferrari.__proto__.constructor



// Car constructor has Vehicle constructor as __proto__
// Car object has Vehicle object as __proto__
// Car.prototype gives the Car object(class here)
// Vehicle.prototype gives the Vehicle object(class here)