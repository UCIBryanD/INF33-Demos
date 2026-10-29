import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Week } from './week/week';
import { Dice } from './dice/dice';

@Component({
  imports: [FormsModule, RouterOutlet, Week, Dice],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  title = "INF 133";
  tomatoCatUrl = "tomatoCat.png";
  enteredText = "placeholder";

  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  clickExample () {
    console.log("clicked button!");
  }

  textChanged () {
    console.log("you wrote: " + this.enteredText);
  }

  isHalloween () {
    const today = new Date();
    //console.log(today.getDate());
    if(today.getMonth() == 9 && today.getDate() == 31)
    {
      return true;
    }
    return false;
  }

  dayOfWeek():string {
    const day = new Date().getDay();
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
  }
}
