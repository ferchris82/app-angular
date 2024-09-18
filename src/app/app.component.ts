import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo angular desde componente!';

  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('hemos hecho clic en setVisible');
  }
}

