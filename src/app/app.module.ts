import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { DividirComponent } from './components/dividir/dividir.component';
import { MultiplicarComponent } from './components/multiplicar/multiplicar.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaComponent } from './components/resta/resta.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    DividirComponent,
    MultiplicarComponent,
    CuadradoComponent,
    MenuComponent,
    RestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
