import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponetNavbarComponent } from './componet-navbar/componet-navbar.component';
import { ComponetFooterComponent } from './componet-footer/componet-footer.component';
import { ComponetHeaderComponent } from './componet-header/componet-header.component';
import { ComponetAboutUsComponent } from './componet-about-us/componet-about-us.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponetNavbarComponent,
    ComponetFooterComponent,
    ComponetHeaderComponent,
    ComponetAboutUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
