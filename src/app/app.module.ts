import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductOneComponent } from './products/product-one/product-one.component';
import { ProductTwoComponent } from './products/product-two/product-two.component';
import { TestReportsProductOneComponent } from './products/product-one/test-reports-product-one/test-reports-product-one.component';
import { ProductOneFeaturesComponent } from './products/product-one/test-reports-product-one/product-one-features/product-one-features.component';
import { TestReportsProductTwoComponent } from './products/product-two/test-reports-product-two/test-reports-product-two.component';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AngularFooterComponent } from './angular-footer/angular-footer.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ProductsComponent,
    ClientsComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent,
    ProductOneComponent,
    ProductTwoComponent,
    TestReportsProductOneComponent,
    ProductOneFeaturesComponent,
    TestReportsProductTwoComponent,
    AngularFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    IgxCarouselModule,
    IgxSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
