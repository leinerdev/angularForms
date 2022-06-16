import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nameValid(): boolean {
    return (
      this.myForm.controls['producto'].invalid &&
      this.myForm.controls['producto'].touched
    );
  }

  save() {
    console.log(this.myForm);
  }

}
