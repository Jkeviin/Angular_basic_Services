import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AritmeticaService {

  constructor() { }

  sumar(a: number, b: number) {
    return a + b;
  }

  restar(a: number, b: number) {
    return a - b;
  }

  dividir(a: number, b: number) {
    if(b == 0) return "No se puede dividir por 0"
    return a / b;
  }

  multiplicar(a: number, b: number) {
    return a * b;
  }

  cuadrado (a: number) {
    return a * a;
  }
  
}
