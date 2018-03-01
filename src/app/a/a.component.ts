import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  
  //Para la imagen y los botones
  @Input() nombre: string;
  @Input() lblBtnSuscrito:string;
  @Input() lblBtnDeSuscrito: string;
  imagenUrl: string;

  //Mandar suscrito / des
  @Output() emisor= new EventEmitter;

  constructor() {
    this.nombre= "John";
   }

  ngOnInit() {
  }

  //Es mandado de b, por el event emit, luego va a la vista de a, a llama este evento
  mostrarImagen(event){    
    this.imagenUrl =  event;
  }

  //Funcionalidad de suscribirse /des 
  suscribirse(){

    this.emisor.emit('Suscrito')
  }
  desuscribirse(){
    this.emisor.emit('DeSuscrito')
    
  }

}
