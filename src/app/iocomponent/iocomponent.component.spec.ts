import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IocomponentComponent } from './iocomponent.component';

describe('IocomponentComponent', () => {
  let component: IocomponentComponent;
  let fixture: ComponentFixture<IocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
