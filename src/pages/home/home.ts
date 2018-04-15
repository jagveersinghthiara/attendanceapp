import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
// import {Observable} from 'Rxjs/rx';
// import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public datetime: string;
  loading: any;
  loginData = { username:'', password:'' };
  data: any;

  
  constructor(public navCtrl: NavController, 
    public authService: AuthService,
     public loadingCtrl: LoadingController, 
     private toastCtrl: ToastController,
     private camera: Camera) {

  }
  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      // this.navCtrl.setRoot(TabsPage);
      this.navCtrl.push('checkin');
      // this.navCtrl.push('checkin', {
      //   'id': checkin.id
      // })
      
      console.log("login")
    }, (err) => {
      this.navCtrl.push('checkin');//disable  redirect while using api failuer  
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  // register() {
  //   this.navCtrl.push(RegisterPage);
  // }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  takePicture(){

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
  //      targetWidth: 1000,
  //      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });


}




ionViewDidLoad(){
  let timezoneOffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  this.datetime = (new Date(Date.now() - timezoneOffset)).toISOString().slice(0,-1);

 
}

}
