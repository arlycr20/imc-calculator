import { Component, OnInit } from '@angular/core';
import { edad } from '../edad/edad';
import { genero } from '../genero/genero';
import { imc } from '../imc/imc';
import { rango } from '../rango/rango';



@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  genero = 0;
  sexo = '';
  altura = 0;
  edad = 0;
  peso = 0;
  rango ='';
  imc = 0;
  tipoEdad = '';

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    let resul = null;
    resul = imc(this.altura, this.peso);
    this.imc = resul;
    this.gen();
    this.estado();
    
  }

  estado(){
    let res = '';
    this.tipoEdad = edad(this.edad);
    res = rango(this.tipoEdad,this.imc, this.sexo);
    this.rango = res;
  }

  gen(){
    let res = '';
    res = genero(this.genero);
    this.sexo = res;
  }

}
