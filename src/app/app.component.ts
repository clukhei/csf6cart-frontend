import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CartItem } from './models'
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //fb is a service, service pass to component through dependency injection
  //FormBuilder is a class name 
  //private makes it into an attribute , only can be available within this class , instead of initialist your own attribute 
  //public makes it into an attribute accessible in other classes
  //without private/public, its just a parameter of constructor and cannot be use else where 
  constructor(private http: HttpClient, private cartService: CartService) { }

  //try not to do anything on constructor

  contents: CartItem[] = []
  oneEntry: CartItem


  async ngOnInit() {
    //get<CartItem[]> means the return value will be typeof CartItem[]
    //http.get() returns an observable. need to convert observable to promise
    /*    this.contents = await this.http.get<CartItem[]>(`http://localhost:3000/cart`)
         .toPromise() */

    this.contents = await this.cartService.getCart()

    console.log(this.contents)

  }
  async itemSelected(selectedId: string) {
    /*  this.oneEntry = await this.http.get<CartItem>(`http://localhost:3000/cart/${selectedId}`)
       .toPromise()
  */

    this.oneEntry = await this.cartService.getItem(selectedId)
    console.log(this.oneEntry)
  }

  async updateItem(cart: CartItem) {
    //PUT /cart/:id
    console.log(cart)
    /*     await this.http.put<any>(`http://localhost:3000/cart/${cart.id}`, cart )
          .toPromise()
    
           this.contents = await this.http.get<CartItem[]>('http://localhost:3000/cart')
            .toPromise()
     */

    await this.cartService.updateItem(cart.id, cart)
    this.contents = await this.cartService.getCart()
    console.log(this.contents)
  }
  responseMsg = {}

  async deleteItem(id: string) {
    this.responseMsg = await this.cartService.deleteItem(id)
    this.contents = await this.cartService.getCart()
  }

  async addItem(item: CartItem){
    this.responseMsg = await this.cartService.addItem(item)
    this.contents = await this.cartService.getCart()
    
  }

}
