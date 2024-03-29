import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialListComponent } from './social-list.component';

describe('SocialListComponent', () => {
  let component: SocialListComponent;
  let fixture: ComponentFixture<SocialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
