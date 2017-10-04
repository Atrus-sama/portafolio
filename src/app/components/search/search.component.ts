import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = undefined;

  constructor(private ar:ActivatedRoute, public _ps:ProductosService) {
    this.ar.params.subscribe(data=>{
      this.termino = data.termino;
      // console.log(this.termino);
      this._ps.buscar_producto(this.termino);
    })
  }

  ngOnInit() {
  }

}
