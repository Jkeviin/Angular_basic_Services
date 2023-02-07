import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AritmeticaService } from 'src/app/services/aritmetica.service';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent {

  form: FormGroup;
  cuadrado: any;
  constructor(
    private fb: FormBuilder,
    private aritmetica: AritmeticaService
  )
  {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      n1: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.form.valid) {
      this.cuadrado = this.aritmetica.cuadrado(parseInt(this.form.value.n1));
    }else{
      console.log("Verifique sus datos");
    }
  }

}
