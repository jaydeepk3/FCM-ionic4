import { Component } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public platform: Platform, private fcm: FCM) {

    this.platform.ready().then(() => {
      this.fcm.subscribeToTopic('marketing');

      this.fcm.getToken().then(token => {
        // backend.registerToken(token);
        console.log(token);

      });
    })


  }

}
