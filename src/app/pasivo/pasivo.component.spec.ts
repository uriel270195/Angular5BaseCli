import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';//es para errores de ng
import { PasivoComponent } from './pasivo.component';
import { APP_PROVIDERS } from '../app.providers';
describe('PasivoComponent', () => {
  let component: PasivoComponent;
  let fixture: ComponentFixture<PasivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasivoComponent ],
      imports: [FormsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
