import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfrofileComponent } from './uploadfrofile.component';

describe('UploadfrofileComponent', () => {
  let component: UploadfrofileComponent;
  let fixture: ComponentFixture<UploadfrofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadfrofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadfrofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
