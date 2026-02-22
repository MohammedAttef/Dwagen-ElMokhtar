import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './presentation/shared/header/header';
import { Footer } from './presentation/shared/footer/footer';

declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  Router = inject(Router);
  protected readonly title = signal('dwagen-Elmokhtar');

  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    }
  }
}
