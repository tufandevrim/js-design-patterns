function Car(speak){
    this.speak = speak || 'honk';    
}
Car.prototype.honk = function(){
    console.log(this.speak);
}


function Truck(){
    Car.apply(this, arguments);
} 
Truck.prototype = new Car();



var car = new Car();
car.honk();

var truck = new Truck('Truck says horrrrnnnn');
truck.honk();

var truck2 = new Truck();
truck2.honk();



