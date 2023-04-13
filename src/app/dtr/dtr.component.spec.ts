import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTRComponent } from './dtr.component';

describe('DTRComponent', () => {
  let component: DTRComponent;
  let fixture: ComponentFixture<DTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
