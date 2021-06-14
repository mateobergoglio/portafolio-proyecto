import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title = "Mateo Beroglio";
    this.subtitle = "FullStack Developer",
    this.email = "mateobergoglio6@gmail.com";
  }

  ngOnInit(): void {
  }

}
