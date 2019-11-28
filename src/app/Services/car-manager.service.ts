import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarManagerService {

  Make: string[] = [
    //A start
    "Abarth",
    "ABT",
    "Acura",
    "Alfa Romeo",
    "Apollo",
    "Ariel",
    "Ascari",
    "Aston Martin",
    "Audi",
    "Austin",
    //A end

    //B Start
    "BAC",
    "Bentley",
    "BMW",
    "Bowler",
    "Bugatti",
    "Buick",
    //B end

    // C start
    "Cadillac",
    "Caterham",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    //C end

    //D Start
    "Dacia",
    "Daewoo",
    "DAF",
    "Daihatsu",
    "Daimler",
    "Datsun",
    "DMC",
    "De Tomaso",
    "Dodge",
    "Donkervoort",
    //D end

    //E start

    //E end

    //F start
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    //F end

    //G start 
    "Genesis",
    "GMC",
    "GTA Motor",
    "Gumpert",
    //G end

    //H start
    "Hennessey",
    "Hillman",
    "Holden",
    "Honda",
    "Hudson",
    "Hummer",
    "Hyundai",
    //H end

    //I start
    "Infiniti",
    "Isuzu",
    "Iveco",
    //I end

    //J start
    "JAC Motors",
    "Jaguar",
    "Jawa",
    "Jeep",
    "Jensen",
    "JMC",
    //J end

    //K start
    "KIA",
    "Koenigsegg",
    "KTM",
    //K end

    //L start
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lotus",
    //L end

    //M start    
    "MAN",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Mercury",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Morris",
    "Mosler",
    //M end 

    //N start
    "Nissan",
    "Noble",
    //N end 

    //O start
    "Oldsmobile",
    "Opel",
    //O end 

    //P start
    "Pagani",
    "Peugeot",
    "Plymouth",
    "Polestar",
    "Pontiac",
    "Porsche",
    "Prodrive",
    "Proton",
    //P end 

    //R start
    "Radical",
    "RAM",
    "Renault"   ,
    "Rimac",
    "Rolls-Royce",
    "Rover",
    "RUF",
    //R end 

    //S start
    "Saab",
    "Saleen",
    "Saturn",
    "Scion",
    "SEAT",
    "Shelby",
    "Skoda",
    "Smart",
    "Spyker",
    "SsangYong",
    "Subaru",
    "Suzuki",
    //S end 

    //T start
    "Talbot",
    "Tesla",
    "Toyota",
    "Triumph",
    "TVR",
    //T end 

    //U start
    "Ultima",
    //U end 

    //V start
    "Vauxhall",
    "Volkswagen",
    "Volvo"
    //V end

  ];
  
  constructor() { }

}