import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubCardComponent } from './git-hub-card.component';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubModel } from "../model/git-hub-model";
describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData: GitHubModel;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponent ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData = new GitHubModel();
    gitHubData.avatar_url="";
    gitHubData.followers=0;
    gitHubData.following=0;
    gitHubData.login="uriel270195";
    gitHubData.name="irvin uriel";
    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges(); //genera la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model', ()=>{
    component.gitHubData = gitHubData;//asigna los componentes
    fixture.detectChanges(); //genera la vista
    expect(component).toBeTruthy();
  });

  it('should validate model in the view', ()=>{
    component.gitHubData = gitHubData;//asigna los componentes
    const compiled = fixture.nativeElement;
    fixture.detectChanges(); //genera la vista... deve denerar para hacer lo que sigue
    expect(compiled.querySelector('.data-container #name').textContent).toContain(`Nombre: ${gitHubData.name}`)
  });
});
