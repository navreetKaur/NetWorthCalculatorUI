import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthShowComponent } from './networth-show.component';

describe('NetworthShowComponent', () => {
  let component: NetworthShowComponent;
  let fixture: ComponentFixture<NetworthShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworthShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworthShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
