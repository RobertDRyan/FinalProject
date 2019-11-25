import { Component, OnInit } from '@angular/core';
import { CarsService } from '../Services/cars.service'
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  car:any=[];
    constructor(private router: Router, private route: ActivatedRoute, 
      private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getCar(this.route.snapshot.params['id']).subscribe(
      data => {
        this.car = data;
        console.log(this.car._id);
      })


  }

  onEditCar(form: NgForm ){
    this.carsService.UpdateCar(this.car._id, form.value.Make,
      form.value.Model, form.value.Engine, form.value.Year).subscribe();
      this.router.navigate(['/read']);
      alert("You have successfully updated a cars information");
  }

}
