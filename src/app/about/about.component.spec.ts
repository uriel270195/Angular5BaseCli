import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/*import { MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule } from '@angular/material';*/
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from "../app.providers";
import { AboutComponent } from './about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AboutComponent', () => {//encapsulado para pruebas unitarias
  let component: AboutComponent;//declaracion de variables
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {//antes de cada test ... es la configuracion de pruebas unitarias
                            //se configura antes de que se ejecute las pruebas unitarias
    TestBed.configureTestingModule({//configura el modulo de testing
      declarations: [ AboutComponent ],
      imports: [MATERIAL_COMPONENTS,
        HttpClientModule,
        BrowserAnimationsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;//inicializacion de variables
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
