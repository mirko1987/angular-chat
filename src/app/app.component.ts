import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config={
  apiKey:'AIzaSyDx5kKVkjmTmoA3erqQS7gvCxKqK0GWDSc',
  databaseURL:'https://chatapper-45a74.firebaseio.com'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor(){
    firebase.initializeApp(config);
  }
}
