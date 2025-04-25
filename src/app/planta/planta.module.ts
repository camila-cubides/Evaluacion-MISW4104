import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantaComponent],
  exports: [PlantaComponent]
})
export class PlantaModule { }
