import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGithubComponent } from './social-github.component';

describe('GithubComponent', () => {
  let component: SocialGithubComponent;
  let fixture: ComponentFixture<SocialGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialGithubComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
