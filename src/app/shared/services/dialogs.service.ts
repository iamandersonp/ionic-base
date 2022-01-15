import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  constructor(public toast: ToastController) {}

  /**
   * Display a toast with a given message
   *
   * @param string ms the messae to be displayed
   * @param Position [default bottom] the position of the Toast
   * @memberof DialogsService
   */
  async presentToast(
    ms: string,
    pos: 'bottom' | 'top' | 'middle' = 'bottom'
  ) {
    const toast = await this.toast.create({
      message: ms,
      position: pos,
      duration: 2000
    });
    toast.present();
  }
}
