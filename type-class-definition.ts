// class Continent{
//   country:string;

//   constructor(country){
//     this.country = country
//   }
// }

class Continent{
  constructor(public country:string){
    this.country = country;
  }

  subContinent(){
    console.log(`${this.country} is located in Asia Continent`)
  }
}

let continent1 = new Continent("Bangladesh");


continent1.subContinent() //subContinent has to be public

console.log(continent1.country) //country has to be public

class SubContinent extends Continent{
  region(){
    console.log(`${this.country} is located in SEA region`)
  }

  // subContinent() {
  //   console.log(`${this.country} is being protected`)
  // }
}

let subContinent2 = new SubContinent("Malaysia");
subContinent2.region();
subContinent2.subContinent();
console.log(subContinent2.country)