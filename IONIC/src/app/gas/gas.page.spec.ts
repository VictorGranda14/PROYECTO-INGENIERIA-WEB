import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasPage } from './gas.page';

describe('GasPage', () => {
  let component: GasPage;
  let fixture: ComponentFixture<GasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
