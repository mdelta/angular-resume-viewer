import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialXingComponent } from './social-xing.component';

describe('SocialXingComponent', () => {
  let component: SocialXingComponent;
  let fixture: ComponentFixture<SocialXingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialXingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialXingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
