import {Code} from './code';

export type GameId = string;

export type Game = {
  id: GameId;
  code: Code;
}

export function makeGame(id: GameId, code: Code): Game {
  return {id, code}
}
