import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-compt2',
  templateUrl: './mi-compt2.component.html',
  styleUrls: ['./mi-compt2.component.css']
})
export class MiCompt2Component implements OnInit {

  nombre: string;
  apellidos: string;
  persona: string ="";
  personas: string[] = [];
  deshabilitado: boolean = true; 
  apoyo: number =-1;
  constructor() { 
    //this.nombre = "John";
  }
  saludar(event){
    //console.log(event.target.value)
    
    this.nombre= event.target.value;
  }

  saludar2(){
    
    if(this.nombre!=""){
      this.nombre= 'Hola ' + this.nombre;
    }else{
      this.nombre= 'Hola persona desconocida'
    }
  }
  agregar(){

    /*
    this.personas[0]="todo";
    this.personas[1]= String(this.personas.length);
    this.personas[2] = "john";
    this.personas[this.personas.length-1] = "faber"; 
    */

    if(this.persona != "" && this.apoyo == -1){
      this.personas.push(this.persona);
    } else if(this.apoyo == -1){
      this.personas.push("El valor no se puede agregar");
      this.apoyo = this.personas.length-1;
    } else if(this.persona != "" && this.apoyo != -1){
      this.personas[this.apoyo] = this.persona;
      this.apoyo= -1;

    }
    this.persona="";
    /** 
    if(this.persona != "" && this.apoyo == 0){
      this.personas.push(this.persona);
    } else if(this.persona =="" && this.apoyo==0){
        this.apoyo =  1 ;
        this.persona ="El valor no se puede insetar";
        this.personas.push(this.persona)

    }else {
      this.apoyo=this.personas.length-1;
      this.personas[this.apoyo-1]=this.persona;
      if(this.personas[this.apoyo-1] != "El valor no se puede insetar"){
        this.apoyo=0;
      }
      

      
      
      

    }

    
    this.persona ="";
    **/
  }
  habilitar(){
    this.deshabilitado = false;
  }

  ngOnInit() {
  }

}
