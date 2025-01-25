import { TestBed } from '@angular/core/testing';

import { MastermindGameService } from './mastermind-game.service';

describe('MastermindGameService', () => {
  let service: MastermindGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastermindGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('starts a new game', () => {
    expect(service.startGame()).toBeTruthy();
  });
});
