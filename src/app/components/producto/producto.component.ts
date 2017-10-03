import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto:any = undefined;
  id:string = "";

  constructor(private _ar:ActivatedRoute, public _ps:ProductosService) {

    this._ar.params.subscribe(data => {
      // console.log(data);
      this.id = data.id;

      _ps.cargar_producto(data.id).subscribe(prod => {
        this.producto = prod.json();
        console.log(this.producto);
      })
    })

  }

  ngOnInit() {
  }

  cargarProducto() {

  }

}
