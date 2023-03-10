import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get historial() {
    return this.gifsService.historial;
  }

  buscar(item: string) {
    this.gifsService.buscarGifs(item)
  }

  deleteItem(item: string) {
    // console.log(item);
    this.gifsService.deleteItem(item);
  }

}
