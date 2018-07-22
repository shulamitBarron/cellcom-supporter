import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Platform, AlertController, ToastController } from 'ionic-angular';
import { SupportService } from "../../shared/supporter.service";
import { ILogin } from "../../models/login";
import { RestAPISocket } from "../../providers/restAPISocket.service"
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    user: ILogin = <ILogin>{};
    register: string = 'CreateSupportPage';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        private alertCtrl: AlertController,
        private toastController: ToastController,
        private supportService: SupportService,
        private restAPISocket: RestAPISocket
        ) {
    }

    login() {
        this.supportService.login(this.user.email, this.user.password)
            .subscribe((isLogin) => {
                if (isLogin) {
                    this.navCtrl.setRoot('HomeTabsPage');
                } else {
                    this.showPrompt(); 
                }
            }, () => {
                let toast = this.toastController.create({
                    message: 'Sorry, There is an error.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
       this.restAPISocket.connect();
    }

    showPrompt() {
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "The name or the password isn't vaild",
            buttons: [
                {
                    text: 'Create',
                    handler: data => this.navCtrl.push('CreateSupportPage')
                },
                {
                    text: 'Try Again',
                    handler: data => { }
                }
            ]
        });
        prompt.present();
    }
}

