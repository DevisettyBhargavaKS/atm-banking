import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acdetail } from '../model/acdetail';
import { Transcation } from '../model/transcation';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 
  constructor(private http: HttpClient) {}

  login(pinnumber: number): Observable<Acdetail[]> {
    const number = {
      pinnumber: pinnumber,
    };
    return this.http.post<Acdetail[]>(
      `http://localhost:8080/api/login`,
      number
    );
  }

  getAccountDetails(acId: number): Observable<Acdetail> {
    return this.http.get<Acdetail>(
      `http://localhost:8080/api/account/${acId}`
    );
  }
  credit(
    amount: number,
    userId: number,
    type: number
  ): Observable<Transcation[]> {
    const creditdetails = {
      amount: amount,
      transactionalType: type,
      userId: userId,
    };

    return this.http.put<Transcation[]>(
      `http://localhost:8080/api/transaction/credit`,
      creditdetails
    );
  }
  debit(amount: number,
    userId: number,
    type: number):Observable<Transcation[]> {
      const debitDetails = {
        amount: amount,
        transactionalType: type,
        userId: userId,
      };
      return this.http.put<Transcation[]>(
        `http://localhost:8080/api/transaction/debit`,
        debitDetails
      );
  }
  Transcationhistory(id: number) :Observable<Transcation[]>{
   return this.http.get<Transcation[]>(`http://localhost:8080/api/transaction/${id}`
   );
  }

}
