import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkedinComponent } from './social-linkedin.component';

describe('SocialLinkedinComponent', () => {
  let component: SocialLinkedinComponent;
  let fixture: ComponentFixture<SocialLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinkedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
