import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from '../Services/cars.service';
import { format } from 'url';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

 

  onAddCar(form: NgForm){

    if(!form.valid)
    {
      return;
    }

    this.carsService.AddCarInfo(form.value.Make, form.value.Model,
       form.value.Engine, form.value.Year).subscribe(
         () => {

       }
       );
       alert('You have successfully added a ' + form.value.Make + ' to our database!');
       form.resetForm();
       
  }
  
}
