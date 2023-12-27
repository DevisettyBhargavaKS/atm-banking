import { Component, OnInit } from '@angular/core';
import { Transcation } from 'src/app/model/transcation';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
 
})
export class TranscationsComponent implements OnInit {
  AllTranscations:Transcation[]=[];
  constructor(
    private userservice:UserService,
    private storageservice:StorageService
  ){}
  ngOnInit(): void {
    this.userservice.Transcationhistory(this.storageservice.getAccount().userId).subscribe({
      next:(responce:any)=>{
        this.AllTranscations=responce

      },
    });
  }

}
