import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCredlyComponent } from './social-credly.component';

describe('SocialCredlyComponent', () => {
  let component: SocialCredlyComponent;
  let fixture: ComponentFixture<SocialCredlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCredlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCredlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
