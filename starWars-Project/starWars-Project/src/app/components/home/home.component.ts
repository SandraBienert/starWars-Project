import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StarshipsListComponent } from "../starships-list/starships-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarshipsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

data: any[] = [];

constructor(private apiService: ApiService){}

ngOnInit():void{
  this.llenarDatos();
}

llenarDatos(){
  this.apiService.getStarshipsData().subscribe(
    data =>{
      this.data = data;
      console.log(this.data);
    })
}

}
