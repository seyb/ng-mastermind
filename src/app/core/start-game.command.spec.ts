import {startGameCommand} from './start-game.command';

describe('startGameCommand', () => {
  it('starts a game', () => {
    const gameEvent = startGameCommand('new-game-id');
    expect(gameEvent.type).toBe('gameStarted');
  });
  it('starts a new game with a given id', () => {
    const gameEvent = startGameCommand();
    expect(gameEvent.payload.id).toBeTruthy();
  });
  it('starts a new game with a new id', () => {
    const gameEvent = startGameCommand();
    expect(gameEvent.payload.id).toBeTruthy();
  });
  it('generates the code of four colors', () => {
    const gameEvent = startGameCommand();
    expect(gameEvent.payload.code.size).toBe(4);
  });
});
