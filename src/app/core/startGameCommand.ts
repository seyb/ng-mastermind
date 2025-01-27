import {v7 as uuid} from "uuid";
import {Code, makeCode} from "./code";
import {Game, GameId, makeGame} from "./game";

export type GameStartedEvent = {
  type: 'gameStarted';
  game: Game;
}

export function startGameCommand(id?: GameId): GameStartedEvent {
  const gameId: GameId = id ?? uuid();
  const code: Code = makeCode();
  return {
    type: 'gameStarted',
    game: makeGame(gameId, code)
  }
}
