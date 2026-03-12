import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeChild } from './pipe-child';

describe('PipeChild', () => {
  let component: PipeChild;
  let fixture: ComponentFixture<PipeChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeChild],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
