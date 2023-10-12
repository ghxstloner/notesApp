import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Asegúrate de importar AppComponent
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent], // Añade AppComponent a las declaraciones
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], // Añade AppComponent al bootstrap
})
export class AppModule {}
