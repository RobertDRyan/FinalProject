import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from '../Services/cars.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private carService: CarsService) { }

  ngOnInit() {
  }

  onAddCar(form: NgForm){

    this.carService.AddCarInfo(form.value.Make, form.value.Model,
       form.value.Engine, form.value.Year).subscribe();

       form.resetForm();
  }

}
