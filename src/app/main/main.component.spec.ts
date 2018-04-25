import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { SearchUserComponent } from '../search-user/search-user.component';
import { MainComponent } from './main.component';
//import { MatIconModule, } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from "../app.providers";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitHubService } from '../services/git-hub.service';
import { GitHubServiceMock } from '../../mock-services/git-hub.service.mock';
describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
        GitHubCardComponent,
       SearchUserComponent],
      //providers: [APP_PROVIDERS],
      providers: [{
        provide: GitHubService,
        useClass: GitHubServiceMock
      }],//mock
      imports: [HttpClientModule,
        FormsModule,
        MATERIAL_COMPONENTS,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add three elements to card array',()=>{
    expect(component.gitHubDataList.length).toEqual(0);
    component.onSearchUser('uriel270195');
    component.onSearchUser('uriel270195');
    component.onSearchUser('uriel270195');
    expect(component.gitHubDataList.length).toEqual(3);
  });
});
