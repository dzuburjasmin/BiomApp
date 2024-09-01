import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { SwiperModule } from 'swiper/angular';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { SixthSectionComponent } from './sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './seventh-section/seventh-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    SixthSectionComponent,
    SeventhSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
