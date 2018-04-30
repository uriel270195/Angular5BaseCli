import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from "../app.providers";
import { registroBoxComponent } from './registro-box.component';
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
import { registroComponent } from '../registro/reistro.component';
import { loginBoxComponent } from '../login-box/login-box.component';
describe('registroBoxComponent', () => {//encapsulado para pruebas unitarias
  let component: registroBoxComponent;//declaracion de variables
  let fixture: ComponentFixture<registroBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({//configura el modulo de testing
      declarations: [ registroBoxComponent,
      MainComponent,
      PasivoComponent,
      ReactivoComponent,
      SearchUserComponent,
      registroComponent,
      loginBoxComponent,
      GitHubCardComponent,
      AboutComponent,
      ContactComponent,
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
    fixture = TestBed.createComponent(registroBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate', ()=>{
      component.nombre="irvin uriel aguilar cosme";
      component.user="uriel27";
      component.confpass="M2m";
      component.pass="M2m";
      component.correo="irvin27@axity.com";
      component.terminos_codiciones=true;
      var alert = spyOn(window, 'alert');
      component.acceder();
      expect(alert).toHaveBeenCalledWith('Ok');
  });
  it('should validate error nombre', ()=>{
    component.nombre="irvin27";
    component.user="uri";
    component.confpass="123";
    component.pass="123";
    component.correo="irvin.aguilar.com";
    component.terminos_codiciones=false;
    var alert = spyOn(window, 'alert');
    component.acceder();
    expect(alert).toHaveBeenCalledWith('Error Nombre');
  });
  it('should validate error submit terminos y condiciones', ()=>{
    component.nombre="irvin uriel aguilar cosme";
    component.user="uriel27";
    component.confpass="M2m";
    component.pass="M2m";
    component.correo="aguilar@axity.com";
    component.terminos_codiciones=false;
    var alert = spyOn(window, 'alert');
    component.acceder();
    expect(alert).toHaveBeenCalledWith('Error Terminos y Condiciones');
});
it('should validate error in the view terminos y condiciones', ()=>{
  component.nombre="irvin uriel aguilar cosme";
  component.user="uriel27";
  component.confpass="M2m";
  component.pass="M2m";
  component.correo="irvinaguilar@axity.com";
  component.terminos_codiciones=false;
  const compiled = fixture.nativeElement;
  var alert = spyOn(window, 'alert'); 
  compiled.querySelector('button').click();
  expect(alert).toHaveBeenCalledWith('Error Terminos y Condiciones');
});
  it('should validate in the view', ()=>{
    component.nombre="irvin uriel aguilar cosme";
    component.user="uriel27";
    component.confpass="M2m";
    component.pass="M2m";
    component.correo="aguilar@axity.com";
    component.terminos_codiciones=true;
    const compiled = fixture.nativeElement;
    var alert = spyOn(window, 'alert'); 
    compiled.querySelector('button').click();
    expect(alert).toHaveBeenCalledWith('Ok');
  });
  it('should validate Error Nombre in the view', ()=>{
    component.nombre="irvin27";
    component.user="uri";
    component.confpass="123";
    component.pass="123";
    component.correo="irvin.aguilar.com";
    component.terminos_codiciones=false;
    const compiled = fixture.nativeElement;
    var alert = spyOn(window, 'alert'); 
    compiled.querySelector('button').click();
    expect(alert).toHaveBeenCalledWith('Error Nombre');
  });
}); 
//80
