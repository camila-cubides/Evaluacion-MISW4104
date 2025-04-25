import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlantaModule } from './planta/planta.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlantaModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título "Vivero El Otoño"', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toContain('Vivero El Otoño');
  });

  it('debería mostrar la imagen del vivero', () => {
    const image = fixture.debugElement.query(By.css('img[alt="Vivero"]'));
    expect(image).toBeTruthy();
    expect(image.nativeElement.src).toContain('assets/Invernadero.png');
  });

  it('debería mostrar el texto de contacto en el footer', () => {
    const footer = fixture.debugElement.query(By.css('.footer h1'));
    expect(footer.nativeElement.textContent).toContain('Contact us: +57 3102105253 - info@viveroelotonio.com');
  });

  it('debería renderizar el selector app-planta', () => {
    const plantaComponent = fixture.debugElement.query(By.css('app-planta'));
    expect(plantaComponent).toBeTruthy();
  });
});
