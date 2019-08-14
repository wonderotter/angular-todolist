import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Hee You"
  word:string = ""

  constructor(){
    this.word = "You can do this"
  }
}
