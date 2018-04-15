import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:"userlist" ,
 segment: 'userlist/:id'
})
@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
})
export class UserlistPage {
public photos =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserlistPage');

    this.photos = [];
    for (var i = 0; i < 10; i++) {
      this.photos.push('http://lorempixel.com/250/250?q='+(i%17));
    }
console.log(this.photos)
  }

}
