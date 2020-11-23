import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../models';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit, OnChanges {

  @Input() data: CartItem
  @Output() onUpdate = new EventEmitter<CartItem>()
  @Output() onDelete = new EventEmitter<string>()
  @Output() onAdd = new EventEmitter<CartItem>()
  form: FormGroup = this.createForm()

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    /*   this.form= this.fb.group({
        item: this.fb.control(""),
        quantity: this.fb.control("")
   
      }) */
    console.log(this.form)
  }

  createForm(item: CartItem = null): FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [Validators.required]), // ? is for --> if item is null, leave blank
      item: this.fb.control(item?.item, [Validators.required, Validators.minLength(3)]),
      quantity: this.fb.control(item?.quantity, [Validators.required, Validators.min(1), Validators.max(100)])
      
    })

  }


  ngOnChanges() {
    //creates a new instance of the form every time the data changes
    this.form = this.createForm(this.data)


    /*     this.form.get('item').setValue(this.data.item)
        this.form.get('quantity').setValue(this.data.quantity) */
  }

  updateItem() {
    //can directly take the form value without patching values, as values are updated onchange
    //as is a cast or coercion, it makes this.form.value into CartItem

    const updatedItem: CartItem = this.form.value as CartItem
    this.onUpdate.emit(updatedItem)
    /*    this.form.get('item').patchValue(this.form.get('item').value)
       this.form.get('quantity').patchValue(this.form.get('quantity').value)
       console.log('updated')
       console.log(this.form.value) */
    this.form.reset()
  }


  reset() {
    this.form.reset()
  }

  deleteItem() {
    const id = this.form.get('id').value
    this.onDelete.emit(id)
    this.form.reset()
  }
  addItem() {
    const item = this.form.value
    this.onAdd.emit(item)
    this.form.reset()
  }

}
