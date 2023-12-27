import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acdetail } from 'src/app/model/acdetail';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
})
export class DebitComponent implements OnInit {
  Accountdetail: Acdetail = {
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
    const accountId = this.storageservice.getAccount().userId;
    if (accountId !== undefined && accountId !== null) {
      this.userservice.getAccountDetails(accountId).subscribe({
        next: (response: any) => {
          console.log('account', response);
          this.Accountdetail = response;
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    } else {
      console.error('Account ID is undefined');
    }
  }

  debit() {
    this.userservice
      .debit(this.amount, this.storageservice.getAccount().userId, 2)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.ngOnInit();
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('completed'),
      });
    this.amount = 0;
  }
  TransactionHistory() {
    this.router.navigate(['/transcation']);
  }
}
