import { Component } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
mostrarMensaje() {
  alert('DEUDA PAGADA CORRECTAMENTE');
throw new Error('Method not implemented.');
}

}
