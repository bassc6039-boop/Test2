
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface User {
  name: string;
  status: string;
  avatarUrl: string;
  phone: string;
  about: string;
  username: string;
  birthday: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  user = signal<User>({
    name: 'Бабуин',
    status: 'был(а) недавно',
    avatarUrl: 'https://i.imgur.com/k2P0Q2L.png', // Using the original image as requested
    phone: '+7 999 603 3644',
    about: 'Я не умру. Меня кошка дома ждёт.',
    username: '@Blublix',
    birthday: '19 март 2007',
    age: 18,
  });
}
