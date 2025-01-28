import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss',
  providers: [ApiService]
})
export class StarshipsListComponent implements OnInit {

  starships: any[] = [];
  loading = false;
  nextUrl: string | null = null;

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
  this.loadStarships();
  }

  loadStarships(url:string|null|undefined = this.apiService['apiUrl']):void {
    if(this.loading || !url ) return;
    this.loading = true;

    this.apiService.getStarshipsData().subscribe((data) =>{
      this.starships = [...this.starships, ...data.results];
      this.nextUrl = data.next;
      this.loading = false;
    });
  }
}
