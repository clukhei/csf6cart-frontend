import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CartItem } from './models';


@Injectable()

export class CartService {

    constructor(private http: HttpClient) {

    }

    //returning a promise that returns a CartItem[]
    async getCart(): Promise<CartItem[]> {
        return await this.http.get<CartItem[]>(`http://localhost:3000/cart`)
            .toPromise()
    }

    async getItem(id: string): Promise<CartItem>{
        return await this.http.get<CartItem>(`http://localhost:3000/cart/${id}`)
        .toPromise()
    }

    async updateItem(id: string, item: CartItem) : Promise<any> {
        return  await this.http.put<any>(`http://localhost:3000/cart/${id}`, item )
        .toPromise()
    }

    async deleteItem(id: string): Promise<any> {
        return await this.http.delete<any>(`http://localhost:3000/cart/${id}`)
            .toPromise()
    }

    async addItem(item: CartItem): Promise<any>{
        return await this.http.post<any>('http://localhost:3000/cart/addItem', item)
            .toPromise()
    }

}