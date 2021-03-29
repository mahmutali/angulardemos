import { Component } from '@angular/core';


//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  firstName = "Engin";

  clicked(){
    console.log("clicked button")
  }

}
