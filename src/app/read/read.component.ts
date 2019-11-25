import { Component, OnInit } from '@angular/core';
import { CarsService } from '../Services/cars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyCars: any = [];
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.GetCarInfo().subscribe((data) =>{
      this.MyCars = data.cars;
    })
  }

  onDelete(id:String){

    this.carsService.DeleteCar(id).subscribe(
      () =>{
        this.ngOnInit();
      }
    );
  }

}
