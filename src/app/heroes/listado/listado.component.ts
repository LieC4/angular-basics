import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'c. america'];
  heroeBorrado: string = ''

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
  }
