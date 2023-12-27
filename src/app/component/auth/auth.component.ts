import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',

})
export class AuthComponent {
  errorMessage: string = '';
  pinnumber: number = 0;
  constructor(private router: Router, private userservice:UserService,private storageservice:StorageService) {}
  submit() {
    console.log(this.pinnumber);
    this.userservice.login(this.pinnumber).subscribe({
      next: (response: any) => {
        if(response.userId !==0){
          console.log(response),
          this.storageservice.setAccount(response)
            this.router.navigate(['/account'], { replaceUrl: true });

        }else{
          this.errorMessage="Invalid pin number"
        }

      },
      error: (error: any) => {
        console.log(error);
        if (error.status === 404) {
          this.errorMessage = 'pin number not found.Please try again';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      },
    });
  }

}
