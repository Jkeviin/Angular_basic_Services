import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumarComponent } from './components/sumar/sumar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaComponent } from './components/resta/resta.component';
import { DividirComponent } from './components/dividir/dividir.component';
import { MultiplicarComponent } from './components/multiplicar/multiplicar.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'sumar', component: SumarComponent},
  { path: 'restar', component: RestaComponent},
  { path: 'dividir', component: DividirComponent},
  { path: 'multiplicar', component: MultiplicarComponent},
  { path: 'cuadrado', component: CuadradoComponent},
  { path: 'menu', component: MenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
