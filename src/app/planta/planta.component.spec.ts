import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { Planta } from './planta';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const plantasMock: Planta[]  = [
  {
    id: 1,
    nombre_comun: 'Helecho',
    nombre_cientifico: 'Nephrolepis exaltata',
    tipo: 'Interior',
    altura_maxima: 1.5,
    clima: 'Húmedo',
    sustrato_siembra: 'Mezcla de turba, perlita y fibra de coco'
  },
  {
    id: 2,
    nombre_comun: 'Sansevieria',
    nombre_cientifico: 'Sansevieria trifasciata',
    tipo: 'Interior',
    altura_maxima: 1.2,
    clima: 'Seco',
    sustrato_siembra: 'Sustrato bien drenado con arena y perlita'
  },
  {
    id: 3,
    nombre_comun: 'Palma Areca',
    nombre_cientifico: 'Dypsis lutescens',
    tipo: 'Interior',
    altura_maxima: 2.5,
    clima: 'Tropical húmedo',
    sustrato_siembra: 'Sustrato rico en materia orgánica, con buen drenaje'
  }
];

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule ],
      declarations: [
        PlantaComponent,
      ],
      providers: [PlantaService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar encabezados y 3 filas con los datos correctos', () => {
    spyOn(component, 'getPlantas').and.callThrough();

    component.plantas = plantasMock;
    fixture.detectChanges();


    const encabezados = fixture.debugElement.queryAll(By.css('thead th'));
    expect(encabezados.length).toBe(4);
    expect(encabezados[0].nativeElement.textContent).toContain('#');
    expect(encabezados[1].nativeElement.textContent).toContain('Nombre común');
    expect(encabezados[2].nativeElement.textContent).toContain('Tipo');
    expect(encabezados[3].nativeElement.textContent).toContain('Clima');

    const filas = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(filas.length).toBe(3);

    const datosEsperados = [
      ['1', 'Helecho', 'Interior', 'Húmedo'],
      ['2', 'Sansevieria', 'Interior', 'Seco'],
      ['3', 'Palma Areca', 'Interior', 'Tropical húmedo'],
    ];

    filas.forEach((fila, i) => {
      const celdas = fila.queryAll(By.css('td'));
      expect(celdas.length).toBe(4);
      datosEsperados[i].forEach((textoEsperado, j) => {
        expect(celdas[j].nativeElement.textContent).toContain(textoEsperado);
      });
    });
  });
});
