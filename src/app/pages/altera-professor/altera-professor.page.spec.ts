import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraProfessorPage } from './altera-professor.page';

describe('AlteraProfessorPage', () => {
  let component: AlteraProfessorPage;
  let fixture: ComponentFixture<AlteraProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
