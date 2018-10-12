import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraTurmaPage } from './altera-turma.page';

describe('AlteraTurmaPage', () => {
  let component: AlteraTurmaPage;
  let fixture: ComponentFixture<AlteraTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
