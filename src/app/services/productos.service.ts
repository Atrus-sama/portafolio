import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;

  constructor(public http:Http) {
    this.cargar_productos();
  }

  public buscar_producto(termino:string) {

    // console.log("Buscando producto");
    // console.log(this.productos.length);

    if(this.productos.length == 0) {
      this.cargar_productos().then(()=>{
        //termina la carga
        this.filtrar_productos(termino);
      })
    }
    else {
      this.filtrar_productos(termino);
    }

  }

  private filtrar_productos(termino:string) {

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    // console.log(termino);
    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
        // console.log(prod);
      }
      // console.log(prod)
    })

  }

  public cargar_productos() {

    let promesa = new Promise((resolve, reject) => {
      this.cargando = true;
      this.http.get("https://paginaweb-7b404.firebaseio.com/productos_idx.json").subscribe(res => {
        // console.log(res.json());

        this.productos = res.json();
        this.cargando = false;

        resolve();
      })
    });

    return promesa

  }

  public cargar_producto(cod:string) {
    return this.http.get("https://paginaweb-7b404.firebaseio.com/productos/" + cod + ".json");
  }

}
