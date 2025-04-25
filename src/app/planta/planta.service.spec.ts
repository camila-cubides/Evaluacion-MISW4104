import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlantaService } from './planta.service';
import { Planta } from './planta';
import { environment } from '../../environments/environment.development';

describe('PlantaService', () => {
  let service: PlantaService;
  let httpMock: HttpTestingController;

  const mockPlantas: Planta[] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
    service = TestBed.inject(PlantaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debería recuperar plantas de la API mediante GET', () => {
    service.getPlantas().subscribe((plantas) => {
      expect(plantas.length).toBe(3);
      expect(plantas).toEqual(mockPlantas);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}202212_MISW4104_Grupo2.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPlantas);
  });
});
