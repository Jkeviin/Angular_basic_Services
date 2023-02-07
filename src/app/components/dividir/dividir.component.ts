import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AritmeticaService } from 'src/app/services/aritmetica.service';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html',
  styleUrls: ['./dividir.component.css']
})
export class DividirComponent {

  form: FormGroup;
  dividir: any;
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
      this.dividir = this.aritmetica.dividir(parseInt(this.form.value.n1), parseInt(this.form.value.n2));
    }else{
      console.log("Verifique sus datos");
    }
  }


}
