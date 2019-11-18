import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../Services/cars.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  car:any=[];
    constructor(private carService:CarsService, private router: Router,
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.carService.GetCar(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.car = data;
      }
    )
  }

  onEditCar(form:NgForm){

    this.carService.UpdateCar(this.car._id, form.value.Make,
      form.value.Model, form.value.Engine, form.value.Year).subscribe();
      this.router.navigate(['/read']);
  }

}
