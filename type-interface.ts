interface CarInterface{
  brand: string,
  speed: number,
  speedMethod(velocity:number):void
};

// implementing interface to object
let newCar: CarInterface = {
  brand: "BMW",
  speed: 400,
  speedMethod(){
    console.log(`this ${this.brand} car is going at ${this.speed} km/h`)
  }
};

// newCar.speedMethod();

// implementing interface to function
function car1(newCar:CarInterface){
  newCar.brand = "Toyota";
  newCar.speed = 200;
  console.log(`this ${newCar.brand} car is going at ${newCar.speed} km/h`)
};

car1(newCar);

// implementing interface to class

class CarClass implements CarInterface{
  brand: "Nissan";
  speed: 900;
  speedMethod(velocity){
    console.log(`This car is going at ${velocity}`)
  }

}

let sportsCar = new CarClass()
sportsCar.speedMethod(800)