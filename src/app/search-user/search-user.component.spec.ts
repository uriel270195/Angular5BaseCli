import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserComponent } from './search-user.component';
import { APP_PROVIDERS } from '../app.providers';
import { FormsModule } from '@angular/forms';//ng model
import { HttpClientModule } from '@angular/common/http';
describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers: [APP_PROVIDERS],
      imports: [FormsModule,
      HttpClientModule
  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //genera la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick', ()=>{
    component.userName = 'uriel270195';
    component.onSearchUser.subscribe(x =>{
      expect(x).toEqual('uriel270195');
    });
    component.onSearchClick();
  });

  it('should call onSearchClick in view', ()=>{
    component.userName = 'uriel270195';
    component.onSearchUser.subscribe(x =>{
      expect(x).toEqual('uriel270195');
    });
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
  });
});