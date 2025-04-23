import { ColorModel, randomColor } from './color.model';

type Position = number;
export type CodeModel = Map<Position, ColorModel>;

export function makeCode(): CodeModel {
  const code: CodeModel = new Map();
  const codeSize = 4;
  for (let i = 0; i < codeSize; i++) {
    code.set(i, randomColor());
  }
  return code;
}
