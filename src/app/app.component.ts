import { Component } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService],
})
export class AppComponent {
  title = 'app';
}
