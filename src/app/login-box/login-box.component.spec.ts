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
    expect(navigate).toHaveBeenCalledWith([''])
  });
}); 