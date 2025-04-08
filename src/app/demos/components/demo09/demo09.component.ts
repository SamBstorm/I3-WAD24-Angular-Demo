import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from '../../models/iperson';
import { SessionService } from '../../services/session.service';
import { GuestsSessionService } from '../../services/guests-session.service';

@Component({
  selector: 'app-demo09',
  standalone: false,
  templateUrl: './demo09.component.html',
  styleUrl: './demo09.component.css'
})
export class Demo09Component {

  public guests : IPerson[];

  public myForm : FormGroup;

  constructor(private _fb : FormBuilder, private _guestsSession : GuestsSessionService){
    this.guests = this._guestsSession.getGests();
    this.myForm = this.initFormGuest();
  }

  public onSubmit(){
    if(!this.myForm.valid){
      throw new Error('Formulaire invalide')
    }
    this._guestsSession.addGuest(this.convertToIPerson(this.myForm));
    this.guests = this._guestsSession.getGests();
    this.myForm = this.initFormGuest();
  }

  private initFormGuest() : FormGroup{
    return this._fb.group({
      guestFirstName : [null, Validators.required],
      guestLastName : [null, Validators.required],
    });
  }

  private convertToIPerson(form : FormGroup) : IPerson{
    return {
      firstName : form.value.guestFirstName,
      lastName : form.value.guestLastName
    }
  }
}
