import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingComponent } from './updating.component';

describe('UpdatingComponent', () => {
  let component: UpdatingComponent;
  let fixture: ComponentFixture<UpdatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatingComponent]
    });
    fixture = TestBed.createComponent(UpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
