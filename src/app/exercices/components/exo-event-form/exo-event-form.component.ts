import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exo-event-form',
  standalone: false,
  templateUrl: './exo-event-form.component.html',
  styleUrl: './exo-event-form.component.css'
})
export class ExoEventFormComponent {

  public eventForm : FormGroup;

  constructor(private _formBuilder : FormBuilder){
    this.eventForm = this.resetEventForm();
  }

  private resetEventForm() : FormGroup{
    return this._formBuilder.group({
      eventName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      eventDesc : [null, [Validators.maxLength(512)]],
      eventDate : [formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required]],
      eventAllDay : [true, []],
      eventStartTime : [formatDate(new Date(), 'hh:mm', 'en'), []],
      eventEndTime : [formatDate(new Date().setHours(new Date().getHours()+1), 'hh:mm', 'en'), []],
    });
  }

  public onSubmit() : void{
    if(!this.eventForm.valid) {
      //this.eventForm = this.resetEventForm(); //Astuce de réinitialisation du formulaire
      throw new Error('Formulaire invalid');
    }
    console.log(JSON.stringify(this.eventForm.value));
  }
}
