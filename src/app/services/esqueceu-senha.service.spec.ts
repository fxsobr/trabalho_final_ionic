import { TestBed, inject } from '@angular/core/testing';

import { EsqueceuSenhaService } from './esqueceu-senha.service';

describe('EsqueceuSenhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsqueceuSenhaService]
    });
  });

  it('should be created', inject([EsqueceuSenhaService], (service: EsqueceuSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
