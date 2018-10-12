import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProfessorPage } from './criar-professor.page';

describe('CriarProfessorPage', () => {
  let component: CriarProfessorPage;
  let fixture: ComponentFixture<CriarProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
