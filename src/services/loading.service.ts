import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  constructor(public loadingController: LoadingController) {}

  loading: any;
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor, aguarde..',
    });
    await this.loading.present();

  }

  async dismiss() {
      await this.loading.dismiss();
  }

}
