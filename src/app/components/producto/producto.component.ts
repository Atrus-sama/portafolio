import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  id:string = "";
  url:string = "";

  constructor(private _ar:ActivatedRoute) {

    this._ar.params.subscribe(data => {
      // console.log(data);
      this.id = data.id;
      this.url = "https://paginaweb-7b404.firebaseio.com/productos/" + data.id + ".json";
    })

  }

  ngOnInit() {
  }

}
