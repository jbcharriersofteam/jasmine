import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jasmine';

  add(a: number, b: number) {
    return a + b;
  }

  fetchUserData(userId: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: userId,
          name: 'John Doe',
          email: 'john.doe@example.com',
        });
      }, 1000);
    });
  }
}
