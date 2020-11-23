import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemlistComponent } from './components/itemlist.component';
import { ItemdetailComponent } from './components/itemdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FlexLayoutModule } from '@angular/flex-layout';
import {CartService} from './cart.service'




@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
