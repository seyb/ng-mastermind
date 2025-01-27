import {v7 as uuid} from "uuid";

type UUID = string;
type Color = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'white';
type Position = number;
type Code = Map<Position, Color>;

export type Game = {
  id: UUID;
  code: Code;
}

export type GameStartedEvent = {
  type: 'gameStarted';
  game: Game;
}

function randomColor(): Color {
  const colors: Color[] = ['red', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
  const min = 0
  const max = colors.length - 1;
  return colors[Math.floor(Math.random() * (max - min + 1)) + min];
}

function makeCode(): Code {
  const code: Code = new Map();
  const codeSize = 4;
  for (let i = 0; i < codeSize; i++) {
    code.set(i, randomColor());
  }
  return code;
}

function makeGame(id: UUID, code: Code): Game {
  return {id, code}
}

export function startGameCommand(id?: UUID): GameStartedEvent {
  const gameId: UUID = id ?? uuid();
  const code: Code = makeCode();
  return {
    type: 'gameStarted',
    game: makeGame(gameId, code)
  }
}
