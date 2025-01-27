import {Code} from './code';

export type UUID = string;

export type Game = {
  id: UUID;
  code: Code;
}

export function makeGame(id: UUID, code: Code): Game {
  return {id, code}
}
