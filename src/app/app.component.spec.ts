import { TestBed, async } from '@angular/core/testing';
import { AppComponent, routes } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GitHubCardComponent } from './git-hub-card/git-hub-card.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { SearchUserComponent } from "./search-user/search-user.component";
import { ReactivoComponent } from './reactivo/reactivo.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COMPONENTS } from './app.module';
import { RouterModule } from '@angular/router';
import { loginComponent } from "./login/login.component";
import { loginBoxComponent } from "./login-box/login-box.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        loginComponent,
        AboutComponent,
        ContactComponent,
        GitHubCardComponent,
        SearchUserComponent,
        PasivoComponent,
        ReactivoComponent,
        loginBoxComponent
      ],

      imports:[FormsModule,
      BrowserAnimationsModule,
      MATERIAL_COMPONENTS,
      RouterModule.forRoot(routes)
    ],

      providers:[{provide: APP_BASE_HREF,useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {// it es una prueba uniaria
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);//
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('prueba', () =>{
    let texto='UrIeL';
    expect(texto).toEqual('UrIeL')//yo espero que..
  });
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();//crea la vista... accede en el html
    const compiled = fixture.debugElement.nativeElement;//nativeElement accede a la vista
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');//querySelector busca
    //textContent es el contenido dentro de una etiqueta
  }));
});
