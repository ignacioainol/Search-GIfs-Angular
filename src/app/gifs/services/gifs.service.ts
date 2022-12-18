import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'Ja5LFxJoZE9uD45a0M9nM4U3ZbmZcr3M';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial]
  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
  }
}
