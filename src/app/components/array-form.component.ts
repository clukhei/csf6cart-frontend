import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  toBuyArray : FormArray /* = new FormArray([]) */
  toBuyForm : FormGroup /* = new FormGroup({
    toBuys:  this.toBuyArray
  }) */
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.toBuyArray = this.fb.array([])
    this.toBuyForm = this.fb.group({toBuys: this.toBuyArray})
  }

  addToBuy(){
    console.log('hellopp')
    const toBuyGroup = this.fb.group({
      item: this.fb.control(''),
      quantity: this.fb.control(''),
      brand: this.fb.control(''),
      bought: this.fb.control('')
    })
    this.toBuyArray.push(toBuyGroup)
  }


}
