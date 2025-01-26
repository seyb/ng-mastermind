import {startGame} from './game';

describe('MastermindGame', () => {
  it('should start a game', () => {
    expect(startGame().type).toBe('gameStarted');
  });
});
