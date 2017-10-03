import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor(public http:Http) {
    this.cargar_productos();
  }

  public cargar_productos() {

    if (this.productos.length === 0) {
      this.cargando = true;
      this.http.get("https://paginaweb-7b404.firebaseio.com/productos_idx.json").subscribe(res => {
        // console.log(res.json());

        this.productos = res.json();
        this.cargando = false;
      })
    }

  }

}
