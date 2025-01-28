import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

results: any[] = [];

constructor(private apiService: ApiService){}

ngOnInit():void{
  this.llenarDatos();
}

llenarDatos(){
  this.apiService.getStarshipsData().subscribe(
    results =>{
      this.results = results;
      console.log(this.results);
    })
}

}
