import {
  LoadRemoteModuleOptions,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Wallet } from './wallet.model';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  shellWallet: Wallet = {
    currency: 'eur',
    amount: 10,
  };

  @ViewChild('microfrontend', { read: ViewContainerRef, static: true })
  _mfe1ViewContainerRef;

  ngAfterViewInit(): void {
    this.loadMfe1Async();
  }

  private async loadMfe1Async(): Promise<void> {
    if (!this._mfe1ViewContainerRef) {
      return;
    }

    this._mfe1ViewContainerRef.clear();

    const loadRemoteWebpackModuleOptions: LoadRemoteModuleOptions = {
      type: 'module',
      exposedModule: './Module',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
    };

    const webpackModule: any = await loadRemoteModule(
      loadRemoteWebpackModuleOptions
    );

    this._mfe1ViewContainerRef.createComponent(webpackModule.AppComponent);
  }
}
