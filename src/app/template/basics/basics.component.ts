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

  save(myForm: NgForm) {
    console.log(myForm);
  }

  nameValid (): boolean {
    return (
      this.myForm?.controls['producto']?.touched &&
      this.myForm?.controls['producto']?.invalid
    )? false : true;
  }

  priceValid (): boolean {
    return (
      this.myForm?.controls['precio']?.touched &&
      this.myForm?.controls['precio']?.value <= 0
    )? false : true;
  }

}
