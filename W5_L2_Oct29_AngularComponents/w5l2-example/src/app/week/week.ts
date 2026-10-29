import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week',
  styleUrl: '../app.css',
  templateUrl: './week.html',
})

export class Week {
    @Input() today:string = "";
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}