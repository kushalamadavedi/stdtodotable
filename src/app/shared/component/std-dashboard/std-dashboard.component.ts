import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from 'src/app/models/std';


@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class stdDashboardComponent implements OnInit {

  stdArr: Array<Istd> = [
    {
      fname: "Jhon",
      lname: "Lee",
      email: "jl@gmail.com",
      contact: 4352627282,
      stdId: "1",
    }
  ]

  @ViewChild('fname') fname !: ElementRef;
  @ViewChild('lname') lname !: ElementRef;
  @ViewChild('email') email !: ElementRef;
  @ViewChild('contact') contact !: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  generateUuid() {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    });

  }

  onStdAdd() {

    let stdObj: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      stdId: this.generateUuid()
    }
    this.fname.nativeElement.value = '',
      this.lname.nativeElement.value = '',
      this.email.nativeElement.value = '',
      this.contact.nativeElement.value = '',
      this.stdArr.push(stdObj)

  }

}
