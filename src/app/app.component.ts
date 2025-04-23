import { Component } from '@angular/core';
import { StartGameComponent } from './mastermind/start-game/start-game.component';

@Component({
  selector: 'app-root',
  imports: [StartGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-mastermind';
}
