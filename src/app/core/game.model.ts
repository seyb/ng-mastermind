import {CodeModel} from './code.model';

export type GameId = string;

export type GameModel = {
  id: GameId;
  code: CodeModel;
}

export function makeGame(id: GameId, code: CodeModel): GameModel {
  return {id, code}
}
