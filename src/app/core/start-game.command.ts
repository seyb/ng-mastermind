import { v7 as uuid } from 'uuid';
import { CodeModel, makeCode } from './code.model';
import { GameModel, GameId, makeGame } from './game.model';

interface GameEvent<GameEventType, Payload> {
  type: GameEventType;
  payload: Payload;
}
export type GameStartedEvent = GameEvent<'gameStarted', GameModel>;

export function startGameCommand(id?: GameId): GameStartedEvent {
  const gameId: GameId = id ?? uuid();
  const code: CodeModel = makeCode();
  return {
    type: 'gameStarted',
    payload: makeGame(gameId, code),
  };
}
