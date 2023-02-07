import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AritmeticaService } from 'src/app/services/aritmetica.service';
@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent {

  form: FormGroup;
  suma: any;
  constructor(
    private fb: FormBuilder,
    private aritmetica: AritmeticaService
  )
  {
  }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      n1: ['', Validators.required],
      n2: ['', Validators.required]
    });

  }

  onSubmit(){
    if (this.form.valid) {
      this.suma = this.aritmetica.sumar(parseInt(this.form.value.n1), parseInt(this.form.value.n2));
    }else{
      console.log("Verifique sus datos");
    }
  }

}
