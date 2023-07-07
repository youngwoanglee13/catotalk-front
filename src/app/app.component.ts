import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  ngOnInit(): void {
    localStorage.setItem('urlback', 'http://localhost:3000');
  }
}
