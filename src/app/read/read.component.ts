import { Component, OnInit } from '@angular/core';
import { CarsService } from '../Services/cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarManagerService } from '../Services/car-manager.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyCars: any = [];
  //cars: any = [];
  selectedMake: string;

  Make: string[];

  constructor(private carsService: CarsService,
              private CarManager: CarManagerService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {

    this.Make = this.CarManager.Make;

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

  SearchByMake(Make: string){
    if(Make != null){
      this.router.navigate(['/search/' + Make]);
    }
  }

}
