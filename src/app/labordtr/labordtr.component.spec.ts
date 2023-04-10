import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabordtrComponent } from './labordtr.component';

describe('LabordtrComponent', () => {
  let component: LabordtrComponent;
  let fixture: ComponentFixture<LabordtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabordtrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabordtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
