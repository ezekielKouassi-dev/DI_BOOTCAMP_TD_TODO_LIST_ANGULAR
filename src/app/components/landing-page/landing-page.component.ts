import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  imagePath : string = "assets/to-do-list-apps.png";
  width : number = 500;
  height : number = 500;
}
