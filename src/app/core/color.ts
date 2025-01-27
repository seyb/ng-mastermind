export type Color = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'white';

export function randomColor(): Color {
  const colors: Color[] = ['red', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
  const min = 0
  const max = colors.length - 1;
  return colors[Math.floor(Math.random() * (max - min + 1)) + min];
}
