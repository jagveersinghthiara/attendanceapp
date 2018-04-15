import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"checkout" ,
  segment: 'checkout/:id'
})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  public alertShown:boolean = false;
  public datetime: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   
       public alertCtrl: AlertController,
       public platform: Platform, statusBar: StatusBar,) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CheckoutPage');
  // }
checkin(){
  this.navCtrl.push('checkin');
  // this.navCtrl.push('checkin', {
  //   'id': checkin.id
  // })
  
}
  
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Exit',
    message: 'Do you want Exit?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.alertShown=false;
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Yes clicked');
          this.platform.exitApp();
        }
      }
    ]
  });
   alert.present().then(()=>{
    this.alertShown=true;
  });
}
ionViewDidLoad(){
  let timezoneOffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  this.datetime = (new Date(Date.now() - timezoneOffset)).toISOString().slice(0,-1);

 
}
}
