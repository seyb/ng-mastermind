import { render, screen } from '@testing-library/angular';
import { StartGameComponent } from './start-game.component';
import { expect } from 'vitest';

describe('StartGameComponent', () => {
  it('should display', async () => {
    await render(StartGameComponent);
    expect(screen.getAllByRole('button', { name: /Démarrer/i })).toBeTruthy();
  });
});
