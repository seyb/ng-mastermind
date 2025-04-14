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

  it('inits with a null game', () => {
    expect(service.game()).toBe(null);
  });
  it('starts a game', () => {
    service.start();
    expect(service.game()).toBeTruthy();
  });
});
