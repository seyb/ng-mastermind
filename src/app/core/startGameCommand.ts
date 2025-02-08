import {v7 as uuid} from "uuid";
import {Code, makeCode} from "./code";
import {Game, GameId, makeGame} from "./game";

type GameEvent<GameEventType, Payload> = {
  type: GameEventType;
  payload: Payload;
}
export type GameStartedEvent = GameEvent<'gameStarted', Game>;

export function startGameCommand(id?: GameId): GameStartedEvent {
  const gameId: GameId = id ?? uuid();
  const code: Code = makeCode();
  return {
    type: 'gameStarted',
    payload: makeGame(gameId, code)
  }
}
