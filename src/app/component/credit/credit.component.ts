import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Acdetail } from 'src/app/model/acdetail';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
})
export class CreditComponent implements OnInit {
  AccountDetails: Acdetail = {
    name: '',
    userId: 0,
    balance: 0,
  };
  amount: number = 0;
  constructor(
    private userservice: UserService,
    private storageservice: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const acId = this.storageservice.getAccount().userId;
    if (acId !== undefined && acId !== null) {
      this.userservice.getAccountDetails(acId).subscribe({
        next: (response: any) => {
          console.log('account', response);
          this.AccountDetails = response;
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    } else {
      console.error('Account ID is undefined');
    }
  }

  credit() {
    this.userservice
      .credit(this.amount, this.storageservice.getAccount().userId, 1)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          // Refresh data after successful credit operation
          this.userservice.getAccountDetails(this.storageservice.getAccount().userId).subscribe({
            next: (accountResponse: any) => {
              console.log('account', accountResponse);
              this.AccountDetails = accountResponse;
            },
            error: (err) => console.log('error', err),
            complete: () => console.log('completed'),
          });
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
  
    // Reset the amount after the credit operation
    this.amount = 0;
  }
  
  TransactionHistory() {
    this.router.navigate(['/transcation']);
  }
}
