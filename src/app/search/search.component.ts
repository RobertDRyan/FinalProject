import { Component, OnInit } from '@angular/core';
import { CarsService } from '../Services/cars.service';
import { CarManagerService } from '../Services/car-manager.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cars: any = [];
  selectedMake: string;


  Make: string[];

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private carsService: CarsService,
              private CarManager: CarManagerService) { }

  ngOnInit() {

    this.Make = this.CarManager.Make;

    if(this.route.snapshot.params.Make != null){
      this.carsService.GetCarByMake(this.route.snapshot.params.Make).subscribe((data) => {
        this.cars = data;
      })
    }

  }

  SearchByMake(Make: string){

    if(Make != null){
      this.router.navigate(['/search/' + Make]);
      this.carsService.GetCarByMake(Make).subscribe(() => {
        this.ngOnInit();
      } 
      );
    }else{
      alert('There are not cars matching that make.')
    }
  }

  onDelete(id:String){

    this.carsService.DeleteCar(id).subscribe(
      () =>{
        this.ngOnInit();
      }
    );
  }

}
