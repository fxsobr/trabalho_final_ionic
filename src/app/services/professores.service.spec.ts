import { TestBed, inject } from '@angular/core/testing';

import { ProfessoresService } from './professores.service';

describe('ProfessoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessoresService]
    });
  });

  it('should be created', inject([ProfessoresService], (service: ProfessoresService) => {
    expect(service).toBeTruthy();
  }));
});
