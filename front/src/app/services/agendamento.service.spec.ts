import { TestBed, inject } from '@angular/core/testing';

import { AgendamentoService } from './agendamento.service';

describe('AgendamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendamentoService]
    });
  });

  it('should be created', inject([AgendamentoService], (service: AgendamentoService) => {
    expect(service).toBeTruthy();
  }));
});
