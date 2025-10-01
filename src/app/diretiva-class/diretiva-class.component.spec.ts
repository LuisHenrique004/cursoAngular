import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaClassComponent } from './diretiva-class.component';

describe('DiretivaClassComponent', () => {
  let component: DiretivaClassComponent;
  let fixture: ComponentFixture<DiretivaClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaClassComponent]
    });
    fixture = TestBed.createComponent(DiretivaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
