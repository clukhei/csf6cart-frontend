import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  @Input() data: CartItem[] = []
  @Output() clickedItem = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  sendId(id: string) {
    console.log(id)
    this.clickedItem.emit(id)

  }



}
