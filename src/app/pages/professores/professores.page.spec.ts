import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresPage } from './professores.page';

describe('ProfessoresPage', () => {
  let component: ProfessoresPage;
  let fixture: ComponentFixture<ProfessoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
