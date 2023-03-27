import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductSpecsComponent } from './components/product-specs.component';
import { ProductInfoComponent } from './components/product-info.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductSpecsComponent,
    ProductInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
