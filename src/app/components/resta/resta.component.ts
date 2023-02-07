import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AritmeticaService } from 'src/app/services/aritmetica.service';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent {

  form: FormGroup;
  resta: any;
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
      this.resta = this.aritmetica.restar(parseInt(this.form.value.n1), parseInt(this.form.value.n2));
    }else{
      console.log("Verifique sus datos");
    }
  }


}
