import {Color, randomColor} from "./color";

type Position = number;
export type Code = Map<Position, Color>;

export function makeCode(): Code {
  const code: Code = new Map();
  const codeSize = 4;
  for (let i = 0; i < codeSize; i++) {
    code.set(i, randomColor());
  }
  return code;
}
