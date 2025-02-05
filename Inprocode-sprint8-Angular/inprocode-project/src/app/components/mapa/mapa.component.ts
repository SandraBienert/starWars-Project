import { Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();

}
private initMap(): void {
  // Configura el mapa
  this.map = L.map('map').setView([41.3851, 2.1734], 13); // Coordenades de Barcelona i zoom

  // Afegeix una capa de tiles (fons del mapa)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(this.map);

 // Afegeix un marcador
  L.marker([41.3851, 2.1734])
    .addTo(this.map)
    .bindPopup('Barcelona')
    .openPopup();
}
}

