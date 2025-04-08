import { Injectable } from '@angular/core';
import { IPerson } from '../models/iperson';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public setItem(key : string, value : any) : void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key : string) : any {
    return JSON.parse(sessionStorage.getItem(key) ?? 'null');
  }
}
