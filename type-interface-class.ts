// implementing interface to class
interface AutoMobileInterface{
  car: string,
  mph: number,
  velocity(speed:number):void
}


class AutoMobileClass implements AutoMobileInterface {
  car: string;
  mph: number;
  velocity(speed) {
    console.log(`This BMW is going at ${speed} mph speed`)
  }

}

let carObject = new AutoMobileClass()
carObject.velocity(900)