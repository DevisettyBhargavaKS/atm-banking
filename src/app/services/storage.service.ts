import { Injectable } from '@angular/core';
import { Acdetail } from '../model/acdetail';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  setAccount(account:Acdetail):void {
    localStorage.setItem('accountUser', JSON.stringify(account));
  }
  getAccount():Acdetail{
    return JSON.parse(localStorage.getItem('accountUser') || '{}');
  }

  
}
