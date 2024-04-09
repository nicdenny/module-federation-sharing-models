import { Component } from '@angular/core';
import { Wallet } from 'projects/shell/src';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  mfeWallet: Wallet = {
    currency: 'dol',
    amount: 42,
  };
}
