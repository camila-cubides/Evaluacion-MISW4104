import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css'],
  standalone: false,
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta> = [];
  plantasInterior: Number = 0;
  plantasExterior: Number = 0;
  
  constructor(private plantaService: PlantaService) { }

  getPlantas() {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.plantasInterior = (plantas.filter(planta => planta.tipo === "Interior")).length
      this.plantasExterior = (plantas.filter(planta => planta.tipo === "Exterior")).length
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
