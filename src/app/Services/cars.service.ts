import { Injectable } from '@angular/core';
import { Car } from '../car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  GetCarInfo():Observable<any>{
    return this.http.get('http://localhost:4000/api/cars');
  }

  AddCarInfo(Make: string, Model: string, Engine: string, Year: string):Observable<any>{
    const car:Car = {Make:Make, Model:Model, Engine:Engine, Year:Year };
    return this.http.post('http://localhost:4000/api/cars', car)
  }

  DeleteCar(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/cars/'+id);
  }

  GetCar(id:String):Observable<any>{
    return this.GetCar('http://localhost:4000/api/cars/'+id);
  }

  UpdateCar(id:String, Make:string, Model:string, Engine:string, Year:string):Observable<any>{
    const car:Car = {Make:Make, Model:Model, Engine:Engine, Year:Year};

    return this.http.put('http://localhost:4000/api/cars/'+id, car);
  }
}
