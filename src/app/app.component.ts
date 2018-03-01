import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mensaje: string

  //Recibe de a, a través del html
  mostrar(event){
    this.mensaje=event;
    console.log("mensaje recibido")
  }
}
