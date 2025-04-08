import { Injectable } from '@angular/core';
import { IPerson } from '../models/iperson';

const KEY : string = 'guests';

@Injectable({
  providedIn: 'root'
})
export class GuestsSessionService {

  private guests : IPerson[]
  constructor() { 
    this.guests = this.getGests();
  }

  public getGests() : IPerson[]{
    return JSON.parse(sessionStorage.getItem(KEY) ?? '[]') as IPerson[]; 
  }

  public addGuest(newGuest : IPerson) : void{
    this.guests = this.getGests();
    if(this.guests.indexOf(newGuest) > -1) throw new Error('Guest déjà présent.')
    this.guests.push(newGuest);
    sessionStorage.setItem(KEY, JSON.stringify(this.guests));
  }

}
