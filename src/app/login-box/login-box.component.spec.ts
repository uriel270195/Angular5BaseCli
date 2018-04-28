import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from "../app.providers";
import { loginBoxComponent } from './login-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent, routes } from '../app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { loginComponent } from '../login/login.component';
import { SearchUserComponent } from '../search-user/search-user.component';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { registroBoxComponent } from '../registro-box/registro-box.component';
import { registroComponent } from '../registro/reistro.component';
describe('loginBoxComponent', () => {//encapsulado para pruebas unitarias
  let component: loginBoxComponent;//declaracion de variables
  let fixture: ComponentFixture<loginBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({//configura el modulo de testing
      declarations: [ loginBoxComponent,
      MainComponent,
      PasivoComponent,
      ReactivoComponent,
      SearchUserComponent,
      GitHubCardComponent,
      AboutComponent,
      ContactComponent,
      registroBoxComponent,
      registroComponent,
      loginComponent ],
      imports: [MATERIAL_COMPONENTS,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [APP_PROVIDERS, {provide: APP_BASE_HREF,useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loginBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.user="uriel27";
    component.pass="123";
    //navigatespy
    const navigate = spyOn(component._router, 'navigate');
    component.acceder();
    expect(navigate).toHaveBeenCalledWith(['']);
  });
  it('should login whit alert error', ()=>{
    component.user="xxxxx";
    component.pass="xxxxx";
    var alert = spyOn(window, 'alert');
    component.acceder();
    expect(alert).toHaveBeenCalledWith('Usuario o contraseña incorrecta');
  });
  it('should login in the view', ()=>{
    component.user="uriel27";
    component.pass="123";
    const compiled = fixture.nativeElement;
    const navigate = spyOn(component._router, 'navigate');
    compiled.querySelector('button').click();
    expect(navigate).toHaveBeenCalledWith(['']);
  });
  it('should login in the view whit alert error user and pass', ()=>{
    component.user='xxxxx';
    component.pass='xxxxx';
    const compiled = fixture.nativeElement;
    var alert = spyOn(window, 'alert');
    compiled.querySelector('button').click();
    expect(window.alert).toHaveBeenCalledWith('Usuario o contraseña incorrecta');
  });
  it('should login in the view whit alert error user', ()=>{
    const compiled = fixture.nativeElement;
    var alert = spyOn(window, 'alert');
    compiled.querySelector('button').click();
    expect(alert).toHaveBeenCalledWith('Ingresa Usuario');
    component.user='';
    compiled.querySelector('button').click();
    expect(window.alert).toHaveBeenCalledWith('Ingresa Usuario');
  });
  it('should login in the view whit alert error password', ()=>{
    component.user='xxxxx';
    const compiled = fixture.nativeElement;
    var alert = spyOn(window, 'alert'); 
    compiled.querySelector('button').click();
    expect(alert).toHaveBeenCalledWith('Ingresa Contraseña');
    component.pass='';
    compiled.querySelector('button').click();
    expect(window.alert).toHaveBeenCalledWith('Ingresa Contraseña');
  });
}); 