import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeData } from './pipe-data';

describe('PipeData', () => {
  let component: PipeData;
  let fixture: ComponentFixture<PipeData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeData],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
