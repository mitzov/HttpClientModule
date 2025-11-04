import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListService } from '../services/list-service';


@Component({
  selector: 'app-pagina3',
  imports: [FormsModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
elemento = '';
constructor(private listService: ListService) {}
aggiungi(){
this.listService.aggiungiElemento(this.elemento).subscribe()
this.elemento = ''
}

}