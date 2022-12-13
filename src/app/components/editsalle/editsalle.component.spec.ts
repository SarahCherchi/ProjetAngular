import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalleComponent } from './editsalle.component';

describe('EditsalleComponent', () => {
  let component: EditsalleComponent;
  let fixture: ComponentFixture<EditsalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
