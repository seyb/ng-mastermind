export type ColorModel = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'white';

export function randomColor(): ColorModel {
  const colors: ColorModel[] = ['red', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
  const min = 0;
  const max = colors.length - 1;
  return colors[Math.floor(Math.random() * (max - min + 1)) + min];
}
